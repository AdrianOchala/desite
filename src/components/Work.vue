<template>
  <div class="container">
    <h1 class="title">{{ $t('work.title') }}</h1>

    <div class="steps">
      <div class="steps-first">
        <div class="step-text">
          <p>
            Weryfikacja i analiza funkcjonalności strony, zrozumienie potrzeb klienta. Ten cel jest niezbędny do
            określenia następnych etapów.
          </p>
        </div>
        <div class="steps-number-1">
          <h3>1</h3>
        </div>
        <h2>Analiza</h2>
      </div>

      <div class="steps-second">
        <div class="step-text">
          <p>
            Na tym etapie wykonuje się wizualny szkielet strony na podstawie danych zebranych w fazie pierwszej, dzięki
            czemu graficy wiedzą, czym kierować się przy tworzeniu projektu graficznego.
          </p>
        </div>
        <div class="steps-number-2">
          <h3>2</h3>
        </div>
        <h2>Projekt i webdesign</h2>
      </div>

      <div class="steps-first">
        <div class="step-text">
          <p>
            Proces w którym tworzymy stronę, czyli przekształcamy cały projekt do funkcjonalnej postaci. Są do tego
            używane technologie jak HTML, CSS, czy JS.
          </p>
        </div>
        <div class="steps-number-1">
          <h3>3</h3>
        </div>
        <h2>Realizacja</h2>
      </div>

      <div class="steps-second">
        <div class="step-text">
          <p>
            W tym etapie, po akceptacji klienta, aplikacja zostaje wdrożona na serwer.
          </p>
        </div>
        <div class="steps-number-2">
          <h3>2</h3>
        </div>
        <h2>Wdrożenie</h2>
      </div>

      <div class="steps-last">
        <div class="step-text">
          <p>
            Oferujemy także stałą opiekę nad stroną, edytowanie treści oraz rozwój o nowe funkcjonalności.
            strony/aplikacji
          </p>
        </div>
        <div class="steps-number-1">
          <h3>5</h3>
        </div>
        <h2>Rozwój</h2>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Work"
}
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-weight: 600;
    margin-bottom: 5.7rem;
    font-size: clamp(2.8rem, 5vh, 12rem);
  }
}

.steps {
  // all steps child elements
  & > * {
    height: 30vh;
    position: relative;
    display: flex;

    h2 {
      position: absolute;
      font-family: Poppins, sans-serif;
      font-weight: 300;
      //font-size: clamp(1.3rem, 1.5vw, 4rem);
      font-size: 1.5rem;
      text-align: center;
      z-index: 10;
      background-color: $color-background;
      padding: 0 3rem;
    }
  }

  &-first {
    border-right: solid .1vw rgba(255, 255, 255, .4);
    border-top: solid .1vw rgba(255, 255, 255, .4);
    text-align: left;

    h2 {
      top: -5%;
      left: 10%;
    }

    .step-text {
      margin-left: 10%;
    }
  }

  &-second {
    border-left: solid .1vw rgba(255, 255, 255, .4);
    border-top: solid .1vw rgba(255, 255, 255, .4);
    justify-content: flex-end;
    text-align: right;

    h2 {
      top: -5%;
      right: 10%;
    }

    .step-text {
      margin-right: 10%;
    }
  }

  &-last {
    text-align: left;
    border-top: solid .1vw rgba(255, 255, 255, .4);
    border-right: solid .1vw rgba(255, 255, 255, .4);

    h2 {
      top: -5%;
      left: 10%;
    }

    .step-text {
      margin-left: 10%;
    }
  }

  // steps numbers
  &-number-1 {
    top: -2rem;
    left: -2rem;
  }

  &-number-2 {
    top: -2rem;
    right: -2rem;
  }

}

.step-text {
  width: 30vw;
  font-size: clamp(1.2rem, 1vw, 4rem);
  height: 100%;
  display: flex;
  align-items: center;
  opacity: .7;
}

// all with steps-number
div[class^="steps-number"] {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;

  transform: rotate(-45deg);
  border: solid 1px rgba(255, 255, 255, .4);
  background-color: $color-background;

  h3 {
    transform: rotate(45deg);
    font-size: clamp(1.3rem, .8vw, 4rem);
    font-family: Poppins, sans-serif;
    font-weight: 300;
  }
}


</style>
