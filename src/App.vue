<template>
  <div id="app">
    <nav aria-label="main navigation">
      <div class="buttons has-addons is-centered">
        <button class="button"><router-link to="/">Home</router-link></button>
        <button class="button">
          <router-link to="/names">Imiona</router-link>
        </button>
        <button class="button">
          <router-link to="/favourites">Ulubione</router-link>
        </button>
        <!-- <button class="button">
          <router-link to="/details">Szczegóły</router-link>
        </button> -->
      </div>
    </nav>
    <div >
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 3em; */
  word-break: normal;
  /* max-width: 960px */
}
</style>
