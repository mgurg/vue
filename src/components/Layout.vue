<template>
  <section class="section">
    <div class="container">
      <h1 class="is-size-1 title">Lista imion</h1>
      <h2 class="is-size-2 subtitle">dla dzieci</h2>
      <div class="columns is-vcentered">
        <div class="column is-7">
          <!-- <h1 class="is-size-1 title">Lista imion</h1>
          <h2 class="is-size-2 subtitle">dla dzieci</h2> -->
          <p class="has-text-justified">
            Sprawdź jak zmieniała się popularność imion w Polsce na przestrzeni ostatnich 20 lat
            (<strong>2000-2020</strong>). Możesz wykorzystać poniższa listę do szukania inspiracji, lub do upewnienia
            się, że Twoje dziecko nie będzie szóstą Julią w klasie 😉
          </p>
          <p>&nbsp;</p>
          <p class="has-text-justified">
            Masz pomysł na jakieś naprawdę oryginalne i wyróżniające się imię? Sprawdź, czy inni też tak nie pomyśleli w
            poprzednich latach 🧐
          </p>
        </div>
        <!-- 
        <div class="column is-1">
        &nbsp;
        </div> -->

        <div class="column is-5 has-text-centered">
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
          <!-- <p class="mb-4">Imiona nadawane kobietom</p> -->
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
        </div>
        <!-- <div class="column is-4">
          <div class="is-size-4 mb-4">Płeć</div>
          <p class="mb-4">Lorem ipsum .</p>
          <div class="buttons is-centered">
            <button disabled="disabled" class="button is-light">
              <span>Kobiece</span><span class="icon is-small"><i class="fas fa-female"></i></span>
            </button>
            <button class="button is-light">
              <span>Męskie</span><span class="icon is-small"><i class="fas fa-male"></i></span>
            </button>
            <button class="button is-light">
              <span>Neutralne</span><span class="icon is-small"><i class="fas fa-male"></i></span>
            </button>
          </div>
        </div> -->
      </div>
    </div>

    <div class="columns is-vcentered mt-6">
      <div class="column is-one-third is-offset-two-fifths">
        <div class="field has-addons">
          <div class="control has-icons-left">
            <input type="text" class="input is-info" placeholder="Podaj imię" />
            <span class="icon is-medium is-left">
              <i class="fa fa-futbol-o"></i>
            </span>
          </div>
          <div class="control">
            <a class="button is-info">GO</a>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-vcentered mt-6">
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
          <tr>
            <th>2</th>
            <td>WIKTORIA</td>
            <td>167058</td>
            <td class="is-hidden-mobile">
              <span class="icon"><i class="fas fa-angle-down"></i></span>
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
          <tr>
            <th>3</th>
            <td>ZUZANNA</td>
            <td>164899</td>
            <td class="is-hidden-mobile">
              <span class="icon"><i class="fas fa-grip-lines"></i></span>
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
          <tr>
            <th>4</th>
            <td>NATALIA</td>
            <td>147083</td>
            <td class="is-hidden-mobile">
              <span class="icon"><i class="fas fa-angle-double-down"></i></span>
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
          <tr>
            <th>5</th>
            <td>ALEKSANDRA</td>
            <td>144134</td>
            <td class="is-hidden-mobile">
              <span class="icon"><i class="fas fa-angle-up"></i></span>
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
          <tr>
            <th>6</th>
            <td>MAJA</td>
            <td>141883</td>
            <td class="is-hidden-mobile">
              <span class="icon"><i class="fas fa-grip-lines"></i></span>
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
          <tr>
            <th>7</th>
            <td>OLIWIA</td>
            <td>127966</td>
            <td class="is-hidden-mobile">
              <span class="icon"><i class="fas fa-grip-lines"></i></span>
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
          <tr>
            <th>8</th>
            <td>LENA</td>
            <td>108394</td>
            <td class="is-hidden-mobile">
              <span class="icon"><i class="fas fa-grip-lines"></i></span>
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
          <tr>
            <th>9</th>
            <td>AMELIA</td>
            <td>106042</td>
            <td class="is-hidden-mobile">
              <span class="icon"><i class="fas fa-grip-lines"></i></span>
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
          <tr>
            <th>10</th>
            <td>ZOFIA</td>
            <td>95231</td>
            <td class="is-hidden-mobile">
              <span class="icon"><i class="fas fa-grip-lines"></i></span>
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
    </div>
    <div class="columns is-vcentered">
      <div class="column is-4">
        &nbsp;
      </div>
      <div class="column is-4">
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
          <a class="pagination-previous">Poprzednie</a>
          <a class="pagination-next">Następne</a>
          <ul class="pagination-list">
            <li><a class="pagination-link" style="border: 0" aria-label="Goto page 1">1</a></li>
            <!-- <li><span >1</span></li> -->
            <!-- <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
        <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
        <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 86">86</a></li> -->
          </ul>
        </nav>
      </div>
      <div class="column is-4">
        &nbsp;
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
