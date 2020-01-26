<template lang="html">

  <section class="todo-list">
    <!-- Cabecero -->
    <cabecero></cabecero>

    <!-- Input boton introducir TODO -->
    <div class="row mb-3">
      <div class="col-9 ml-5">
        <input @keyup.enter="add" class="w-100 inputText p-1" type="text" v-model="todo" placeholder="¿Qué quieres recordar?"/>
      </div>
      <div class="col-2 ml-4">
        <button class="btn btn-info" @click="add" type="button">Agregar tarea</button>
      </div>
    </div>


    <!-- Pendientes y borrar -->
    <div class="row pt-2 pb-2 mb-4 border-top border-bottom">
      <div class="col-4 ml-5">
        <h5 v-if="total>0"> {{ pendiente }} Tareas pendientes de un total de {{ total }} </h5>
      </div>
      <div class="col-4">
        <a href="#" class="link" v-if="total>0" v-on:click="borrarCompletados"><strong>x</strong> Borrar tareas completadas</a> 
      </div>
    </div>



    <!-- Cada uno de los TODO -->
    <div class="row mb-5">
      <div :key="tarea.todo" v-for="tarea in ordenado" class="col-12">
        <nota :tarea="tarea"></nota>
      </div>
    </div>
    
    <!-- Ordenar -->
    <div class="row ml-5">
      <div class="col-12">
        <form v-if="total>1">
          <div class="row">
            <div class="col-1">
              <input type="radio" name="orden" checked value="ascendente" v-model="asc">
            </div>
            <div class="col-5">
              <label for="orden">Ordenar Alfabéticamente Ascendente</label>
            </div>
            <div class="col-1">
              <input type="radio" name="orden" value="descendente" v-model="asc">
            </div>
            <div class="col-5">
              <label for="orden">Ordenar Alfabéticamente Descendente</label>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Pie de pagina -->
    <pie class="pb-3 pt-2 border-top"></pie>

  </section>

</template>

<script lang="js">
import nota from './nota.vue';
import cabecero from './cabecero.vue';
import pie from './pie.vue';

  export default  {
    components: {
      nota,
      cabecero,
      pie
    },
    name: 'todo-list',
    props: ['tarea'],
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
    data () {
      return {
        todo: "",
        tareas: [],
        asc: "ascendente"
      }
    },
    methods: {
      add() {
            if (!this.todo) {
                return;
            }
            this.tareas.push({ "todo": this.todo, "completada": this.completada });
            this.todo = "";
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
        sorting(){
          if (this.asc == "ascendente") {
              return this.tareas.slice().sort(function (nota1, nota2) {
                  var a = nota1.todo.toLowerCase();
                  var b = nota2.todo.toLowerCase();
                  return (a < b) ? -1 : (a > b) ? 1 : 0;
              });
          } else {
              return this.tareas.slice().sort(function (nota1, nota2) {
                  var a = nota1.todo.toLowerCase()
                  var b = nota2.todo.toLowerCase();
                  return (a < b) ? 1 : (a > b) ? -1 : 0;
              });
          }
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

  .active {
    background-color: green;
  }

  .inputText{
    border-radius: 10px;
  }

  .link{
    color: rgb(189, 170, 64);
  }
</style>
