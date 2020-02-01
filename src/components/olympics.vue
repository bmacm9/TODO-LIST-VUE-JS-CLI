<template lang="html">

  <section class="olympics">
    <olymhero></olymhero>
    <olysection></olysection>
    <olymCarousel></olymCarousel>
    <olymPie></olymPie>
  </section>

</template>

<script lang="js">

import olymhero from './olymhero.vue';
import olysection from './olymsection.vue';
import olymCarousel from './olymCarousel.vue';
import olymPie from './olymPie.vue';

  export default  {
    name: 'olympics',
    components: {
      olymhero,
      olysection,
      olymCarousel,
      olymPie,
    },
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
  .olympics {

  }
</style>
