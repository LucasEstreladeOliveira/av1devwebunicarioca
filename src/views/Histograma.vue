<template>
  <div>
    <HistogramSlider
        :width="600"
        :bar-height="100"
        :data="medias"
    />
  </div>
</template>

<script>
import data from "../../data.json";
import { media } from "../utils/calcHelper"
export default {
  computed: {
    alunos() {
      let alunos = [];
      this.$store.state.materia.alunos.forEach( aluno => {
        data.users.forEach( user => {
          if(aluno.toString() === user.matricula.toString()){
            alunos.push(user);
          }
        })
      })
      return alunos; 
    },
    avaliacoes() {
      let avaliacoes = [];
      this.alunos.forEach( aluno => {
        aluno.materias.forEach( mat => {
          if(this.$store.state.materia.id === mat.id){
          avaliacoes.push(mat.avaliacoes);
          }
        })
      })
      return avaliacoes;
    },
    medias() {
      let medias = [];
      this.avaliacoes.forEach( av => {
        medias.push(parseInt(media(av)));
      })
      return medias;
    },
  },
}
</script>

<style lang="scss" scoped>

</style>