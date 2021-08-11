<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <h1 class="is-size-1 title">Logowanie</h1>
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
              <div class="field">
                <label for="" class="label">Hasło</label>
                <div class="control has-icons-left">
                  <input type="password" v-model="password" placeholder="*******" class="input" required />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <!-- <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox" />
                  Zapamiętaj mnie
                </label>
              </div> -->

              <div class="field mt-6">
                <button type="submit" class="button is-warning is-fullwidth">
                  Zaloguj
                </button>
              </div>
            </form>
            <p class="has-text-grey">
              <a href="/register">Zarejestruj się</a> &nbsp;·&nbsp;
              <a href="/remindPassword">Nie pamiętam hasła</a> &nbsp;·&nbsp;
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
      let user = this.email; // works anything if password is: aaa 
      let password = this.password; 
      this.$store
        .dispatch('login', { user, password })
        .then(() => this.$router.push('/secure'))
        .catch((err) => console.log(err));
    },
  },
};
</script>
