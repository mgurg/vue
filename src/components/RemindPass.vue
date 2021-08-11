<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <h1 class="is-size-1 title">Przypomnij hasło</h1>
            <form action="" class="box" v-on:submit.prevent="login">
              <div class="field">
                <label for="" class="label">Email</label>
                <div class="control has-icons-left">
                  <input
                    type="email"
                    v-model="email"
                    placeholder="na przykład: twoj@gmail.com"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field mt-6">
                <button type="submit" class="button is-warning is-fullwidth">
                  Przypomnij hasło
                </button>
              </div>
            </form>
            <p class="has-text-grey">
              <a href="/register">Zarejestruj się</a> &nbsp;·&nbsp;
              <a href="">Potrzebuję pomocy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      let user = this.email;
      let password = this.password;
      this.$store
        .dispatch('login', { user, password })
        .then(() => this.$router.push('/'))
        .catch((err) => console.log(err));
    },
  },
};
</script>
