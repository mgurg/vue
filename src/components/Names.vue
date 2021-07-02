<template>
  <section class="section">
    <div class="container">
      <h1 class="is-size-1 title">Lista imion</h1>
      <!-- <button class="button" v-on:click="details">
        </button>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolores
        nam accusamus nulla dignissimos veniam vitae sunt minus natus illum?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolores
        nam accusamus nulla dignissimos veniam vitae sunt minus natus illum?
      </p> -->

      <div class="buttons is-centered">
        <button
          class="button is-light"
          :disabled="gender == 'k'"
          v-on:click="switchGender()"
        >
          <span>Kobiece</span>
          <span class="icon is-small">
            <i class="fas fa-female"></i>
          </span>
        </button>
        <button
          class="button is-light"
          :disabled="gender == 'm'"
          v-on:click="switchGender()"
        >
          <span>Męskie</span>
          <span class="icon is-small">
            <i class="fas fa-male"></i>
          </span>
        </button>
      </div>
      <p>&nbsp;</p>
      <!-- <div class="buttons is-centered">
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
      <table class="table is-hoverable is-narrow center">
        <thead>
          <tr>
            <th><abbr title="Numer">Nr</abbr></th>
            <th>Imię</th>
            <th>Liczba</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="Numer">Nr</abbr></th>
            <th>Imię</th>
            <th>Liczba</th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
        <tbody>
          <tr v-for="(user, index) in users" v-bind:key="user.id">
            <th>{{ page * 10 + index + 1 }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.total }}</td>
            <td>
              <button
                class="button is-danger is-light"
                v-on:click="addFavourite(user.id)"
                title="Dodaj do ulubionych"
              >
                <span class="icon">
                  <!-- <i class="far fa-heart"></i> -->
                  <i
                    v-bind:class="
                      favourites.includes(user.id)
                        ? 'fas fa-heart'
                        : 'far fa-heart'
                    "
                  ></i>
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
                  <i class="fas fa-chart-area"></i>
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="columns is-centered">
        <div style="max-width:320px;">
          <nav class="pagination" role="navigation" aria-label="pagination">
            <a
              class="pagination-previous"
              title="Wróć na poprzednią stronę"
              v-on:click="getPrev()"
              :disabled="page == 0"
              >Poprzednie</a
            >
            <a
              class="pagination-next"
              title="Zobacz następne imiona"
              v-on:click="getNext()"
              :disabled="total <= rows * page + 10"
              >Następne</a
            >
            <ul class="pagination-list">
              <li>
                <a
                  class="pagination-link is-current"
                  aria-label="Go home"
                  title="Wróć na początek"
                  aria-current="page"
                  v-on:click="resetPages()"
                  ><i class="fas fa-home"></i
                ></a>
              </li>
              <li>
                <a
                  class="pagination-link"
                  style="border: 0"
                  aria-label="Current page"
                  >{{ page + 1 }}</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      favourites: [],
      gender: "k",
      page: 0,
      rows: 10,
      total: null,
    };
  },
  created() {
    let page_data = localStorage.getItem("page_data");
    if (page_data != null) {
      this.page = JSON.parse(page_data);
    }
    let gender_data = localStorage.getItem("gender_data");
    if (gender_data != null) {
      this.gender = JSON.parse(gender_data);
    }
    let fav_data = localStorage.getItem("fav_data");
    if (fav_data != null) {
      this.favourites = JSON.parse(fav_data);
    }
    this.fetchNames();
  },
  methods: {
    fetchNames: function () {
      let url = process.env.VUE_APP_URL;
      let gender = this.$data.gender;
      let page = this.$data.page;

      let req = `${url}/idd/get_names?page=${page}&rows=10&gender=${gender}`;

      axios.get(req, { crossDomain: true }).then((res) => {
        this.users = res.data.names;
        this.page = res.data.page;
        this.total = res.data.totalCount;
      });
    },
    getNext: function () {
      if (this.$data.total > this.$data.rows * this.$data.page + 10) {
        this.$data.page += 1;
        localStorage.setItem("page_data", JSON.stringify(this.$data.page));
      }
      this.fetchNames();
    },
    getPrev: function () {
      if (this.$data.page >= 1) {
        this.$data.page -= 1;
        localStorage.setItem("page_data", JSON.stringify(this.$data.page));
        this.fetchNames();
      }
    },
    switchGender: function () {
      if (this.$data.gender == "k") {
        this.$data.gender = "m";
      } else {
        this.$data.gender = "k";
      }
      localStorage.setItem("gender_data", JSON.stringify(this.$data.gender));
      this.fetchNames();
    },
    showDetails: function (nameId) {
      this.$router.push({ name: "details", params: { id: nameId } });
    },
    resetPages() {
      this.$data.page = 0;
      localStorage.setItem("page_data", JSON.stringify(this.$data.page));
      this.fetchNames();
    },
    addFavourite: function (idFav) {
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
        localStorage.setItem("fav_data", JSON.stringify(this.$data.favourites));
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
  text-transform: capitalize !important;
}

table.center {
  margin-left: auto;
  margin-right: auto;
}
</style>