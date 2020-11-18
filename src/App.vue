<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      clipped
      color="secondary"
      v-model="drawer"
      v-if="route.currentRoute.path !== '/login'"
    >
      <v-list dense>
        <v-list-item link to="/" @click.stop="drawer = !drawer">
          <v-list-item-action>
            <v-icon class="white--text">mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about" @click.stop="drawer = !drawer">
          <v-list-item-action>
            <v-icon class="white--text">mdi-information</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
      v-if="route.currentRoute.path !== '/login'"
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon v-if="drawer">mdi-menu-left</v-icon>
        <v-icon v-else>mdi-menu-right</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>{{ user.nome }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar color="primary" v-bind="attrs" v-on="on">
            <v-icon dark>mdi-account-circle</v-icon>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="action(item.title)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <router-view align="center" justify="center"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
      color="primary"
      app
      v-if="route.currentRoute.path !== '/login'"
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      items: [ 
        {
          title:'Sair'
        },
      ]
    }),
    computed: {
      route() {
        return this.$router;
      },
      user() {
        return this.$store.state.user;
      }
    },
    beforeCreate () {
      this.$vuetify.theme.themes.light = {
        primary: '#3C435E',
        secondary: '#414863',
        terciary: '#2f2e43',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        button: '#414863',
      }
      this.$router.beforeEach((to, from, next) => {
        if(to.name === "Login"){
          document.title = "AV1"
          next()
          return;
        }
          document.title = to.name
          next()
      });
      if(this.$router.currentRoute.path !== "/login"){
        this.$router.push("/login")
      }
    },
    methods: {
      action(title) {
        if(title === 'Sair'){
          this.$router.push('/login');
        }
      }
    },
  }
</script>