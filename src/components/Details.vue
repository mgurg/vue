<template>
  <section class="section">
    <div class="container">
      <h1 class="is-size-1 title">{{details.name}}</h1>
      <!-- <button class="button" v-on:click="fetchDetails(1578)"></button> -->

      <area-chart :data="details.popularity"></area-chart>

      <a href="javascript:history.go(-1)">        
        <button class="button is-light mt-4">
          <span>Wróć do listy imion</span>
        </button></a>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      details: { name: "" },
      nameId: null,
      popularity: { yr_2017: 2, yr_2018: 5, yr_2019: 3 },
    };
  },
  created() {
    this.nameId = this.$route.params["id"];
    this.fetchDetails(this.nameId);
  },
  beforeMount() {
    this.nameId = this.$route.params["id"];
  },
  methods: {
    fetchDetails: function (nameId) {
      let url = process.env.VUE_APP_URL;
      // let id = nameId;
      if (this.nameId == null) {
        this.nameId = nameId;
      }

      let tmp = null;
      let req = `${url}/idd/get_name_details?id=${this.nameId}`;
      axios.get(req).then((res) => {
        tmp = JSON.stringify(res.data);
        tmp = tmp.replaceAll("yr_", "");
        this.details = JSON.parse(tmp);
      });
      console.log(JSON.stringify(this.details.popularity));
    },
  },
};
</script>
