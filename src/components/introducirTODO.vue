<template lang="html">

  <section class="introducirTodo row mb-3">
    <div class="col-9 ml-lg-5">
      <input @keyup.enter="addNew" class="w-100 inputText p-1" type="text" v-model="todo" placeholder="¿Qué quieres recordar?"/>
    </div>
    <div class="col-2 ml-lg-4">
      <button class="btn btn-info btn-verde" @click="addNew" type="button">Agregar tarea</button>
    </div>
  </section>



    <!--<div class="row mb-3">
      <div class="col-9 ml-lg-5">
        <input @keyup.enter="add" class="w-100 inputText p-1" type="text" v-model="todo" placeholder="¿Qué quieres recordar?"/>
      </div>
      <div class="col-2 ml-lg-4">
        <button class="btn btn-info btn-verde" @click="add" type="button">Agregar tarea</button>
      </div>
    </div>-->

</template>

<script lang="js">

  export default  {
    name: 'introducirTodo',
    props: [],
    mounted () {

    },
    data () {
      return {
        todo: "",
      }
    },
    methods: {
      addNew(){
        console.log(this.todo)
        this.$emit('addTodo', this.todo);
        this.todo='';
      },
    },
    computed: {

    }
}


</script>

<style scoped>
.introducir-todo {
}

.inputText {
  border-radius: 10px;
}

.btn-verde {
  background-color: green;
  border-color: white;
}
</style>
