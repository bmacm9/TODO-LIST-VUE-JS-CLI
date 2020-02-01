<template lang="html">

  <section class="buscador introducirTodo row mb-3">
    <div class="col-11 ml-lg-5">
      <input @keyup="update" v-model="introducido" class="w-100 inputText p-1" type="text" placeholder="Buscar recordatorio..." />
    </div>
  </section>

</template>


<script lang="js">

  export default  {
    name: 'buscador',
    props: [],
    mounted () {
    
    },
    data () {
      return {
        introducido:""
      }
    },
    methods: {
      update() {
        this.$emit('buscar', this.introducido);
      },
    },
    computed: {

    },
}


</script>

<style scoped>
  .buscador {

  }
  .inputText{
    border-radius: 10px;
  }
</style>
