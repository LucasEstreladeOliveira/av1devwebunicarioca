<template>
  <div class="dash">
    <v-row>
      <v-col v-for="av in materia.avaliacoes" v-bind:key="av.name">
        <EditableField :avaliacao="av"/>
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
import { media } from "../utils/calcHelper";

export default {
  name: 'Dashboard',
  components: {
    EditableField,
  },
  data() {
    return {
      editProva: false,
      editAps: false,
    }
  },
  computed: {
    materia() {
      return this.$store.state.materia; 
    },
    media(){
      return media(this.materia.avaliacoes);
    }
  },
  methods: {
      voltar() {
          this.$store.state.materia = null;
          this.$router.push('/')
      }
  },

}
</script>

<style scoped>
.center {
  position: relative !important;
  top: 45% !important;
}
</style>