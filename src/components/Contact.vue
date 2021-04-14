<template>
  <div class="contact">
    <div class="contact-form">

    </div>

    <div class="contact-social">
      <h2>{{ $t("contact.follow") }}</h2>
      <p>Lorem ipsum faka maka kup mi składaka</p>
      <div class="contact-social-icons">
        <font-awesome-icon class="icon" :icon="['fab', 'facebook-square']" />
        <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 60vh;
  width: 90vw;
  border: 1px solid #FFFFFF;

  &-form {
    display: flex;
    width: 65%;
  }

  &-social {
    display: flex;
    flex-direction: column;
    flex: 1;
    border-left: 1px solid #FFFFFF;

    h2 {
      font-weight: 600;
      font-size: 5rem;
      text-align: center;
      margin: 4rem 0;
    }

    p {
      font-weight: 200;
      font-size: 2rem;
      margin: 0 auto;
      width: 70%;
    }

    &-icons {
      display: flex;
      flex-grow: 1;
      font-size: 6rem;
      align-items: flex-end;
      margin-bottom: 5rem;
      justify-content: space-evenly;

      .icon {
        cursor: pointer;
      }
    }
  }
}

</style>
