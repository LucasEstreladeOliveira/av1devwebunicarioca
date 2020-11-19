<template>
  <div>
    <v-card color="secondary" width="250" height="150">
      <v-card-title>
        <div class="white--text">{{avaliacao.name}}</div>
      </v-card-title>
      <div @dblclick="editProva = !editProva">
        <div class="white--text" v-if="!editProva"> Prova: {{ avaliacao.prova ? avaliacao.prova : "Sem avaliação" }}</div>
        <v-text-field v-else v-model="avaliacao.prova"></v-text-field>
      </div>
      <div v-if="avaliacao.aps" @dblclick="editAps = !editAps">
        <div class="white--text" v-if="!editAps"> APS: {{ avaliacao.aps ? avaliacao.aps : "Sem avaliação" }}</div>
        <v-text-field v-else v-model="avaliacao.aps"></v-text-field>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditableField",
  data() {
    return {
      editProva: false,
      editAps: false,
    }
  },
  props: {
    avaliacao: {
      type: Object,
      default: () => {} 
    },
    idAluno: {
      type: Number,
      default: null
    },
    numAv: {
      type: Number,
      default: null
    },
    idMateria: {
      type: Number,
      default: null
    },
    idProfessor: {
      type: Number,
      default: null
    }
  },
  watch: {
    async editProva() {
      this.avaliacao.prova = new Number(this.avaliacao.prova)
      console.log(this.editProva);
      if(!this.editProva){
        let prova = {
          'id':{
            "alunoIdaluno": this.idAluno, 
            "turmaMateriaIdmateria": this.idMateria , 
            "turmaProfessorIdprofessor": this.idProfessor, 
            "isProf": true 
          }, 
          ['AV'+this.numAv]: this.avaliacao.prova
        };

        await axios.post('http://localhost:8081/av2DevWeb/editNotas', prova )
          .then((res) => {
              this.$store.state.user.alunos = res.data;
              this.$router.push('/stats');
          }
        );
      }
    },
    editAps() {
      this.avaliacao.aps = new Number(this.avaliacao.aps)
      console.log("APS_"+this.numAv) 
    }
  },
}
</script>

<style lang="scss" scoped>

</style>