<template lang="html">

  <section class="pie row justify-content-center mt-4">
    <div class="col-12 text-center gray">
      Desarrollado por Miguel Ángel Civico Mimbrera
    </div>
    <div class="col-12 text-center gray">
      Codigo disponible en <a class="green" href="https://github.com/bmacm9"> GitHub</a>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'pie',
    props: [],
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
  .pie {

  }
  .gray{
    color:rgb(114, 114, 114);
  }
  .green{
    color: green;
    font-weight: bold;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
