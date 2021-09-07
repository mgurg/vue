<template>
  <section class="section">
    <nav-header></nav-header>
    <div class="mt-6 container">
      <h1 class="is-size-1 title">Lista imion</h1>
      <h2 class="is-size-2 subtitle">dla dzieci</h2>
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <p class="has-text-justified">
            Sprawdź jak zmieniała się popularność imion w Polsce na przestrzeni ostatnich 20 lat
            (<strong>2000-2020</strong>). Możesz wykorzystać poniższa listę do szukania inspiracji, lub do upewnienia
            się, że Twoje dziecko nie będzie szóstą Julią w klasie 😉
          </p>
          <p>&nbsp;</p>
          <p class="has-text-justified">
            Masz pomysł na jakieś naprawdę oryginalne i wyróżniające się imię dla dziecka? Sprawdź, czy inni też tak nie
            pomyśleli w
            poprzednich latach 🧐
          </p>

          <div class="is-size-4 mb-4">Płeć</div>

          <div class="buttons is-centered">
            <button class="button is-dark" :disabled="this.$store.getters.getGender === 'f'"
                    v-on:click="switchGender('f')">
              <span>Kobiece</span>
              <span class="icon is-small">
                <i class="fas fa-female"></i>
              </span>
            </button>
            <button class="button is-dark" :disabled="this.$store.getters.getGender === 'm'"
                    v-on:click="switchGender('m')">
              <span>Męskie</span>
              <span class="icon is-small">
                <i class="fas fa-male"></i>
              </span>
            </button>
            <button class="button is-dark" :disabled="this.$store.getters.getGender === 'n'"
                    v-on:click="switchGender('n')">
              <span>Neutralne</span>
              <span class="icon is-small">
                <i class="fas fa-rainbow"></i>
              </span>
            </button>
            <!-- <button class="button is-light">
              <span>Neutralne</span><span class="icon is-small"><i class="fas fa-restroom"></i></span>
            </button> -->
          </div>

          <!-- <div class="is-size-4 mb-4">Filtry</div>
          <div class="buttons is-centered">
            <button class="button is-danger is-light">
              <span>Superhity</span>
              <span class="icon is-small">
                <i class="fas fa-fire-alt"></i>
              </span>
            </button>
            <button class="button is-warning is-light">
              <span>Hity</span>
              <span class="icon is-small">
                <i class="fas fa-angle-double-up"></i>
              </span>
            </button>
            <button class="button is-primary is-light">
              <span>Ponadczasowe</span>
              <span class="icon is-small">
                <i class="fas fa-bullseye"></i>
              </span>
            </button>
            <button class="button is-success is-light">
              <span>Tracące popularność</span>
              <span class="icon is-small">
                <i class="fas fa-angle-double-down"></i>
              </span>
            </button>
            <button class="button is-info is-light">
              <span>Wyjątkowe</span>
              <span class="icon is-small">
                <i class="fas fa-snowflake"></i>
              </span>
            </button>
            <button class="button is-link is-light">
              <span>Bardzo rzadkie</span>
              <span class="icon is-small">
                <i class="far fa-gem"></i>
              </span>
            </button>
          </div> -->

          <div class="column is-half is-offset-one-quarter is-centered">
            <div class="field has-addons">
              <div class="control has-icons-left has-icons-right is-expanded">
                <input
                    type="text"
                    pattern="[a-zA-Z]+"
                    v-bind:value="name"
                    v-on:input="listenKeyboard($event)"
                    class="input is-info"
                    placeholder="Wpisz imię"
                    autocomplete="off"
                />
                <span class="icon is-medium is-left">
                  <i class="fas fa-pen"></i>
                </span>
              </div>
              <p class="control">
                <a v-on:click="clearInput()" class="button is-info"><i class="fas fa-backspace"></i></a>
              </p>
            </div>
          </div>
          <div class="m-t-4">&nbsp;</div>
          <table class="table is-hoverable is-narrow center">
            <thead>
            <tr>
              <th><abbr title="Numer">Nr</abbr></th>
              <th>Imię</th>
              <th>Liczba</th>
              <th></th>
              <th class="is-hidden-mobile">Trend</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in users" v-bind:key="user.id">
              <th>{{ page * 10 + index + 1 }}</th>
              <td>{{ user.name }}</td>
              <td class="right">{{ user.total }}</td>
              <td>
                <button
                    class="button is-danger is-light"
                    v-on:click="addFavourite(user.id)"
                    title="Dodaj do ulubionych"
                >
                    <span class="icon">
                      <i v-bind:class="favourites.includes(user.id) ? 'fas fa-heart' : 'far fa-heart'"></i>
                    </span>
                </button>
              </td>
              <td>
                <router-link :to="'/details/'+user.id">
                  <button class="button is-light" title="Zobacz wykres popularności w latach 2000-2019">
                    <span class="icon">
                      <i class="fas fa-chart-line"></i>
                    </span>
                  </button>
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="columns is-vcentered">
            <div class="column is-3">
              <!-- &nbsp; -->
            </div>
            <div class="column is-6">
              <nav class="pagination is-centered" role="navigation" aria-label="pagination">
                <a
                    class="pagination-previous"
                    title="Wróć na poprzednią stronę"
                    v-on:click="getPrev()"
                    :disabled="this.$store.getters.getPage == 0"
                >
                  <span class="icon"><i class="fas fa-angle-left"></i></span> Poprzednie</a
                >
                <a
                    class="pagination-next"
                    title="Zobacz następne imiona"
                    v-on:click="getNext()"
                    :disabled="this.$store.getters.getTotal <= this.$store.getters.getRows * this.$store.getters.getPage + 10"
                >Następne <span class="icon"><i class="fas fa-angle-right"></i></span
                ></a>
                <ul class="pagination-list">
                  <!-- <li>
                    <a
                      class="pagination-link is-current"
                      aria-label="Go home"
                      title="Wróć na początek"
                      aria-current="page"
                      v-on:click="resetPages()"
                      ><i class="fas fa-home"></i
                    ></a>
                  </li> -->
                  <li>
                    <a class="pagination-link" style="border: 0"
                       aria-label="Current page">{{ this.$store.getters.getPage + 1 }}</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="column is-3">
              <!-- &nbsp; -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import NavHeader from '../components/Nav.vue';

export default {
  components: {
    NavHeader
  },
  props: ['id'],
  name: 'Names',
  metaInfo: {
    title: 'Lista najpopularniejszych imion dla dzieci w Polsce ❤️',
    // override the parent template and just use the above title only
    titleTemplate: null,
    link: [
      {rel: 'canonical', href: 'https://imion.eu/names'}
    ]
  },
  meta: [
    {
      vmid: 'desc',
      name: 'description',
      content:
          'Imion zarejestrowanych w rejestrze PESEL jest ponad 3 tysiące. Z pomocą tej strony znajdziesz najładniejsze imię dla dziecka i sprawdzisz jego popularność.',
    },
  ],
  data() {
    return {
      users: [],
      favourites: [],
      // gender: 'f',
      name: '',
      // page: 0,
      // rows: 10,
      // total: null,
    };
  },
  created() {
    this.page = this.$store.getters.getPage;
    // this.gender = this.$store.getters.getGender;
    this.favourites = this.$store.state.favourites;
    this.fetchNames();
  },

  methods: {
    listenKeyboard(event) {
      this.name = event.target.value;
      this.fetchNames(event.target.value);
    },
    fetchNames(name = null, cpage = null) {
      let url = process.env.VUE_APP_URL;
      let gender = this.$store.getters.getGender;

      if (cpage !== null) {
        this.$store.dispatch('set_page', cpage);
      }

      let page = this.$store.getters.getPage;
      let rows = this.$store.getters.getRows;

      let req;

      if (name !== undefined && name !== null && name !== '') {
        req = `${url}/idd/get_names?page=0&rows=${rows}&gender=${gender}&name=${name}`;
      } else {
        req = `${url}/idd/get_names?page=${page}&rows=${rows}&gender=${gender}`;
      }

      axios.get(req).then((res) => {
        this.users = res.data.names;
        this.$store.dispatch('set_page', res.data.page);
        this.$store.dispatch('set_total', res.data.totalCount);
      });
    },
    clearInput() {
      this.name = null;
      this.fetchNames();
    },
    getNext() {
      if (this.$store.getters.getTotal > this.$store.getters.getRows * this.$store.getters.getPage + 10) {
        this.$store.dispatch('increase_page');
        this.fetchNames();
      }

    },
    getPrev() {
      if (this.$store.getters.getPage >= 1) {
        this.$store.dispatch('decrease_page');
        this.fetchNames();
      }
    },
    switchGender(gender) {
      this.$store.dispatch('set_gender', gender);
      this.clearInput()
      this.fetchNames('', 0);
    },
    resetPages() {
      this.$store.dispatch('set_page', 0);
      this.fetchNames();
    },
    addFavourite(idFav) {

      var favourites = this.$store.getters.getFavourites;

      if (favourites) {
        if (favourites.includes(idFav)) {
          for (var i = 0; i < favourites.length; i++) {
            if (favourites[i] === idFav) {
              favourites.splice(i, 1);
            }
          }
        } else {
          favourites.push(idFav);
        }
        this.$store.dispatch('set_favourites', favourites);
        this.favourites = this.$store.state.favourites;
      }
    },
  },
};
</script>

<style scoped>
table.center {
  margin-left: auto;
  margin-right: auto;
}

.right {
  text-align: right;
  /* background:#333; */
}
</style>
