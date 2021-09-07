<template>
  <section>
    <nav-header></nav-header>
    <div class="hero is-light is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <h1 class="is-size-1 title">Rejestracja</h1>
              <form action="" class="box" v-on:submit.prevent="register">
                <div class="field">
                  <label for="" class="label">Nazwa</label>
                  <div class="control has-icons-left">
                    <input id="name" type="text" class="input" v-model.trim="name" required autofocus />
                    <span class="icon is-small is-left">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label for="" class="label">Email</label>
                  <div class="control has-icons-left">
                    <input id="email" type="text" class="input" v-model.trim="email" required />
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
                <div class="field">
                  <label for="" class="label">Powtórz hasło</label>
                  <div class="control has-icons-left">
                    <input
                      type="password"
                      v-model.trim="password_confirmation"
                      placeholder="*******"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <p v-if="!formIsValid">Podaj prawidłowe dane</p>
                <div class="field mt-6">
                  <button
                    :style="{ display: !isLoading ? 'block' : 'none' }"
                    type="submit"
                    class="button is-warning is-fullwidth"
                  >
                    Zarejstruj się
                  </button>

                  <button
                    :style="{ display: isLoading ? 'block' : 'none' }"
                    class="button is-warning is-fullwidth is-loading"
                  ></button>
                </div>
              </form>
              <p class="has-text-grey">
                <a href="/login">Mam już konto</a> &nbsp;·&nbsp;
                <a href="/remindPassword">Nie pamiętam hasła</a> &nbsp;·&nbsp; <a href="">Potrzebuję pomocy</a>
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
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      is_admin: null,
      formIsValid: true,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async register() {
      this.formIsValid = true;

      if (this.email === '' || !this.email.includes('.') || this.password.length < 2) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      try {
        await this.$store.dispatch('mgu_signup', {
          email: this.email,
          password: this.password,
        });
      } catch (err) {
        this.error = err.message || 'Failed to register';
      }

      this.isLoading = false;

      // this.$store
      //   .dispatch('register', data)
      //   .then(() => this.$router.push('/'))
      //   .catch((err) => console.log(err));

      // let data = {
      //   name: this.name,
      //   email: this.email,
      //   password: this.password,
      //   is_admin: this.is_admin,
      // };

      // console.log(data);
    },
  },
};
</script>

<style scoped>
/* Hat-tip to bulma */
</style>
