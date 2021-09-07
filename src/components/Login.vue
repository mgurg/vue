<template>
  <section>
    <nav-header></nav-header>
    <div class="hero is-light is-fullheight">
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
                      v-model.trim="email"
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
                    <input type="password" v-model.trim="password" placeholder="*******" class="input" required />
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <p v-if="!formIsValid">Podaj prawidłowy email i hasło</p>
                <!-- <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox" />
                  Zapamiętaj mnie
                </label>
              </div> -->

                <div class="field mt-6">
                  <button
                    :style="{ display: !isLoading ? 'block' : 'none' }"
                    type="submit"
                    class="button is-warning is-fullwidth"
                  >
                    Zaloguj
                  </button>

                  <button
                    :style="{ display: isLoading ? 'block' : 'none' }"
                    class="button is-warning is-fullwidth is-loading"
                  ></button>
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
    </div>
  </section>
</template>

<script>
import NavHeader from '../components/Nav.vue';

export default {
  components: {
    NavHeader,
  },
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async login() {
      let user = this.email; // works anything if password is: aaa
      let password = this.password;
      this.formIsValid = true;

      // if (user === '' || !user.includes('.') || password.length >= 2) {
      //   this.formIsValid = false;
      //   return;
      // }

      this.isLoading = true;

      try {
        await this.$store.dispatch('mgu_login', {
          user: user,
          password: password,
        });

        const redirectUrl = '/' + (this.$route.query.redirect || 'secure')
        this.$router.replace(redirectUrl);
      } catch (err) {
        this.error = err.message || 'Failed to register';
      }

      this.isLoading = false;

      // this.$store
      //   .dispatch('login', { user, password })
      //   .then(() => this.$router.push('/secure'))
      //   .catch((err) => console.log(err));
    },
  },
};
</script>
