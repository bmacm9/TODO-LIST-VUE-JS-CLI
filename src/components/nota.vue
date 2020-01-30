<template lang="html">

  <section class="nota border">
    <label v-bind:class="{active: tarea.completada}" class="w-100">
      <div class="row justify-content-around align-items-center">
        <div class="col-1 d-inline mt-3">
          <input type="checkbox" name="" v-model="tarea.completada"/><span class="cb-icon"></span>
        </div>
        <div class="col-9 d-inline">
          <h2>{{tarea.todo}}</h2>
          <button v-bind:class="{verde: alta}" @click="cambiarPrioridadAlta" type="button">Alta</button>
          <button v-bind:class="{amarillo: media}" @click="cambiarPrioridadMedia" type="button">Media</button
          ><button v-bind:class="{rojo: baja}" @click="cambiarPrioridadBaja" type="button">Baja</button>
        </div>

        <div class="col-1 mr-3 mr-md-0 d-inline">
          <img @click="borrar(tarea)" class="borrar" src="../assets/trash.png"/>
        </div>
      </div>
    </label>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'nota',
    props: ['tarea'],
    mounted () {
      console.log(this.tarea.prioridad)
    },
    data () {
      return {
        prioridad : "baja",
      }
    },
    methods: {
      borrar(tarea){
        this.$emit('borrarTarea', tarea);
      },
      cambiarPrioridadAlta(){
        this.prioridad = "alta";
        this.$emit('cambiarPrioridadAlta', "alta", this.tarea);
      },
      cambiarPrioridadMedia(){
        this.prioridad = "media";
        this.$emit('cambiarPrioridadMedia', "media", this.tarea);
      },
      cambiarPrioridadBaja(){
        this.prioridad = "baja";
        this.$emit('cambiarPrioridadBaja', "baja", this.tarea);
      },

    },
    computed: {
      alta(){
        if(this.tarea.prioridad != "alta"){
          return false;
        }
        return true;
      },
    
    media(){
        if(this.tarea.prioridad != "media"){
          return false;
        }
        return true;
      },
      baja(){
        if(this.tarea.prioridad != "baja"){
          return false;
        }
        return true;
      },
    },
}


</script>

<style scoped>
.nota {
  background-color: rgb(37, 37, 37);
}

label {
  cursor: pointer;
  display: inline-block;
}
label input[type="checkbox"] {
  display: none;
}
label input[type="checkbox"]:checked + .cb-icon {
  background: green;
  border: 2px solid transparent;
}
label input[type="checkbox"]:checked + .cb-icon::before {
  display: block;
}
label .cb-icon {
  width: 16px;
  height: 16px;
  display: block;
  position: relative;
  border-radius: 4px;
  border: 2px solid green;
  transition: all 0.5s ease;
}
label .cb-icon::before {
  content: "";
  top: 0px;
  left: 5px;
  width: 4px;
  height: 10px;
  display: none;
  position: absolute;
  transform: rotate(45deg);
  transition: all 0.5s ease;
  border-top: 0px solid transparent;
  border-right: 3px solid #fff;
  border-bottom: 3px solid #fff;
  border-left: 0px solid transparent;
}

.active {
  color: green;
  text-decoration: line-through;
  text-decoration-color: gray;
}

.borrar {
  min-height: 30px;
  max-height: 3vw;
  background-color: red;
}
.prioridad {
  color: white;
  background-color: gray;
  border-color: gray;
  border-radius: 10px;
}

.verde {
  border-color: green;
  background-color: green;
    color: white;
  font-weight: bold;
}
.amarillo {
  border-color: rgb(124, 106, 0);
  background-color: rgb(124, 106, 0);
    color: white;
  font-weight: bold;
}
.rojo {
  border-color: red;
  background-color: red;
    color: white;
  font-weight: bold;
}
</style>
