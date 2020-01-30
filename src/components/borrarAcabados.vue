<template lang="html">

  <section v-if="total>0" class="borrar-acabados row pt-2 pb-2 mb-4 border-top border-bottom">
    <div class="col-4 ml-5">
      <h5 :total="total" :pendiente="pendiente"> {{ pendiente }} Tareas pendientes de un total de {{ total }} </h5>
    </div>
    <div class="col-4">
      <a href="#" class="link"  v-on:click="borrarCompletados"><strong>x</strong> Borrar tareas completadas</a> 
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'borrar-acabados',
    props: ['total', 'pendiente'],
    mounted () {
      
    },
    data () {
      return {

      }
    },
    methods: {
      borrarCompletados(){
        this.$emit('borrarCompletados');
      }
    },
    computed: {

    }
}


</script>

<style scoped>
.borrar-acabados {
}

.link {
  color: rgb(189, 170, 64);
}
</style>
