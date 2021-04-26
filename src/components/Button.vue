<template>
  <a class="desiteButton draw meet" :href="href">{{ text }} <span class="arrow1"></span><span class="arrow2"></span> </a>

</template>

<script>
export default {
  name: "Button",
  props:["text","href"]
}
</script>

<style lang="scss" scoped>
</style>
