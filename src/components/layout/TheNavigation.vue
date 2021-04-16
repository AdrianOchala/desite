<template>
  <div class="nav" id="nav">
    <a class="logo" href="#" @click="scrollTo(0, 0)">DESITE</a>

    <nav>
      <a class="links active" href="#home">{{ $t("navigation.home") }}</a>
      <a class="links" href="#about">{{ $t("navigation.about") }}</a>
      <a class="links" href="#portfolio">{{ $t("navigation.portfolio") }}</a>
      <a class="links" href="#contact">{{ $t("navigation.contact") }}</a>
      <select v-model="selected">
        <option value="pl">PL</option>
        <option value="en">EN</option>
      </select>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
  data() {
    return {
      scrolled: false,
      list: null,
      selected: "pl"
    }
  },
  watch: {
    selected() {
      this.$i18n.locale = this.selected;
      localStorage.setItem("locale", this.selected);
    }
  },
  methods: {
    addActive() {
      const nav = document.getElementById('nav');
      if (window.scrollY >= 100) {
        nav.classList.remove('nav');
        nav.classList.add('scrolling');
      } else {
        nav.classList.remove('scrolling');
        nav.classList.add('nav');
      }
      this.list.forEach((list) => {
        const href = list.href.split('#')[1];
        const element = document.getElementById(href);
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (window.scrollY >= top - 300 && window.scrollY < top + height - 300) {
          list.classList.add('active');
        } else {
          list.classList.remove('active');
        }
      });
    },
    removeHash() {
      setTimeout(() => {
        history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
      }, 5);
    }
  },
  mounted() {
    this.list = document.querySelectorAll('.links');
  },
  created() {
    if (localStorage.getItem("locale")) {
      this.selected = localStorage.getItem("locale") || "pl";
    }
    window.addEventListener('scroll', this.addActive);
    window.addEventListener('click', this.removeHash);
  },
  unmounted() {
    window.removeEventListener('scroll', this.addActive);
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/abstract/variables";
@import "src/styles/abstract/mixins";

.logo {
  font-family: Montserrat, sans-serif;
  font-weight: 800;
  font-size: 1.4rem;
  text-decoration: none;
}

.active {
  background: linear-gradient(90deg, #0073FB -26.92%, #FF2BC4 160.26%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::after {
    content: "";
    position: relative;
    display: block;
    height: 1px;
    width: 100%;
    top: .5rem;
    background: linear-gradient(90deg, #0073FB -26.92%, #FF2BC4 160.26%);
  }
}

.scrolling {
  display: flex;
  width: 90vw;
  position: fixed;
  top: 0;
  left: 50%;
  padding: 2rem 0;
  transform: translateX(-50%);
  transition: all 1s ease-in;
  z-index: 9999;

  @include respond(mobile) {
    width: 100vw;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 1px;
    width: 100%;
    background-color: #FFFFFF;
    opacity: .5;
    bottom: 0;
  }
}

.nav {
  display: flex;
  width: 90vw;
  position: fixed;
  top: 0;
  left: 50%;
  padding: 4rem 0;
  transform: translateX(-50%);
  transition: all 1s ease-in;
  z-index: 9999;

  @include respond(mobile) {
    width: 100vw;
    padding: 2rem 0;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 1px;
    width: 100%;
    background-color: #FFFFFF;
    opacity: .5;
    bottom: 0;
  }
}

nav {
  font-size: 1.3rem;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 3rem;
  flex: 1;
  justify-content: flex-end;

  @include respond(mobile) {
    grid-gap: 1.5rem;
  }

  .links {
    text-decoration: none;
    transition: all .5s ease-out;

    &:hover {
      background: linear-gradient(90deg, #0073FB -26.92%, #FF2BC4 160.26%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  h3 {
    font-family: Mulish, sans-serif;
    font-weight: 300;
  }
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; /* Remove default arrow */
  border: 3px solid $color-purple;
  background-color: transparent;
  text-align: center;
}

option {
  border: 2px solid $color-purple;
  background-color: black;
  margin: 0 auto;
}
</style>
