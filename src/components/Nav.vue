<template>
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
        <router-link to="/login?redirect=names" class="navbar-item is-expanded is-block has-text-centered">
          <i class="far fa-user"></i>
          <p class="is-size-6">Zaloguj</p>
        </router-link>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end"></div>
    </div>
  </nav>
</template>

<script>
export default {
  // props: ['isLoggedIn'],
  // props: ['isAuthenticated'],
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('mgu_logout');
      this.$router.replace('/');
    }
  }
};
</script>
