<template>
  <div>
        <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="button"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="matricula"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="senha"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="button" class="white--text" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
  import data from '../../data.json';
  export default {
      data() {
        return {
          matricula: '',
          senha: ''
        }
      },
      methods: {
        login() {
          data.users.forEach( user => {
            console.log("user mat", user.matricula)
            console.log("user senha", user.senha)
            console.log("this mat", this.matricula)
            console.log("this senha", this.senha)
            if(user.matricula.toString() === this.matricula && user.senha === this.senha){
                this.$store.state.user = user;
                this.$router.push('/')
            }
          })
        }
      },
  }
</script>

<style lang="scss" scoped>

</style>