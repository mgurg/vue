<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <h1 class="is-size-1 title">Lista imion</h1>
          <h2 class="is-size-2 subtitle">dla dzieci</h2>

          <p class="has-text-justified">
            Tradycyjne: <em>Kasia</em> i <em>Piotrek</em>, współczesne <em>Zosia</em> i <em>Filip</em>, czy może
            oryginalne <em>Nela</em> i <em>Bruno</em>? Imion zarejestrowanych w 🇵🇱 polskim rejestrze PESEL jest ponad
            <b>3 tysięce</b>. Z pomocą tej strony znajdziesz najładniejsze imię dla dziecka i sprawdzisz jego
            popularność.
          </p>
          <h2 class="is-size-2 subtitle mt-6">Imię na 2021 rok</h2>
          <p class="has-text-justified">
            Lista jest podzielona na dwie sekcje (męskie i damskie imiona), tak żeby szybko znaleźć najładniejsze imię
            dla dziewczynki lub najładniejsze imię dla chłopca. Wkrótce zobaczysz też jak ma na imię znany aktor lub
            piosenkarka oraz opis i znaczenie imienia.
          </p>
          <h2 class="is-size-2 subtitle mt-6">Plany na przyszłość</h2>
          <p class="has-text-justified">
            Obecnie można przeglądać imiona wg popularności i sprawdzić jak ta zmieniała się w czasie. Nie sprawdzisz
            jak na imię miał Rembrant, ani jak po francusku jest Piotr, ale pracuje nad wyszukiwarką imion dla par
            dwujęzycznych, tak żeby można było znaleźć imię które ma odpowiednik w dwóch rożnych językach.
          </p>
          <p class="has-text-justified my-4">Owocnych poszukiwań!</p>

          <article class="message">
            <div class="message-header">
              <p>Dane o popularności imion</p>
            </div>
            <div class="message-body">
              Statystyki opracowane na podstawie informacji z portalu <strong>Otwarte Dane</strong>
              (
              <a
                href="https://dane.gov.pl/pl/dataset/219/resource/21458,imiona-nadane-dzieciom-w-polsce-w-latach-2000-2019-imie-pierwsze/table"
                >dane.gov.pl</a
              >)
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Najładniejsze imiona dla chłopca i dziewczynki ❤️',
    // override the parent template and just use the above title only
    titleTemplate: null,
  },
  meta: [
    {
      vmid: 'desc',
      name: 'description',
      content: `Imion zarejstrowanych w rejstrze PESEL jest ponad 3 tysiące. Z pomocą tej strony znajdziesz najładniejsze imię dla dziecka i sprawdzisz jego popularność.`,
    },
  ],
};
</script>
