<template>
  <section class="section">
    <div class="container">
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
            Masz pomysł na jakieś naprawdę oryginalne i wyróżniające się imię dla dziecka? Sprawdź, czy inni też tak nie pomyśleli w
            poprzednich latach 🧐
          </p>

          <div class="is-size-4 mb-4">Płeć</div>

          <div class="buttons is-centered">
            <button class="button is-light" :disabled="gender == 'k'" v-on:click="switchGender()">
              <span>Kobiece</span>
              <span class="icon is-small">
                <i class="fas fa-female"></i>
              </span>
            </button>
            <button class="button is-light" :disabled="gender == 'm'" v-on:click="switchGender()">
              <span>Męskie</span>
              <span class="icon is-small">
                <i class="fas fa-male"></i>
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
                  autocorrect="off"
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
                <th class="is-hidden-mobile">Trend</th>
                <th></th>
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
                  <button
                    class="button is-light"
                    v-on:click="showDetails(user.id)"
                    title="Zobacz wykres popularności w latach 2000-2019"
                  >
                    <span class="icon">
                      <i class="fas fa-chart-line"></i>
                    </span>
                  </button>
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
                  :disabled="page == 0"
                >
                  <span class="icon"><i class="fas fa-angle-left"></i></span> Poprzednie</a
                >
                <a
                  class="pagination-next"
                  title="Zobacz następne imiona"
                  v-on:click="getNext()"
                  :disabled="total <= rows * page + 10"
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
                    <a class="pagination-link" style="border: 0" aria-label="Current page">{{ page + 1 }}</a>
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

export default {
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
        'Imion zarejstrowanych w rejstrze PESEL jest ponad 3 tysiące. Z pomocą tej strony znajdziesz najładniejsze imię dla dziecka i sprawdzisz jego popularność.',
    },
  ],
  data() {
    return {
      users: [],
      favourites: [],
      gender: 'k',
      name: '',
      page: 0,
      rows: 10,
      total: null,
    };
  },
  created() {
    let page_data = localStorage.getItem('page_data');
    if (page_data != null) {
      this.page = JSON.parse(page_data);
    }
    let gender_data = localStorage.getItem('gender_data');
    if (gender_data != null) {
      this.gender = JSON.parse(gender_data);
    }
    let fav_data = localStorage.getItem('fav_data');
    if (fav_data != null) {
      this.favourites = JSON.parse(fav_data);
    }
    this.fetchNames();
  },
  methods: {
    listenKeyboard(event){
      this.name = event.target.value;
      // console.log(event.target.value);
      this.fetchNames(event.target.value);
    },
    fetchNames(name) {
      let url = process.env.VUE_APP_URL;
      let gender = this.$data.gender;
      let page = this.$data.page;

      let req;
    
      if (name !== undefined && name !== null && name !== '') {
        req = `${url}/idd/get_names?page=0&rows=10&gender=${gender}&name=${name}`;
      }else{
        req = `${url}/idd/get_names?page=${page}&rows=10&gender=${gender}`;
      }

      axios.get(req).then((res) => {
        this.users = res.data.names;
        this.page = res.data.page;
        this.total = res.data.totalCount;
      });
    },
    clearInput() {
      this.name = null;
      // this.fetchNames();
    },
    getNext() {
      if (this.$data.total > this.$data.rows * this.$data.page + 10) {
        this.$data.page += 1;
        localStorage.setItem('page_data', JSON.stringify(this.$data.page));
      }
      this.fetchNames();
    },
    getPrev() {
      if (this.$data.page >= 1) {
        this.$data.page -= 1;
        localStorage.setItem('page_data', JSON.stringify(this.$data.page));
        this.fetchNames();
      }
    },
    switchGender() {
      if (this.$data.gender == 'k') {
        this.$data.gender = 'm';
      } else {
        this.$data.gender = 'k';
      }
      localStorage.setItem('gender_data', JSON.stringify(this.$data.gender));
      this.clearInput()
      this.fetchNames();
    },
    showDetails(nameId) {
      this.$router.push({ name: 'details', params: { id: nameId } });
    },
    resetPages() {
      this.$data.page = 0;
      localStorage.setItem('page_data', JSON.stringify(this.$data.page));
      this.fetchNames();
    },
    addFavourite(idFav) {
      if (this.favourites) {
        if (this.favourites.includes(idFav)) {
          for (var i = 0; i < this.favourites.length; i++) {
            if (this.favourites[i] === idFav) {
              this.favourites.splice(i, 1);
            }
          }
        } else {
          this.favourites.push(idFav);
        }
        localStorage.setItem('fav_data', JSON.stringify(this.$data.favourites));
      }
    },
  },
};
</script>

<style>
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

.right {
  text-align: right;
  /* background:#333; */
}
</style>
