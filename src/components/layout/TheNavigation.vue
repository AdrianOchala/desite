<template>
  <div class="nav" id="nav">
    <h2>DESITE</h2>

    <nav>
      <a class="links active" href="#home">{{ $t("navigation.home") }}</a>
      <a class="links" href="#test2">{{ $t("navigation.about") }}</a>
      <a class="links" href="#test3">{{ $t("navigation.portfolio") }}</a>
      <a class="links" href="#test4">{{ $t("navigation.contact") }}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
  data() {
    return {
      scrolled: false,
      list: null
    }
  },
  methods: {
    addActive() {
      const nav = document.getElementById('nav');
      if (window.scrollY >= 50) {
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
    window.addEventListener('scroll', this.addActive);
    window.addEventListener('click', this.removeHash);
  },
  unmounted() {
    window.removeEventListener('scroll', this.addActive);
  }
}
</script>

<style lang="scss" scoped>
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

h2 {
  font-family: Montserrat, sans-serif;
  font-weight: 800;
  font-size: 1.4rem;
}

nav {
  font-size: 1.3rem;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 3rem;
  flex: 1;
  justify-content: flex-end;

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
</style>
