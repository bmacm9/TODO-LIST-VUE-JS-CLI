<template lang="html">

  <section class="total row justify-content-center">
    <!-- Cabecero -->
    <div class="todo-list col-md-11 col-lg-11 col-xl-10">
      <cabecero></cabecero>

      <!-- Input boton introducir TODO -->
      <introducirTodo v-on:addTodo="add"></introducirTodo>

      <!-- Pendientes y borrar -->
      <borrarAcabados :total="total" :pendiente="pendiente" @borrarCompletados="borrarCompletados"></borrarAcabados>

      <!-- Cada uno de los TODO -->
      <main v-if="busquedaEmpty" class="row mb-5">
              <transition-group class="col-12" name="list" tag="nota">
            <nota :key="tarea.todo" v-for="tarea in ordenado" @cambiarPrioridadAlta="cambiarPriAlta(tarea)" @cambiarPrioridadMedia="cambiarPriMedia(tarea)"
              @cambiarPrioridadBaja="cambiarPriBaja(tarea)" @borrarTarea="borrarTarea(tarea)" :tarea="tarea"></nota>
              </transition-group>
        
      </main>

      <main v-if="!busquedaEmpty" class="row mb-5">
          <nota :key="tarea.todo" v-for="tarea in buscado" class="col-12" @cambiarPrioridadAlta="cambiarPriAlta(tarea)" @cambiarPrioridadMedia="cambiarPriMedia(tarea)"
            @cambiarPrioridadBaja="cambiarPriBaja(tarea)" @borrarTarea="borrarTarea(tarea)" :tarea="tarea"></nota>
      </main>

      <buscador @buscar="updateBusqueda" v-if="total>1" :busqueda="busqueda"></buscador>

      <!-- Pie de pagina -->
      <pie class="pb-3 pt-2 border-top"></pie>
    </div>
  </section>

</template>


<script lang="js">

  import nota from './nota.vue';
  import cabecero from './cabecero.vue';
  import pie from './pie.vue';
  import introducirTodo from './introducirTODO.vue';
  import borrarAcabados from './borrarAcabados.vue';
  import buscador from './buscador.vue'

  export default {
    components: {
      nota,
      cabecero,
      pie,
      introducirTodo,
      borrarAcabados,
      buscador
    },
    name: 'todo-list',
    props: [],
    mounted() {
      if (localStorage.getItem("tareas")) {
        try {
          this.tareas = JSON.parse(localStorage.getItem("tareas"));
        }
        catch (e) {
          localStorage.removeItem("tareas");
        }

      }


    },
    updated() {
      this.save();
    },
    data() {
      return {
        tareas: [],
        asc: "ascendente",
        prioridad: "baja",
        completada: false,
        busqueda: "",
        tareasBuscadas: []
      }
    },
    methods: {
      updateBusqueda(introducido){
        this.busqueda = introducido;
      },
      buscarTareas(){
        this.tareasBuscadas = []
        for(let i of this.tareas){
          if(i.todo.includes(this.busqueda)){
              this.tareasBuscadas.push(i)
          }
        }
        return this.sorting(this.tareasBuscadas);

      },
      cambiarPriAlta(tarea) {

        tarea.prioridad = "alta";
        this.sorting(this.tareas);
        this.save();
      },
      cambiarPriMedia(tarea) {

        tarea.prioridad = "media";
        this.save();
      },
      cambiarPriBaja(tarea) {

        tarea.prioridad = "baja";
        this.save();
      },
      add(todo) {
        if (!todo) {
          return;
        }
        let fecha = new Date();
        this.tareas.push({ "todo": todo, "completada": this.completada, "prioridad": this.prioridad, "date": fecha.getTime() });
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
      borrarTarea(tarea) {
        this.tareas.splice(this.tareas.indexOf(tarea), 1);
      },
      sorting(arrayTareas) {
        return arrayTareas.slice().sort(function (nota1, nota2) {
          var a;
          var b;
          if (nota1.prioridad == "baja") {
            a = 1;
          } else if (nota1.prioridad == "media") {
            a = 2;
          } else {
            a = 3
          }
          if (nota2.prioridad == "baja") {
            b = 1;
          } else if (nota2.prioridad == "media") {
            b = 2;
          } else {
            b = 3
          }
          return (a > b) ? -1 : (a < b) ? 1 : 0;
        });
      },
    },
    computed: {
      buscado: function(){
        return this.buscarTareas();
      },
      busquedaEmpty: function(){
        if(this.busqueda == "")
          return true;
        return false;
      },
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
        return this.sorting(this.tareas);
      },

      pendiente: function () {
        return (this.total - this.terminada);
      },
      
    },

  }
</script>

<style scoped>
  .total {
    background-color: rgb(14, 53, 14);
  }

  .todo-list {
    background-color: rgb(39, 36, 32);
    color: white;
    margin-top: 60px;
    min-height: 93.6vh;
  }

  .list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}

</style>