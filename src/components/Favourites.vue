<template>
  <section class="section">
    <div class="container">
      <h1 class="is-size-1 title">Ulubione</h1>
      <p>Twoja lista ulubinych imion</p>
      <div v-bind:class="fav.length > 0 ? '' : 'is-hidden'">
        <table class="table is-hoverable is-narrow center">
          <thead>
            <tr>
              <th><abbr title="Numer">Nr</abbr></th>
              <th>Imię</th>
              <th>Płeć</th>
              <th>Trend</th>
              <th></th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th><abbr title="Numer">Nr</abbr></th>
              <th>Imię</th>
              <th>Płeć</th>
              <th>Trend</th>
              <th></th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="(user, index) in favDetails" v-bind:key="user.id">
              <th>{{ index + 1 }}</th>
              <td>{{ user.name }}</td>
              <td>
                <span class="icon">
                <i :class="user.gender=='K' ? 'fas fa-female' : 'fas fa-male'"></i>
                </span>
                </td>
              <td>                
                <trend
                  width="100"
                  height="25"
                  :data="user.trend"
                  :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                  :stroke-width="3"
                  auto-draw
                  smooth>
                </trend>
              </td>
              <td>
                <button
                  class="button is-light"
                  v-on:click="deleteFav(user.id)"
                  title="Usuń z ulubionych"
                >
                  <span class="icon">
                    <i class="fas fa-times"></i>
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import qs from "qs";

export default {
  data() {
    return {
      fav: [],
      favDetails: [],
    };
  },
  created() {
    let fav_data = localStorage.getItem("fav_data");
    if (fav_data != null) {
      this.fav = JSON.parse(fav_data);
    }
    this.fetchFav();
  },
  methods: {
    fetchFav: function () {
      let url = process.env.VUE_APP_URL;

      if (this.fav.length == 0) {
        return;
      }

      let p = qs.stringify({ ids: this.$data.fav }, { arrayFormat: "repeat" });
      let req = `${url}/idd/get_fav_names?${p}`;

      axios.get(req, { crossDomain: true }).then((res) => {
        this.favDetails = res.data;
      });
    },
    deleteFav: function (id) {
      if (this.fav) {
        if (this.fav.includes(id)) {
          for (var i = 0; i < this.fav.length; i++) {
            if (this.fav[i] === id) {
              this.fav.splice(i, 1);
            }
          }
        }
      }
      localStorage.setItem("fav_data", JSON.stringify(this.$data.fav));
      this.fetchFav();
    },
  },
};
</script>