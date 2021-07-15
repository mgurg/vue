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
            Masz pomysł na jakieś naprawdę oryginalne i wyróżniające się imię? Sprawdź, czy inni też tak nie pomyśleli w
            poprzednich latach
          </p>

          <div class="is-size-4 mb-4">Płeć</div>

          <div class="buttons is-centered">
            <button disabled="disabled" class="button is-light">
              <span>Kobiece</span><span class="icon is-small"><i class="fas fa-female"></i></span>
            </button>
            <button class="button is-light">
              <span>Męskie</span><span class="icon is-small"><i class="fas fa-male"></i></span>
            </button>
            <button class="button is-light">
              <span>Neutralne</span><span class="icon is-small"><i class="fas fa-restroom"></i></span>
            </button>
          </div>

          <div class="is-size-4 mb-4">Filtry</div>
          <!-- <p class="mb-4">Lorem ipsum .</p> -->
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
            <!-- <button class="button is-info is-light">
              <span>Wyjątkowe</span>
              <span class="icon is-small">
                <i class="fas fa-snowflake"></i>
              </span>
            </button> -->
            <button class="button is-link is-light">
              <span>Bardzo rzadkie</span>
              <span class="icon is-small">
                <i class="far fa-gem"></i>
              </span>
            </button>
          </div>

          <div class="column is-half is-offset-one-quarter is-centered">
            <div class="field has-addons">
              <div class="control has-icons-left has-icons-right is-expanded">
                <input type="text" class="input is-info " placeholder="Enter words to search" />
                <span class="icon is-medium is-left">
                  <i class="fas fa-pen"></i>
                </span>
              </div>
              <p class="control">
                <a class="button is-info"><i class="fas fa-backspace"></i></a>
              </p>
            </div>
          </div>

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
              <tr>
                <th>1</th>
                <td>JULIA</td>
                <td>246797</td>
                <td class="is-hidden-mobile">
                  <span class="icon"><i class="fas fa-angle-double-up"></i></span>
                </td>
                <td>
                  <button title="Dodaj do ulubionych" class="button is-danger is-light">
                    <span class="icon"><i class="far fa-heart"></i></span>
                  </button>
                </td>
                <td>
                  <button title="Zobacz wykres popularności w latach 2000-2019" class="button is-light">
                    <span class="icon"><i class="fas fa-chart-area"></i></span>
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
                <a class="pagination-previous"><span class="icon"><i class="fas fa-angle-left"></i></span> Poprzednie</a>
                <a class="pagination-next">Następne <span class="icon"><i class="fas fa-angle-right"></i></span></a>
                <ul class="pagination-list">
                  <li><a class="pagination-link" style="border: 0" aria-label="Goto page 1">1</a></li>
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
export default {};
</script>
