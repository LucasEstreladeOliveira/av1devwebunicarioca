<template>
  <div class="alunos">
    <v-row>
      <v-col cols="4" class="pad">
        <v-card color="secondary" width="250" height="250" link to="/alunos">
          <div class="white--text center text-h5">Alunos</div>
        </v-card>
      </v-col>
      <v-col cols="4" class="pad">
        <v-card color="secondary" width="250" height="250">
            <v-card-title>
                <div class="white--text center">Média</div>
            </v-card-title>
            <v-card-text style="padding: 45px">
                <div class="white--text"> {{ media }} </div>
            </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" class="pad">
        <v-card color="secondary" width="250" height="250">
            <v-card-title>
                <div class="white--text center">Desvio Padrão</div>
            </v-card-title>
            <v-card-text style="padding: 45px">
                <div class="white--text"> {{desvio}} </div>
            </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" class="pad">
        <v-card color="secondary" width="250" height="250">
            <v-card-title>
                <div class="white--text">Quartis</div>
            </v-card-title>
            <v-card-text style="padding: 45px">
                <div class="white--text">Q1: {{quartis.q1}}</div>
                <div class="white--text">Q2: {{quartis.q2}}</div>
                <div class="white--text">Q3: {{quartis.q3}}</div>
            </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" class="pad">
        <v-card color="secondary" width="250" height="250" link to="/histograma">
            <div class="white--text center text-h5">Histograma</div>
        </v-card>
      </v-col>
      <v-col cols="4" class="pad">
        <v-card color="secondary" width="250" height="250">
            <v-card-title>
                <div class="white--text">Maior e Menor Nota</div>
            </v-card-title>
            <v-card-text>
                <div class="white--text text-h6">Maior: </div>
                <div class="white--text text-subtitle-1"> {{maior}} </div>
            </v-card-text>
            <v-card-text>
                <div class="white--text text-h6">Menor: </div>
                <div class="white--text text-subtitle-1"> {{menor}} </div>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import data from "../../data.json";
import { media, quartil, desvio_padrao } from "../utils/calcHelper"

export default {
  name: 'Dashboard',
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
    media() {
      let total = 0; 
      this.avaliacoes.forEach( av => {
        total += parseInt(media(av));
      })      
      return total/this.alunos.length;
    },
    quartis() {
      let quartis = {};
      
      quartis.q1 = quartil(this.medias, 0.25);
      quartis.q2 = quartil(this.medias, 0.5);
      quartis.q3 = quartil(this.medias, 0.75);
      return quartis;
    },
    medias() {
      let medias = [];
      this.avaliacoes.forEach( av => {
        medias.push(parseInt(media(av)));
      })
      return medias;
    },
    maior() {
      return Math.max(...this.medias);
    },
    menor() {
      return Math.min(...this.medias);
    },
    desvio() {
      return desvio_padrao(this.medias);
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.center {
  position: relative !important;
  top: 45% !important;
}
.pad {
    padding: 50px
}
</style>