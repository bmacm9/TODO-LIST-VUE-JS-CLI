<template lang="html">

  <section class="olymhero row mt-5">
    <div class="col-12 p-0 heroCont">
        <img class="mainImage img-responsive img-fluid" src="../assets/hero.jpeg" style="width:100%;">
        <div class="carousel-caption lema">
            <h1 class="letra">明日出会う</h1>
            <h1 class="letra">Descubre el Mañana</h1>
        </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'olymhero',
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
.olymhero {
}


.mainImage {
    filter: brightness(40%);
}

.lema {
    top: 50%;
    transform: translateY(-40%);
}

.letra {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 4vw;
}

.contenedor {
    padding-left: 0;
    padding-right: 0;
}



</style>
