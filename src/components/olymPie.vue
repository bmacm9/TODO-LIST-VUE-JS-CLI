<template lang="html">

  <section class="olym-pie row footer align-items-center justify-content-around pt-2 pb-3">
            <div class="col-7">
                <p class="ml-sm-5">&copy; 2020 Copyright <a href="https://www.github.com/bmacm9">Miguel Ángel Civico
                        Mimbrera</a></p>
            </div>
            <div class="col-5">
                <div class="row">
                    <div class="col-2">
                        <a href="#"><img class="redes" src="../assets/twitter.png"></a>
                    </div>
                    <div class="col-2">
                        <a href="#"><img class="redes" src="../assets/facebook.png"></a>
                    </div>
                    <div class="col-2">
                        <a href="#"><img class="redes" src="../assets/github.png"></a>
                    </div>
                    <div class="col-2">
                        <a href="#"><img class="redes" src="../assets/logo-youtube.png"></a>
                    </div>
                    <div class="col-2">
                        <a href="#"><img class="redes" src="../assets/instagram.png"></a>
                    </div>
                </div>
            </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'olym-pie',
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
  .olym-pie {

  }

  .footer {
    background-color: rgb(233, 233, 233);
}

.redes {
    height: 6vw;
    max-height: 50px;
}

.gris {
    background-color: rgb(240, 240, 240);
}
</style>
