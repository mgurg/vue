<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <h1 class="is-size-1 title">Ulubione</h1>
          <p class="has-text-justified">
            Twoja lista ulubinych imion. Możesz kliknąć na każde z nich żeby dowiedzieć się więcej. Jeżeli w przyszłości
            odwiedzisz tę stronę z tego samego urządzenia, to zobaczysz ponownie Twoje ulubione imiona. 
          </p>
          <div class="m-t-4">&nbsp;</div>
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
              <tbody>
                <tr v-for="(user, index) in favDetails" v-bind:key="user.id">
                  <th>{{ index + 1 }}</th>
                  <td><a href="http://wp.pl">{{ user.name }}</a></td>
                  <td>
                    <span class="icon">
                      <i :class="user.gender == 'K' ? 'fas fa-female' : 'fas fa-male'"></i>
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
                      smooth
                    >
                    </trend>
                  </td>
                  <td>
                    <button class="button is-light" v-on:click="deleteFav(user.id)" title="Usuń z ulubionych">
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
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
  name: 'Favourites',
  metaInfo: {
    title: 'Najładniejsze imiona wybrane przez Ciebie ❤️',
    // override the parent template and just use the above title only
    titleTemplate: null,
  },
  data() {
    return {
      fav: [],
      favDetails: [],
    };
  },
  created() {
    let fav_data = localStorage.getItem('fav_data');
    if (fav_data != null) {
      this.fav = JSON.parse(fav_data);
    }
    this.fetchFav();
  },
  methods: {
    fetchFav: function() {
      let url = process.env.VUE_APP_URL;

      if (this.fav.length == 0) {
        return;
      }

      let p = qs.stringify({ ids: this.$data.fav }, { arrayFormat: 'repeat' });
      let req = `${url}/idd/get_fav_names?${p}`;

      axios.get(req, { crossDomain: true }).then((res) => {
        this.favDetails = res.data;
      });
    },
    deleteFav: function(id) {
      if (this.fav) {
        if (this.fav.includes(id)) {
          for (var i = 0; i < this.fav.length; i++) {
            if (this.fav[i] === id) {
              this.fav.splice(i, 1);
            }
          }
        }
      }
      localStorage.setItem('fav_data', JSON.stringify(this.$data.fav));
      this.fetchFav();
    },
  },
};
</script>
