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
  // import data from '../../data.json';
  import axios from "axios";
  export default {
    data() {
      return {
        matricula: '',
        senha: ''
      }
    },
    methods: {
      async login() {
        let login = {
          matricula: this.matricula,
          senha: this.senha
        }
        await axios.post('http://localhost:8081/av2DevWeb/auth', login)
        .then(async (res) => {
          if(res.data){
            this.$store.state.user = res.data;
            await axios.post('http://localhost:8081/av2DevWeb/materias', {'matricula': this.$store.state.user.matricula, "isProf": this.$store.state.user.isProf})
              .then((res) => {
                if(this.$store.state.user.isProf){
                  this.$store.state.materia = res.data;
                  this.$store.state.user.materias = res.data;
                }else {
                  this.$store.state.user.materias = res.data;
                }
            }
          );
          console.log(this.$store.state.user)
            this.$router.push('/');
          }
        });
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>