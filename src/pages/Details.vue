<template>
  <section class="section">
    <nav-header></nav-header>
    <div class="mt-6 container">
      <h1 class="is-size-1 title">{{ details.name }}</h1>
      <p>
        Popularność imienia <b>{{ details.name }}</b> w Polsce w latach 2000-2020.
      </p>

      <area-chart :curve="true" :data="details.popularity" class="mb-6" xtitle="Rok"></area-chart>
      <div class="is-size-4 mb-4">Imiona podobne do {{ details.name }}</div>
      <p>
        Lista imion o podobnej pisowni do imienia {{ details.name }}. Wkrótce będę chciał umieścić tutaj również
        znaczenie dla tego imienia oraz jego zapis w różnych językach. <b>Kliknij</b> w wybrany przycisk żeby zobaczyć
        szczegóły interesującego Cię imienia
      </p>
      <div class="column is-three-fifths is-offset-one-fifth">
        <div class="buttons is-centered">
          <button v-for="(user, id) in similar" :key="id" class="button" v-on:click="fetchDetailsbyName(user)">
            <span>{{ user }}</span>
          </button>
        </div>
      </div>

      <a href="javascript:history.go(-1)">
        <button class="button is-light mt-4">
          <span>Wróć do listy imion</span>
        </button>
      </a
      >

      <!-- <button class="button is-light mt-4" @click="this.$router.back()">
          <span>Wróć do listy imion</span></button> -->
    </div>
  </section>
</template>

<script>
import NavHeader from '../components/Nav.vue';
import ApiService from '@/services/ApiService.js';


export default {
  components: {
    NavHeader,
  },
  props: ['id', 'name'],
  name: 'Details',
  metaInfo: {
    title: 'Księga imion - popularność  imion dla dzieci w Polsce ❤️',
    // override the parent template and just use the above title only
    titleTemplate: null,
  },
  data() {
    return {
      details: {name: null},
      nameId: null,
      popularity: {yr_2017: 2, yr_2018: 5, yr_2019: 3},
      similar: null,
    };
  },
  created() {
    // console.log(this.$route.params);

    this.nameId = this.$route.params['id'];
    this.name = this.$route.params['name'];
    if (this.$route.params['id'] != null) {
      localStorage.setItem('nameId', JSON.stringify(this.$route.params['id']));
    }
    let id = localStorage.getItem('nameId');
    if (id != null) {
      this.nameId = JSON.parse(id);
    }
    if (this.$route.params['name'] != null) {
      this.fetchDetailsbyName(this.name);
    } else {
      this.fetchDetails(this.nameId);
    }
  },

  methods: {
    fetchDetails() {
      let tmp = null;

      ApiService.fetchDetails(this.nameId)
          .then((response) => {
            tmp = JSON.stringify(response.data);
            tmp = tmp.replaceAll('yr_', '');
            this.details = JSON.parse(tmp);

            this.fetchSimilar(this.details.gender, this.details.name);
          })
          .catch((error) => {
            console.log(error);
          });

    },
    fetchDetailsbyName(name) {
      let tmp = null;

      ApiService.fetchDetailsbyName(name)
          .then((response) => {
            tmp = JSON.stringify(response.data);
            tmp = tmp.replaceAll('yr_', '');
            this.details = JSON.parse(tmp);

            this.fetchSimilar(this.details.gender, this.details.name);
          })
          .catch((error) => {
            console.log(error);
          });
    },

    fetchSimilar() {
      let g = this.details.gender;
      let n = this.details.name;

      ApiService.fetchSimilar(g, n)
          .then((response) => {
            this.similar = response.data.names;
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
};
</script>

<style></style>
