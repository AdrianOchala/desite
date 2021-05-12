<template>
  <div class="portfolio">
    <h2 class="portfolio-title">{{ $t('portfolio.title') }}</h2>
    <div class="portfolio_project">
      <div class="portfolio_project_item" v-for="(project, i) in projects" v-bind:key="i">
        <img :src='project.url' alt="Portfolio project">
        <div class="portfolio_project_item-info">
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
}
</script>

<style lang="scss">
.portfolio {
  width: 90%;
  margin: 0 auto;
  padding-top: 10vh;
  transition: all 3s;
  opacity: 0;

  h2 {
    margin-bottom: 5.7rem;
    font-weight: 600;
    text-align: center;
    font-size: clamp(2.8rem, 5vh, 12rem);
  }

  &_project {
    display: grid;
    width: 70%;
    //grid-gap: 5rem;
    grid-row-gap: 2rem;
    grid-column-gap: 8vw;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr) );
    margin: 0 auto;

    &_item {
      position: relative;
      height: auto;
      margin: 0 auto;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(rgba(0, 115, 251, .6), rgba(255, 43, 196, .7));
      }

      img {
        width: 100%;
        height: 100%;
      }

      &-info {
        z-index: 20;
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 2rem;

        h1 {
          font-weight: 600;
          font-size: clamp(2.8rem, 3vh, 12rem);
        }

        p {
          font-weight: 400;
          font-size: clamp(1rem, 2.5vh, 7rem);
        }

        button{
          display: inline-block;
          position: relative;
          text-decoration: none;
          font-size: clamp(1.5rem, 2.2vh, 8rem);
          opacity: .6;
          color: white;
          padding: 1.5rem 2rem;
          margin-top: 2rem;
          width: clamp(12rem, 10vw, 100rem);
          background-color: rgba(0,0,0,.4);
          box-sizing: border-box;
          border: 2px solid white;
          transition: all .5s;
          cursor: pointer;

          &:hover{
            opacity: 1;
            border: 2px solid $color-purple;
          }
        }
      }
    }
  }
}
</style>
