<template>
  <div class="dash">
    <v-row>
      <v-col v-for="av in materia.avaliacoes" v-bind:key="av.name">
        <div v-if="user.isProf">
          <EditableField :avaliacao="av" :idAluno="$store.state.materia.idAluno" :numAv="av.id" :idProfessor="$store.state.user.id" :idMateria="idMateria"/>
        </div>
        <div v-else>
          <NormalField :avaliacao="av"/>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" style="padding-top:150px">
      <v-col>
        <v-card color="secondary" width="250" height="150">
          <div class="white--text center">Média | {{ media }}</div>
        </v-card>
      </v-col>
      <v-col>
        <v-btn @click="voltar" color="secondary" width="250" height="150">Voltar <v-icon>mdi-arrow-left</v-icon></v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import EditableField from "../components/editableField"
import NormalField from "../components/normalField"
import { media } from "../utils/calcHelper";

export default {
  name: 'Dashboard',
  components: {
    EditableField,
    NormalField
  },
  data() {
    return {
      editProva: false,
      editAps: false,
      idMateria: null
    }
  },
  computed: {
    materia() {
      return this.$store.state.materia; 
    },
    user () {
      return this.$store.state.user;
    },
    media(){
      return media(this.materia.avaliacoes);
    }
  },
  methods: {
      voltar() {
        if(this.$store.state.user.isProf) {
          this.$router.push('/stats')
        }else {
          this.$store.state.materia = null;
          this.$router.push('/')
        }
          
      }
  },
  mounted () {
    this.idMateria = this.$store.state.materia["0"].idmateria; 
  },
}
</script>

<style scoped>
.center {
  position: relative !important;
  top: 45% !important;
}
</style>