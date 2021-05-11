<template>
  <div class="container">
    <h1 class="title">{{ $t('work.title') }}</h1>

    <div class="steps">
      <div class="steps-first">
        <div class="steps-number-1">
          <h3>1</h3>
        </div>
        <h2>Analiza</h2>

        <div class="step-text">
          <p>
            Weryfikacja i analiza funkcjonalności strony, zrozumienie potrzeb klienta. Ten cel jest niezbędny do
            określenia następnych etapów.
          </p>
        </div>

      </div>

      <div class="steps-second">
        <div class="steps-number-2">
          <h3>2</h3>
        </div>
        <h2>Projekt i webdesign</h2>
        <div class="step-text">
          <p>
            Na tym etapie wykonuje się wizualny szkielet strony na podstawie danych zebranych w fazie pierwszej, dzięki
            czemu graficy wiedzą, czym kierować się przy tworzeniu projektu graficznego.
          </p>
        </div>
      </div>

      <div class="steps-first">
        <div class="steps-number-1">
          <h3>3</h3>
        </div>
        <h2>Realizacja</h2>
        <div class="step-text">
          <p>
            Proces w którym tworzymy stronę, czyli przekształcamy cały projekt do funkcjonalnej postaci. Są do tego
            używane technologie jak HTML, CSS, czy JS.
          </p>
        </div>
      </div>

      <div class="steps-second">
        <div class="steps-number-2">
          <h3>4</h3>
        </div>
        <h2>Wdrożenie</h2>
        <div class="step-text">
          <p>
            W tym etapie, po akceptacji klienta, aplikacja zostaje wdrożona na serwer.
          </p>
        </div>
      </div>

      <div class="steps-last">
        <div class="steps-number-1">
          <h3>5</h3>
        </div>
        <h2>Rozwój</h2>
        <div class="step-text">
          <p>
            Oferujemy także stałą opiekę nad stroną, edytowanie treści oraz rozwój o nowe funkcjonalności.
            strony/aplikacji
          </p>
        </div>
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
  padding-top: 10vh;
  transition: all 3s;
  opacity: 0;

  h1 {
    font-weight: 600;
    margin-bottom: 5.7rem;
    font-size: clamp(2.8rem, 5vh, 12rem);

    @include respond(mobile) {
      margin-bottom: 2rem;
    }
  }
}

.steps {
  @include respond(mobile) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  // all steps child elements
  & > * {
    height: 30vh;
    position: relative;
    display: flex;
    @include respond(mobile) {
      flex-direction: column;
      position: static;
      height: auto;
      margin: 2rem;
    }

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

      @include respond(mobile) {
        position: static;
        align-self: center;
        margin: 1rem;
      }
    }
  }

  &-first {
    border-right: solid .1vw rgba(255, 255, 255, .4);
    border-top: solid .1vw rgba(255, 255, 255, .4);
    text-align: center;

    @include respond(mobile) {
      border: none;
    }

    h2 {
      top: -5%;
      left: 10%;
    }

    .step-text {
      margin-left: 10%;

      @include respond(mobile) {
        margin-left: 0;
      }
    }
  }

  &-second {
    border-left: solid .1vw rgba(255, 255, 255, .4);
    border-top: solid .1vw rgba(255, 255, 255, .4);
    justify-content: flex-end;
    text-align: right;

    @include respond(mobile) {
      border: none;
      text-align: center;
    }

    h2 {
      top: -5%;
      right: 10%;
    }

    .step-text {
      margin-right: 10%;

      @include respond(mobile) {
        margin-right: 0;
      }
    }
  }

  &-last {
    text-align: left;
    border-top: solid .1vw rgba(255, 255, 255, .4);
    border-right: solid .1vw rgba(255, 255, 255, .4);

    @include respond(mobile) {
      border: none;
      text-align: center;
    }

    h2 {
      top: -5%;
      left: 10%;
    }

    .step-text {
      margin-left: 10%;

      @include respond(mobile) {
        margin-left: 0;
      }
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

  @include respond(mobile) {
    width: 100%;
  }
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

  @include respond(mobile) {
    position: static;
    align-self: center;
  }

  h3 {
    transform: rotate(45deg);
    font-size: clamp(1.3rem, .8vw, 4rem);
    font-family: Poppins, sans-serif;
    font-weight: 300;
  }
}


</style>
