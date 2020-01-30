<template>
  <div id="app">
    <olymcabecera></olymcabecera>
    <olymhero></olymhero>
    <olysection></olysection>
    <olymCarousel></olymCarousel>
    <olymPie></olymPie>
    <olymCookies></olymCookies>
  </div>
</template>

<script>

import olymcabecera from './components/olymcabecera.vue';
import olymhero from './components/olymhero.vue';
import olysection from './components/olymsection.vue';
import olymCarousel from './components/olymCarousel.vue';
import olymPie from './components/olymPie.vue';
import olymCookies from './components/olymCookies.vue'

export default {
  name: "app",
  components: {
    olymcabecera,
    olymhero,
    olysection,
    olymCarousel,
    olymPie,
    olymCookies
  }
};
</script>

<style>
.row{
  margin-right: 0;
  margin-left: 0;
}
.container-fluid{
  padding: 0;
}

</style>
