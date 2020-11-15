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
        <v-text-field v-else v-model="avaliacao.prova"></v-text-field>
      </div>
    </v-card>
  </div>
</template>

<script>
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
  },
  watch: {
    editProva() {
      this.avaliacao.prova = new Number(this.avaliacao.prova) 
    }
  },
}
</script>

<style lang="scss" scoped>

</style>