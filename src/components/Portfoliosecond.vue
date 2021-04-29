<template>
  <div class="portfolio">
    <h2>{{ $t('portfolio.title') }}</h2>
    <div class="portfolio-projects">
      <div class="portfolio-project" v-for="(project, i) in projects" v-bind:key="i">
        <img :src='project.url' alt="Portfolio project">
        <div class="portfolio-project-info">
          <h1>{{project.name}}</h1>
          <p>{{project.technology}}</p>
          <button>Odwiedź</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      projects:[
        {url: require('../images/portfolio/laptop1re.jpg'), name: "Termobudowa",
        technology: "Vue.js, Vuetify"},
        {url: require('../images/portfolio/laptop2re.jpg'), name: "Lapiemy-Szczyty",
          technology: "Vue.js, MongoDB, Node.js"},
        {url: require('../images/portfolio/laptop2re.jpg'), name: "Desite"},
        {url: require('../images/portfolio/laptop2re.jpg')},
      ]
    }
    }
  // methods: {
  //   // goToUrl(url) {
  //   //   window.location.href = url;
  //   // }
  // }
}
</script>

<style lang="scss">
@import "src/styles/components/button";
.portfolio {
  height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include respond(largeMobile){
    height: 210vh;
  }
  @include respond(mobile){
    height: 275vh;
  }

  &-title {
    margin-bottom: 10rem;
    font-weight: 600;
    font-size: clamp(2.8rem, 5vh, 12rem);

  }
  &-projects{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 7.5vw;
    justify-items: center;
    align-content: center;
    width: 70vw;

    @include respond(big-desktop){
      width: 90vw;
    }
    @include respond(largeMobile){
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &-project{
    width: clamp(1rem, 30vw, 3000rem);
    height: clamp(1rem, 25vw, 3000rem);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    @include respond(big-desktop){
      width: clamp(1rem, 35vw, 3000rem);
      height: clamp(1rem, 30vw, 3000rem);
    }
    @include respond(medium){
      width: clamp(1rem, 40vw, 3000rem);
      height: clamp(1rem, 35vw, 3000rem);
    }
    @include respond(largeMobile){
      width: clamp(1rem, 50vw, 3000rem);
      height: clamp(1rem, 45vw, 3000rem);
    }
    @include respond(mobile){
      width: clamp(1rem, 65vw, 3000rem);
      height: clamp(1rem, 60vw, 3000rem);
    }

    &::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(rgba(0, 115, 251, .6), rgba(255, 43, 196, .7));
      transition: all 1s;
    }
    img{
      width: 100%;
      height: 100%;
    }
    //Umiejscowienie opisu projektu
    &-info{
      position: absolute;
      display: flex;
      flex-direction: column;
      padding: clamp(.5rem, 1vw, 30rem);
      margin: clamp(.2rem, 1vw, 30rem);
      z-index: 10;
      transition: all 1s;
      color: lighten(white, 10);

      h1{
        font-weight: 600;
        font-size: clamp(2.8rem, 3vh, 12rem);
      }
      p {
        font-weight: 400;
        font-size: clamp(1rem, 2.5vh, 7rem);

        @include respond(largeMobile) {
          width: 90%;
          font-size: clamp(1rem, 2vh, 7rem);
        }
      }

      button{
        display: inline-block;
        position: relative;
        text-decoration: none;
        font-size: clamp(1.5rem, 2.2vh, 8rem);
        font-weight: 300;
        color: white;
        padding: 1.5rem 2rem;
        margin-top: 2rem;
        width: clamp(12rem, 10vw, 100rem);
        background-color: rgba(0,0,0,.4);
        box-sizing: border-box;
        border: 0;
        box-shadow: inset 0 0 0 .2rem white;
        transition: all .2s;

        &:hover{
          font-weight: 400;
          font-size: clamp(1.5rem, 2.3vh, 8rem);
          box-shadow: inset 0 0 0 .4rem $color-purple;
        }
      }
    }
    &:hover &-info{
      transform: translateX(0);
    }
  }
}
</style>
