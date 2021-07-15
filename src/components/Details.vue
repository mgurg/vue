<template>
  <section class="section">
    <div class="container">
      <h1 class="is-size-1 title">{{ details.name }}</h1>
      <area-chart :data="details.popularity" class="mb-6"></area-chart>
      <div class="is-size-4 mb-4">Podobne imiona</div>
      <!-- <p>{{ similar }}</p> -->

      <li v-for="(user, id) in similar" :key="id">
        {{ user }}
      </li>

      <a href="javascript:history.go(-1)">
        <button class="button is-light mt-4">
          <span>Wróć do listy imion</span>
        </button></a
      >
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Details',
  metaInfo: {
    title: 'Szczegóły imienia i jego popularność ❤️',
    // override the parent template and just use the above title only
    titleTemplate: null,
  },
  data() {
    return {
      details: { name: null },
      nameId: null,
      popularity: { yr_2017: 2, yr_2018: 5, yr_2019: 3 },
      similar: null,
    };
  },
  created() {
    this.nameId = this.$route.params['id'];
    if (this.$route.params['id'] != null) {
      localStorage.setItem('nameId', JSON.stringify(this.$route.params['id']));
    }
    let id = localStorage.getItem('nameId');
    if (id != null) {
      this.nameId = JSON.parse(id);
    }

    this.fetchDetails(this.nameId);
  },

  methods: {
    fetchDetails: function() {
      let url = process.env.VUE_APP_URL;

      let tmp = null;
      let req = `${url}/idd/get_name_details?id=${this.nameId}`;
      axios.get(req).then((res) => {
        tmp = JSON.stringify(res.data);
        tmp = tmp.replaceAll('yr_', '');
        this.details = JSON.parse(tmp);

        this.fetchSimilar(this.details.gender, this.details.name);
      });
      // console.log(JSON.stringify(this.details.popularity));
    },

    fetchSimilar: function() {
      let url = process.env.VUE_APP_URL;
      let g = this.details.gender;
      let n = this.details.name;
      let req = `${url}/idd/get_similar_names?gender=${g}&name=${n}`;
      // console.log(g);

      axios.get(req).then((res) => {
        this.similar = res.data.names;
        console.log(JSON.stringify(res.data.names));
      });
    },
  },
};
</script>

<style>
li:first-letter {
  text-transform: capitalize !important;
}
</style>
