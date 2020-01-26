<template>
  <div id="app">
    <todoList></todoList>
  </div>
</template>

<script>

import todoList from './components/todoList.vue';

export default {
  name: "app",
  components: {
    todoList
  }
};
</script>

<style>
#app {
}
</style>
