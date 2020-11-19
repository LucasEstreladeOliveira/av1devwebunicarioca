<template>
  <div class="dash">
    <v-row>
      <v-col v-for="mat in user.materias" v-bind:key="mat.idMateria">
        <v-card color="secondary" width="150" height="150" @click="setMateria(mat)">
          <div class="white--text center">{{mat.nome}}</div>
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
    async setMateria(mat) {
      if(!this.user.isProf){
        await axios.post('http://localhost:8081/av2DevWeb/avaliacoes', {'turmaMateriaIdmateria': mat.idmateria, 'alunoIdaluno': this.user.id, "isProf": false})
          .then((res) => {
            this.$store.state.materia = mat;
            this.$store.state.materia.avaliacoes = [
              {
                  "name" : "AV1", 
                  "prova": res.data.AV1,
                  "aps": res.data.APS_1
              },
              {
                  "name" : "AV2", 
                  "prova": res.data.AV2,
                  "aps": res.data.APS_2
              },
              {
                  "name" : "AV3", 
                  "prova": res.data.AV3,
              },
            ]
          }
        )
        this.$router.push('/materia') 
      }else {
        await axios.post('http://localhost:8081/av2DevWeb/avaliacoes', {'turmaMateriaIdmateria': mat.idmateria, 'turmaProfessorIdprofessor': this.user.id, "isProf": true})
          .then((res) => {
              this.$store.state.user.alunos = res.data;
              this.$router.push('/stats');
          }
        ) 
      }

    },
  },
  async beforeCreate () {

  },
}
</script>

<style scoped>
.center {
  position: relative !important;
  top: 45% !important;
}
</style>