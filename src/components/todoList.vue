<template lang="html">

  <section class="todo-list col-12 col-lg-9">
    <!-- Cabecero -->
    <cabecero></cabecero>

    <!-- Input boton introducir TODO -->
    <introducirTodo v-on:addTodo="add"></introducirTodo>

    <!-- Pendientes y borrar -->
    <borrarAcabados :total="total" :pendiente="pendiente" @borrarCompletados="borrarCompletados"></borrarAcabados>

    <!-- Cada uno de los TODO -->
    <main class="row mb-5">
      <div :key="tarea.todo" v-for="tarea in ordenado" class="col-12">
        <nota @cambiarPrioridadAlta="cambiarPriAlta(tarea)" @cambiarPrioridadMedia="cambiarPriMedia(tarea)" @cambiarPrioridadBaja="cambiarPriBaja(tarea)" @borrarTarea="borrarTarea(tarea)" :tarea="tarea"></nota>
      </div>
    </main>
   
    <!-- Pie de pagina -->
    <pie class="pb-3 pt-2 border-top"></pie>

  </section>

</template>


<script lang="js">

import nota from './nota.vue';
import cabecero from './cabecero.vue';
import pie from './pie.vue';
import introducirTodo from './introducirTODO.vue';
import borrarAcabados from './borrarAcabados.vue';

import axios from 'axios';

  export default  {
    components: {
      nota,
      cabecero,
      pie,
      introducirTodo,
      borrarAcabados
    },
    name: 'todo-list',
    props: [],
    mounted() {
        if (localStorage.getItem("tareas")) {
            try {
                this.tareas = JSON.parse(localStorage.getItem("tareas"));
                axios.get('https://www.omdbapi.com/?s=spider&apikey=dc81505b')
                  .then(function(response){
                    console.log(response.data.Search[0].Title);
                  });
            }
            catch (e) {
                localStorage.removeItem("tareas");
            }

        }


    },
    updated() {
        this.save();
    },
    data () {
      return {
        tareas: [],
        asc: "ascendente",
        prioridad: "baja",
        completada: false,
      }
    },
    methods: {
      cambiarPriAlta(tarea){
     
        tarea.prioridad="alta";
        this.sorting();
        this.save();
      },
      cambiarPriMedia(tarea){
     
        tarea.prioridad="media";
        this.save();
      },
      cambiarPriBaja(tarea){
     
        tarea.prioridad="baja";
        this.save();
      },
      add(todo) {
        if (!todo) {
            return;
        }
        this.tareas.push({ "todo": todo, "completada": this.completada, "prioridad":this.prioridad });
      },
        save() {
            const parsed = JSON.stringify(this.tareas);
            localStorage.setItem("tareas", parsed);
        },
        borrarCompletados() {
            this.tareas = this.tareas.filter(function (tarea) {
                return !tarea.completada;
            });
            this.save();
        },
        borrarTarea(tarea){
          this.tareas.splice(this.tareas.indexOf(tarea), 1);
        },
        sorting(){
              return this.tareas.slice().sort(function (nota1, nota2) {
                var a;
                var b;
                  if(nota1.prioridad=="baja"){
                    a = 1;
                  }else if(nota1.prioridad=="media"){
                    a = 2;
                  }else{
                    a = 3
                  }
                  if(nota2.prioridad=="baja"){
                    b = 1;
                  }else if(nota2.prioridad=="media"){
                    b = 2;
                  }else{
                    b = 3
                  }
                  return (a > b) ? -1 : (a < b) ? 1 : 0;
              });
        },
    },
    computed: {
      terminada: function () {
        var contador = 0;
        for (var tarea of this.tareas) {
            if (tarea.completada)
                contador++;
        }
        return contador;
      },

      total: function () {
        return this.tareas.length;
      },

      ordenado: function () {
        return this.sorting();
      },

      pendiente: function(){
        return (this.total - this.terminada);
      }
    },
    
}
</script>

<style scoped>
.todo-list {
  background-color: rgb(39, 36, 32);
  color: white;
}
</style>
