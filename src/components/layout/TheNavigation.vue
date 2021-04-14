<template>
  <div class="nav">
    <h2>DESITE</h2>

    <nav>
      <a class="links" href="#test1">{{ $t("navigation.home") }}</a>
      <a class="links" href="#test2">{{ $t("navigation.about") }}</a>
      <a class="links" href="#test3">{{ $t("navigation.portfolio") }}</a>
      <a class="links" href="#test4" >{{ $t("navigation.contact") }}</a>
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
    scroll(id) {
      const el = document.getElementById(id);
      el.scrollIntoView({behavior: "smooth"});
    },
    addActive() {
     this.list.forEach((list) => {
        const href = list.href.split('#')[1];
        const element = document.getElementById(href);
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
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
    window.addEventListener('scroll', this.addActive);
  },
  unmounted() {
    window.removeEventListener('scroll', this.addActive);
  }
}
</script>

<style lang="scss" scoped>
.active {
  background-color: red;
}

.nav {
  display: flex;
  background-color: orangered;
  width: 90vw;
  margin: 0 auto;
  position: fixed;

  h2 {
    font-family: Montserrat, sans-serif;
    font-weight: 800;
    font-size: 1.4rem;
  }

  nav {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    background-color: green;

    h3 {
      font-family: Mulish, sans-serif;
      font-weight: 300;
    }
  }


}
</style>
