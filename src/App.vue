<template>
  <TheNavigation></TheNavigation>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <h1>Test</h1>
  <p>Elo ziomy</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheNavigation from "@/components/layout/TheNavigation";

export default {
  name: 'App',
  components: {
    TheNavigation,
    HelloWorld
  }
}
</script>

<style lang="scss">
@import "styles/base/_base.scss";
@import "styles/base/typography";
</style>
