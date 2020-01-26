<template lang="html">

  <section class="nota">
    <h2 v-bind:class="{active: tarea.completada}">
      <input class="ml-5 mr-5" type="checkbox" v-model="tarea.completada">{{tarea.todo}}
    </h2>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'nota',
    props: ['tarea'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
.nota {
}

.active {
  background-color: green;
}
</style>
