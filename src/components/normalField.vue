<template>
  <div>
    <v-card color="secondary" width="250" height="150">
      <v-card-title>
        <div class="white--text">{{avaliacao.name}}</div>
      </v-card-title>
      <div>
        <div class="white--text"> Prova: {{ avaliacao.prova ? avaliacao.prova : "Sem avaliação" }}</div>
      </div>
      <div v-if="avaliacao.aps">
        <div class="white--text" > APS: {{ avaliacao.aps ? avaliacao.aps : "Sem avaliação" }}</div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "EditableField",
  props: {
    avaliacao: {
      type: Object,
      default: () => {} 
    },
  },
}
</script>

<style lang="scss" scoped>

</style>