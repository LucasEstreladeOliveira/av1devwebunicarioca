<template>
  <div class="dash">
    <v-row>
      <v-col v-for="av in materia.avaliacoes" v-bind:key="av.name">
        <v-card color="secondary" width="250" height="150">
          <v-card-title>
            <div class="white--text">{{av.name}}</div>
          </v-card-title>
          <div class="white--text"> Prova: {{ av.prova ? av.prova : "Sem avaliação" }}</div>
          <div class="white--text" v-if="av.aps"> APS: {{ av.aps ? av.aps : "Sem avaliação" }}</div>
        </v-card>
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
export default {
  name: 'Dashboard',
  computed: {
    materia() {
      return this.$store.state.materia; 
    },
    media(){
      let total = 0;
      let prevTotal = 0;
      this.materia.avaliacoes.forEach( av => {
        let prova = 0;
        let aps = 0;
        let avTotal = 0;
        if(av.prova){
          prova = av.prova;
        }
        if(av.aps){
          aps = av.aps
        }
        avTotal = prova + aps;
        if(avTotal < prevTotal){
          total += 0;
        }else{
          total += avTotal;
        }
        prevTotal = avTotal;
      })
      total = total/2 
      return total.toPrecision(2);
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