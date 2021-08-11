<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <h1 class="is-size-1 title">Rejestracja</h1>
            <form action="" class="box" v-on:submit.prevent="register">
              <div class="field">
                <label for="" class="label">Nazwa</label>
                <div class="control has-icons-left">
                  <input id="name" type="text" class="input" v-model="name" required autofocus />
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Email</label>
                <div class="control has-icons-left">
                  <input id="email" type="text" class="input" v-model="email" required />
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
              <div class="field">
                <label for="" class="label">Powtórz hasło</label>
                <div class="control has-icons-left">
                  <input type="password" v-model="password_confirmation" placeholder="*******" class="input" required />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field mt-6">
                <button type="submit" class="button is-warning is-fullwidth">
                  Zarejstruj się
                </button>
              </div>
            </form>
              <p class="has-text-grey">
              <a href="/login">Mam już konto</a> &nbsp;·&nbsp; <a href="/remindPassword">Nie pamiętam hasła</a> &nbsp;·&nbsp; <a href="">Potrzebuję pomocy</a>
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
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      is_admin: null,
    };
  },
  methods: {
    register() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        is_admin: this.is_admin,
      };
      this.$store
        .dispatch('register', data)
        .then(() => this.$router.push('/'))
        .catch((err) => console.log(err));
    },
  },
};
</script>
