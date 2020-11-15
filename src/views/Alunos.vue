<template>
  <div class="alunos">
    <v-data-table
      :headers="headers"
      :items="alunos"
      class="elevation-1"
      hide-default-footer
      @click:row="selectAluno"
    ></v-data-table>
  </div>
</template>

<script>
import data from "../../data.json";

export default {
  name: 'Dashboard',
  data() {
    return {
      headers: [
        {
          text:'ID',
          value: 'id',
          align: 'start'
        },
        {
          text:'Nome',
          value: 'name',
        },
        {
          text:'Matrícula',
          value: 'matricula',
          sortable: false,
        },
      ]
    }
     
  },
  computed: {
    alunos() {
      let alunos = [];
      let count = 1;
      this.$store.state.materia.alunos.forEach( aluno => {
        data.users.forEach( user => {
          if(aluno.toString() === user.matricula.toString()){
            user.id = count;
            count ++; 
            alunos.push(user);
          }
        })
      })
      return alunos; 
    }
  },
  methods: {
    selectAluno(data){
      data.materias.forEach( mat => {
        if(this.$store.state.materia.id === mat.id){
          this.$store.state.materia = mat;
        }
      })
      this.$router.push('/materia');
    }
  },
}
</script>

<style lang="scss" scoped>
.center {
  position: relative !important;
  top: 45% !important;
}
</style>