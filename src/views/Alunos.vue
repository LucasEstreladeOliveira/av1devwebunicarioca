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
// import data from "../../data.json";

export default {
  name: 'Dashboard',
  data() {
    return {
      headers: [
        {
          text:'ID',
          value: 'aluno.idaluno',
          align: 'start'
        },
        {
          text:'Nome',
          value: 'aluno.nome',
        },
        {
          text:'Matrícula',
          value: 'aluno.matricula',
          sortable: false,
        },
      ]
    }
     
  },
  computed: {
    alunos() {
      return this.$store.state.user.alunos;
    }
  },
  methods: {
    selectAluno(data){
      this.$store.state.materia.idAluno = data.aluno.idaluno;
      this.$store.state.materia.avaliacoes =  [
        {
          "id": 1,
          "name" : "AV1", 
          "prova": data.turma.AV1,
          "aps": data.turma.APS_1
        },
        {
          "id": 2,
          "name" : "AV2", 
          "prova": data.turma.AV2,
          "aps": data.turma.APS_2
        },
        {
          "id": 3,
          "name" : "AV3", 
          "prova": data.turma.AV3,
        },
      ]
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