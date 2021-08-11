<template>
  <div>
    <nav class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span>
          <router-link to="/" class="navbar-item is-expanded is-block has-text-centered">
            <i class="fas fa-home"></i>
            <p class="is-size-6">Start</p>
          </router-link>
        </span>
        <span>
          <router-link to="/names" class="navbar-item is-expanded is-block has-text-centered">
            <i class="far fa-address-card"></i>
            <p class="is-size-6">Imiona</p>
          </router-link>
        </span>
        <span>
          <router-link to="/favourites" class="navbar-item is-expanded is-block has-text-centered">
            <i class="far fa-heart"></i>
            <p class="is-size-6">Ulubione</p>
          </router-link>
        </span>
        <div v-if="isLoggedIn">
          <a @click="logout" class="navbar-item is-expanded is-block has-text-centered">
            <i class="fas fa-sign-out-alt"></i>
            <p class="is-size-6">Wyloguj</p>
          </a>
        </div>
        <div v-else>
          <!-- <router-link to="/register" class="navbar-item is-expanded is-block has-text-centered">
            <i class="fa fa-cog"></i>
            <p class="is-size-6">Register</p>
          </router-link> -->
          <router-link to="/login" class="navbar-item is-expanded is-block has-text-centered">
            <i class="far fa-user"></i>
            <p class="is-size-6">Zaloguj</p>
          </router-link>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end"></div>
      </div>
    </nav>
    <div class="mt-6" id="app">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.authStatus;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/').catch((err) => {
        if (err.name != 'NavigationDuplicated') {
          throw err;
        }
      });
    },
  },
  metaInfo: {
    title: 'Najładniejsze imiona dla chłopca i dziewczynki',
    titleTemplate: '%s ❤️',
    htmlAttrs: {
      lang: 'pl',
      amp: false,
    },
    meta: [
      {
        vmid: 'desc',
        name: 'description',
        content: `Imion zarejstrowanych w rejstrze PESEL jest ponad 3 tysiące.
        Z pomocą tej strony znajdziesz najładniejsze imię dla dziecka i sprawdzisz jego popularność.`,
      },
      { property: 'og:title', content: 'Najładniejsze imiona dla chłopca i dziewczynki' },
      { property: 'og:site_name', content: 'imion.eu' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://imion.eu' },
      { property: 'og:image', content: './assets/img.jpeg' },
      { name: 'robots', content: 'index,follow' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'https://imion.eu' },
      { name: 'twitter:title', content: 'Najładniejsze imiona dla chłopca i dziewczynki' },
      { name: 'twitter:description', content: 'I have things here on my site.' },
      // Your twitter handle, if you have one.
      // { name: 'twitter:creator', content: '@alligatorio' },
      { name: 'twitter:image:src', content: './assets/img.jpeg' },

      // Google / Schema.org markup:
      { itemprop: 'name', content: 'Najładniejsze imiona dla chłopca i dziewczynki' },
      { itemprop: 'description', content: 'I have things here on my site.' },
      { itemprop: 'image', content: './assets/img.jpeg' },
    ],
  },
};
</script>

<style>
#app {
  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 3em; */
  word-break: normal;
  /* max-width: 960px */
}

/* body {
  min-height: 100vh;
} */
/* html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
} */

a:hover {
  cursor: pointer;
}
</style>
