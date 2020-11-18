<template>
  <div class="dash">
    <v-row>
      <v-col v-for="mat in user.materias" v-bind:key="mat.id">
        <v-card color="secondary" width="150" height="150" @click="setMateria(mat)">
          <div class="white--text center">{{mat.name}}</div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Dashboard',
  computed: {
    user() {
      return this.$store.state.user; 
    }
  },
  methods: {
    setMateria(mat) {
      this.$store.state.materia = mat;
      if(!this.user.isProf){
        this.$router.push('/materia') 
      }else{
        this.$router.push('/stats') 
      }
    },
    async getMaterias(matricula) {
      await axios.post('http://localhost:8081/projeto/materias', {'matricula': matricula})
        .then((res) => {
          console.log(res.data);
        }
      );
    }
  },
  created () {
    this.getMaterias(this.user.matricula);
  },
}
</script>

<style scoped>
.center {
  position: relative !important;
  top: 45% !important;
}
</style>