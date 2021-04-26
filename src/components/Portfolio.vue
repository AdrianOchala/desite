<template>
  <div class="portfolio">
    <h2 class="portfolio-title">{{ $t('portfolio.title') }}</h2>
    <div class="portfolio-projects">
      <div class="portfolio-project" v-for="(project, i) in projects" v-bind:key="i">
          <img :src='project.url' alt="Portfolio project">
        <div class="portfolio-project-info">
          <h1>{{project.name}}</h1>
          <h2>{{project.technology}}</h2>
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
        technology: "HTML, CSS, JS, Vue.js"},
        {url: require('../images/portfolio/laptop2re.jpg'), name: "Lapiemy-Szczyty",
          technology: "HTML, CSS, JS, Vue.js"},
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 910px) {
    height: 80vh;
  }

  @media only screen and (max-width: 600px) {
    height: 80vh;
  }

  &-title {
    margin-bottom: 10rem;
    font-weight: 600;
    font-size: 3rem;
  }
  &-projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    //grid-row-gap: 5rem;
    grid-column-gap: 7.5vw;
    grid-row-gap: 7.5vw;
    width: 90vw;
  }

  &-project{
    width: clamp(1rem, 25vw, 300rem);
    height: clamp(1rem, 25vw, 300rem);
    position: relative;
    overflow: hidden;
    &::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-image: linear-gradient(rgba(0, 115, 251, .4), rgba(255, 43, 196, .3));
      transition: all 1s;
    }
    //Wysunięcie z lewej strony
    &:hover::after{
      width: 100%;
    }
    img{
      width: 100%;
      height: 100%;
    }
    //Ramka dla pojedynczego projektu
    &::before{
      content: "";
      position: absolute;
      top: -2.5%;
      left: -2.5%;
      width: 105%;
      height: 105%;
      border: .3rem solid white;
    }
    //Umiejscowienie opisu projektu
    &-info{
      position: absolute;
      top: 50%;
      left: 0;
      padding: 1rem;
      z-index: 10;
      transform: translateX(-100%);
      transition: all 1s;

      button{
        display: inline-block;
        position: relative;
        text-decoration: none;
        font-size: clamp(1.5rem, 2.2vh, 8rem);
        font-weight: 300;
        color: white;
        padding: 1.5rem 2rem;
        margin-top: 2rem;
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
