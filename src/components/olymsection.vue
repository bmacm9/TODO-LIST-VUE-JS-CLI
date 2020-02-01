<template lang="html">

  <section class="olymsection row m-2">

    <olymArticles></olymArticles>
    <olymAside></olymAside>
  </section>

</template>

<script lang="js">

import olymAside from './olymAside.vue';
import olymArticles from './olymArticles.vue';
  export default  {
    components:{
        olymAside,
        olymArticles
    },
    name: 'olymsection',
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
  .olymsection {

  }

</style>
