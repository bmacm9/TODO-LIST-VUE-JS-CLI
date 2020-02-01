<template lang="html">

  <section class="noticias">
    <div class="row ml-5 mr-5 justify-content-around">
      <div class="card col-11 col-sm-8 col-md-5 col-lg-4 col-xl-3 m-2" style="width: 18rem;" v-for="(noticia, index) in news" :key="index">
        <img class="card-img-top img" :src="noticia.urlToImage" />
        <div class="card-body">
          <h5 class="card-title">{{noticia.title}}</h5>
          <p class="card-text">{{noticia.description}}</p>
        </div>
        <div class="card-footer">
          <a :href="noticia.url" class="btn btn-primary">Ir a la noticia</a>
        </div>
      </div>
    </div>

  </section>

</template>

<script lang="js">

  import axios from 'axios';

  export default {
    name: 'noticias',
    props: [],
    mounted() {
      this.scroll(this.news);
    },
    data() {
      return {
        news: [],
        nuevas: "",
      }
    },
    methods: {
      scroll(news) {
        var pagina = 2;
        var sePuede = true
        window.onscroll = () => {
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
          if (bottomOfWindow) {
            if (sePuede) {
              sePuede = false;
              for (let i = 1; i < 19; i++) {
                axios.get('https://newsapi.org/v2/everything?domains=marca.com,elpais.com,elmundo.es,lavanguardia.com,libertaddigital.com&page=' + pagina + '&apiKey=673af6b8f3d24cd390f3f605b0a082f4')
                  .then(response => {
                    news.push(response.data.articles[i]);
                  });
              }
              pagina++;
            }
            sePuede=true;
          }
        };
      },
      getInitialUsers() {
        for (let i = 0; i < 18; i++) {
          axios.get('https://newsapi.org/v2/everything?domains=marca.com,elpais.com,elmundo.es,lavanguardia.com,libertaddigital.com&page=1&apiKey=673af6b8f3d24cd390f3f605b0a082f4')
            .then(response => {
              this.news.push(response.data.articles[i]);
            });
        }
      },
    },
    beforeMount() {
      this.getInitialUsers();
    },
    computed: {

    }
  }


</script>

<style scoped>
  .noticias {
    margin-top: 70px;
    background-color: aliceblue;
  }

  .img {
    height: 250px;
  }
</style>