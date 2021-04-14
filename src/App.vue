<template>
  <TheNavigation></TheNavigation>
  <Header id="home"></Header>
  <About id="about"></About>

  <p id="test2" style="height: 100vh; background-color: green">Test2</p>
  <p id="test3" style="height: 100vh">Test3</p>
  <contact id="contact"></contact>
  <TheFooter></TheFooter>

</template>

<script>
import TheNavigation from "@/components/layout/TheNavigation";
import Header from "./components/Header";
import TheFooter from "@/components/layout/TheFooter";
import Contact from "@/components/Contact";
import About from "./components/About";

export default {
  name: 'App',
  beforeCreate() {
    scrollTo(0, 0);
  },
  components: {
    Contact,
    About,
    Header,
    TheFooter,
    TheNavigation
  }
}
</script>

<style lang="scss">
@import "styles/base/_base.scss";
@import "styles/base/typography";

</style>
