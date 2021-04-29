<template>
  <div class="nav" id="nav">
    <a class="logo" href="#" @click="scrollTo(0, 0)">DESITE</a>

    <nav>
      <a class="links active" href="#home" v-scroll-to="'#home'">{{ $t("navigation.home") }}</a>
      <a class="links" href="#about" v-scroll-to="'#about'">{{ $t("navigation.about") }}</a>
      <a class="links" href="#portfolio" v-scroll-to="'#portfolio'">{{ $t("navigation.portfolio") }}</a>
      <a class="links" href="#contact" v-scroll-to="'#contact'">{{ $t("navigation.contact") }}</a>
      <select v-model="selected">
        <option value="pl">PL</option>
        <option value="en">EN</option>
      </select>
    </nav>

    <div class="hamburger-mobile">
      <select v-model="selected">
        <option value="pl">PL</option>
        <option value="en">EN</option>
      </select>
      <font-awesome-icon @click="toggleHamburger" class="hamburger-mobile-icon" icon="bars" :style="{ color: 'green' }"></font-awesome-icon>
    </div>

  </div>

  <transition name="fade">
    <div v-if="mobileActive" class="mobile_menu">
      <div class="mobile_menu_nav">
        <a @click="toggleHamburger('home')" class="mobile_menu_nav-link">{{ $t("navigation.home") }}</a>
        <a @click="toggleHamburger('about')" class="mobile_menu_nav-link">{{ $t("navigation.about") }}</a>
        <a @click="toggleHamburger('portfolio')" class="mobile_menu_nav-link">{{ $t("navigation.portfolio") }}</a>
        <a @click="toggleHamburger('contact')" class="mobile_menu_nav-link">{{ $t("navigation.contact") }}</a>
      </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: "TheNavigation",
  data() {
    return {
      scrolled: false,
      list: null,
      selected: "pl",
      mobileActive: false
    }
  },
  watch: {
    selected() {
      this.$i18n.locale = this.selected;
      localStorage.setItem("locale", this.selected);
    }
  },
  methods: {
    async toggleHamburger(id) {
      this.mobileActive = !this.mobileActive;
      if (id) {
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth'
        });
      }
    },
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
  },
  unmounted() {
    window.removeEventListener('scroll', this.addActive);
  }
}
</script>

<style lang="scss" scoped>
.logo {
  font-family: Montserrat, sans-serif;
  font-weight: 800;
  font-size: clamp(1.4rem, 1.5vh, 4rem);
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
  background-color: rgba(0, 0, 0, 0.5);

  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 1px;
    width: 100%;
    background-color: #FFFFFF;
    opacity: .3;
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
  font-size: clamp(1.3rem, 1.5vh, 3rem);
  display: grid;
  grid-auto-flow: column;
  grid-gap: 3rem;
  flex: 1;
  justify-content: flex-end;

  @include respond(mobile) {
    display: none;
  }

  .links {
    font-family: Mulish, sans-serif;
    font-weight: 300;
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

// mobile hamburger menu
.hamburger-mobile {
  font-size: 2rem;
  display: grid;
  grid-auto-flow: column;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (min-width: 600px) {
    display: none;
  };

  select {
    margin-right: 1rem;

  }


  &:hover {
    cursor: pointer;
  }

  &-icon {
  font-size: 3rem;
    &:active {
      transform: translateY(2px);
    }
  }
}

.mobile_menu {
  display: block;
  position: fixed;
  z-index: 100000;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: $color-background;

  @media only screen and (min-width: 600px) {
    display: none;
  };

  &_nav {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    &-link {
      font-family: Varela Round, sans-serif;
      font-weight: 300;
      text-decoration: none;
      font-size: 3rem;
      color: rgba(255,255,255, .7);
      position: relative;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
      transition: all .2s;

      &:active {
        color: $color-purple;
      }

      &:after {
        content: "";
        position: absolute;
        display: none;
        transform: translateY(1rem);
        height: 1px;
        width: 100%;
        bottom: 0rem;
        background: linear-gradient(90deg, #0073FB -26.92%, #FF2BC4 160.26%);
      }

      &:active:after {
        display: block;
      }
    }
  }
}

// animations
.fade-enter-to, .fade-leave-active {
  opacity: 1;
  transform: translateX(0);
  transition: all .5s ease-in;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(400px);
}
</style>
