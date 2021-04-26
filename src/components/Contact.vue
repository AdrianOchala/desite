<template>
  <div class="full">
    <div class="contact">

      <div class="contact-container">
        <h2>{{ $t("contact.contact") }}</h2>

        <form class="contact-form" @submit.prevent="sendEmail">
          <div class="contact-form-personal">
            <input :placeholder="$t('contact.name')" type="text" required name="user_name">
            <input :placeholder="$t('contact.email')" type="email" required name="user_email">
          </div>
          <textarea :placeholder="$t('contact.message')" required name="message"></textarea>
          <button :disabled="isSend" :class="{ disabled: isSend, active: !isSend}" type="submit">{{
              $t('contact.send')
            }}
          </button>
        </form>
      </div>

      <div class="contact-social">

        <h2>{{ $t("contact.follow") }}</h2>
        <div class="contact-social-icons">
          <font-awesome-icon class="icon" :icon="['fab', 'facebook-square']"/>
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']"/>
        </div>

        <div class="contact-social-ds">
          <h3>{{ $t("contact.call") }}</h3>
          <p>+48 79700712</p>
          <p>+48 79700712</p>
          <h3>{{ $t("contact.alsoText") }}</h3>
          <p>desite@hosting.com</p>
        </div>


      </div>
    </div>
  </div>

</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "Contact",
  data() {
    return {
      isSend: false
    }
  },
  methods: {
    sendEmail(e) {
      emailjs.sendForm('service_275ecft', 'template_dm2kels', e.target, 'user_Glrid5hQCnoIO9RCdwtRz')
          .then((result) => {
            this.isSend = true;
            this.$toast.success(this.$t('contact.success'));
            console.log('SUCCESS!', result.status, result.text);
          }, (error) => {
            this.$toast.error(this.$t('contact.error'));
            console.log('FAILED...', error);
          });
    }
  }
}
</script>

<style lang="scss" scoped>
.full {
  display: flex;
  margin-top: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;

  @include respond(largeMobile) {
    height: 90vh;
  }
}

.disabled {
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding: 2rem;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  color: $color-grey;
  border: 3px solid $color-grey;
  transition: all 1s;
  border-radius: 5px;
  letter-spacing: .2rem;
  font-size: 1.5rem;

  @include respond(medium) {
    padding: 1rem;
    margin-top: 1.5rem;
    margin-bottom: .5rem;
  }

  @include respond(largeMobile) {
    font-size: 1rem;
  }
}

.contact {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 90vw;
  border: 1px solid #FFFFFF;
  margin-top: 5rem;

  @include respond(medium) {
    flex-direction: column;
  }

  h2 {
    font-weight: 600;
    font-size: clamp(2.5rem, 6vh, 12rem);
    text-align: center;
    margin: 4rem 0;

    @include respond(medium) {
      margin: 1rem 0;
      align-self: center;
    }
  }

  &-container {
    display: flex;
    flex-direction: column;
    width: 65%;

    @include respond(medium) {
      width: 100%;
      margin-top: 1rem;
      border-bottom: 1px solid #FFFF;
    }
  }

  &-form {
    display: flex;
    width: 50%;
    margin: 0 auto;
    flex: 1;
    flex-direction: column;

    @include respond(medium) {
      width: 80%;
      margin-bottom: 1.5rem;
    }

    &-personal {
      display: flex;
      flex-direction: column;

      @include respond(medium) {
        align-self: center;
        width: 100%;
      }
    }

    input {
      margin-bottom: 4rem;
      padding: 1rem;
      font-size: 2vh;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid $color-grey;

      @include respond(medium) {
        margin-bottom: 2rem;
        text-align: center;
      }

      &:focus {
        border: 1px solid $color-purple;
      }
    }

    textarea {
      padding: 1rem;
      height: 5vh;
      background-color: transparent;
      font-size: 2vh;
      resize: none;
      border: none;
      border-bottom: 1px solid $color-grey;

      @include respond(medium) {
        width: 100%;
        align-self: center;
        text-align: center;
      }

      &:focus {
        border: 1px solid $color-purple;
      }
    }

    .active {
      margin-top: 5rem;
      margin-bottom: 2rem;
      padding: 2rem;
      margin-left: 50%;
      transform: translateX(-50%);
      background-color: transparent;
      color: $color-grey;
      border: 3px solid $color-grey;
      transition: all 1s;
      border-radius: 5px;
      letter-spacing: .2rem;
      font-size: 2vh;
      cursor: pointer;

      @include respond(medium) {
        padding: 1rem;
        margin-top: 1.5rem;
        margin-bottom: .5rem;
      }

      &:hover {
        border: 3px solid $color-purple;
        color: darken($color-purple, 10);
      }
    }
  }

  &-social {
    border-left: 1px solid #FFFFFF;
    display: flex;
    flex-direction: column;
    flex: 1;

    @include respond(medium) {
      border-left: none;
      font-size: 6vh;
    }

    h2 {
      font-weight: 600;
      width: 100%;
      font-size: clamp(2.5rem, 6vh, 12rem);

      @include respond(medium) {
        display: none;
      }
    }

    &-icons {
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      grid-gap: 3rem;
      font-size: 8vh;

      @include respond(medium) {
        font-size: 6vh;
        margin-top: 2rem;
      }

      .icon {
        cursor: pointer;
        transition: all .6s ease-in;

        &:hover {
          transform: rotate(30deg);
        }

        &:active {
          border: 3px solid white;
        }
      }
    }

    &-ds {
      width: 80%;
      align-self: center;
      margin-top: 5rem;

      @include respond(medium) {
        margin-top: 1rem;
      }

      h3 {
        font-size: clamp(1rem, 2vh, 8rem);
        text-align: center;
      }

      p {
        font-size: 2vh;
        text-align: center;
        color: $color-grey;
      }

      @include respond(medium) {
        margin-bottom: 2rem;
      }
    }
  }
}

</style>
