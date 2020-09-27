<template>
  <div class="dash">
    <v-row>
      <v-col v-for="mat in user.materias" v-bind:key="mat.id">
        <v-card color="secondary" width="150" height="150" @click="setMateria(mat)">
          <div class="white--text center">{{mat.name}}</div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    user() {
      return this.$store.state.user; 
    }
  },
  methods: {
    setMateria(mat) {
      this.$store.state.materia = mat;
      this.$router.push('/materia') 
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