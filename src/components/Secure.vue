<template>
  <section class="section">
    <nav-header></nav-header>
    <div class="container mt-6">
      <h1 class="is-size-3">This page is protected by auth</h1>
      <button v-on:click="say('hi')" class="button is-danger">Pobierz</button>
      <p>{{ info }}</p>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
axios.defaults.headers.common = { Authorization: 'Bearer ' + localStorage.getItem('token') };
// axios.defaults.headers.common = { Authorization: 'Bearer ' + this.$store.geters.getToken };
import NavHeader from '../components/Nav.vue';

export default {
  components:{
    NavHeader
  },
  name: 'Secure',
  data() {
    return {
      info: [],
    };
  },
  methods: {
    say() {
      console.log('asd');

      axios.get('https://imion.eu/idd/test').then((response) => (this.info = response.data));

      return 'adam';
    },
  },
};
</script>
