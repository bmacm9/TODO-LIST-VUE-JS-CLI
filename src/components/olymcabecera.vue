<template lang="html">

  <section class="olymcabecera">
    <div class="col-12">
                <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
                    <a class="navbar-brand" href="#"><img class="img-fluid logo" src="../assets/olympics-logo.png"></a>
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav mx-auto text-center">
                            <li class="nav-item">
                                <router-link to="/home" class="nav-link">Inicio</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Noticias</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <a class="dropdown-item" href="#">Historia</a>
                                    <a class="dropdown-item" href="#">Ultimas Noticias</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Nosotros</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <a class="dropdown-item" href="#"></a>
                                    <a class="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <router-link to="/notas" class="nav-link">Recordatorios</router-link>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <form class="form-inline mx-auto mx-md-0">
                                <button class="btn btn-primary mr-2" data-toggle="modal" data-target="#loginModal"
                                    type="button">Login</button>
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                    data-target="#registerModal">Register</button>
                            </form>
                        </ul>

                    </div>

                </nav>
            
        </div>

        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Inicia Sesion</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Introduce Email" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"
                                    placeholder="Contraseña" required>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Recordarme</label>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="submit" class="btn btn-primary">Iniciar Sesion</button>
                            </div>
                          </form>
                      </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Registrarse</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputName">Nombre</label>
                                <input type="text" class="form-control" id="exampleInputName"
                                    aria-describedby="nameHelp" placeholder="Introduce nombre" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Introduce Email" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail2">Repetir email</label>
                                <input type="email" class="form-control" id="exampleInputEmail2"
                                    aria-describedby="emailHelp" placeholder="Repetir Email" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"
                                    placeholder="Contraseña" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword2">Repetir contraseña</label>
                                <input type="password" class="form-control" id="exampleInputPassword2"
                                    placeholder="Repetir Contraseña" required>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="submit" class="btn btn-primary">Registrarse</button>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'olymcabecera',
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
.olymcabecera {
}

.logo {
    height: 40px;
}

</style>
