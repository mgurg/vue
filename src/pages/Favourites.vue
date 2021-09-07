<template>
  <section class="section">
    <nav-header></nav-header>
    <div class="mt-6 container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <h1 class="is-size-1 title">Ulubione</h1>
          <p class="has-text-justified">
            Twoja lista ulubionych imion. Możesz kliknąć na każde z nich żeby dowiedzieć się więcej. Jeżeli w
            przyszłości
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
                <td>{{ user.name }}</td>
                <td>
                    <span class="icon">
                      <i :class="user.gender == 'f' ? 'fas fa-female' : 'fas fa-male'"></i>
                    </span>
                </td>
                <td>
                  <trend
                      :width="100"
                      :height="25"
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
import ApiService from '@/services/ApiService.js';
import NavHeader from '../components/Nav.vue';
import Trend from 'vuetrend';

export default {
  components: {
    NavHeader,
    Trend
  },
  name: 'Favourites',
  metaInfo: {
    title: 'Polskie imiona dla dzieci wybrane przez Ciebie ❤️',
    // override the parent template and just use the above title only
    titleTemplate: null,
    link: [{rel: 'canonical', href: 'https://imion.eu/favourites'}],
  },
  meta: [{property: 'og:url', content: 'https://imion.eu/favourites'}],
  data() {
    return {
      fav: [],
      favDetails: [],
    };
  },
  created() {
    this.fav = this.$store.state.favourites;
    this.fetchFav();
  },
  methods: {
    fetchFav() {
      if (this.fav.length == 0) {
        return;
      }

      ApiService.fetchFav(this.$data.fav)
          .then((response) => {
            this.favDetails = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },
    deleteFav(id) {
      if (this.fav) {
        if (this.fav.includes(id)) {
          for (var i = 0; i < this.fav.length; i++) {
            if (this.fav[i] === id) {
              this.fav.splice(i, 1);
            }
          }
        }
      }
      this.$store.dispatch('set_favourites', this.fav);
      this.fetchFav();
    },
  },
};
</script>

<style scoped>
td {
  text-transform: lowercase;
  vertical-align: middle !important;
}

td:first-letter {
  text-transform: capitalize !important; /* TODO: Capitalize on backend */
}

table.center {
  margin-left: auto;
  margin-right: auto;
}

</style>
