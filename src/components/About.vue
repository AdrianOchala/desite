<template>
  <div class="content">

    <div class="content__left">
      <div class="content__image">
        <img src="../images/about.png" alt="About Photo">
      </div>
    </div>
    <div class="content__right">
      <div class="content__text">
        <h1 class="content__text-title">
          {{ $t("header.title") }}
        </h1>
        <p class="content__text-description">
          Lorem ipsum mada łaka raka fą, Lorem ipsum mada łaka raka fą, Lorem ipsum mada łaka raka fą.
        </p>

        <a class="desiteButton" href="#test2">{{ $t("header.about") }} <span class="arrow1"></span><span class="arrow2"></span> </a>
        <a class="desiteButton" href="#test3">{{ $t("header.projects") }} <span class="arrow1"></span><span class="arrow2"></span></a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>