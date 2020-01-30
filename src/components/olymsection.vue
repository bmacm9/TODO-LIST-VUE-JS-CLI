<template lang="html">

  <section class="olymsection row m-2">
            <!-- FIRST ARTICLE -->
            <router-view></router-view>
            
            <olymAside></olymAside>
  </section>

</template>

<script lang="js">

import olymAside from './olymAside.vue';
  export default  {
    components:{
        olymAside
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
