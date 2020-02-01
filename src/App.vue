<template>
  <div id="app">
    <olymcabecera></olymcabecera>
    <keep-alive>  
      <router-view></router-view>
    </keep-alive>
    <olym-cookies></olym-cookies>
  </div>
</template>

<script>

import olymcabecera from './components/olymcabecera.vue';
import olymCookies from './components/olymCookies.vue';

export default {
  name: "app",
  components: {
    olymcabecera,
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
