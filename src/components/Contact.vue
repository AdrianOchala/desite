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
        <p>{{ $t('contact.social.description') }}</p>
        <div class="contact-social-icons">
          <font-awesome-icon class="icon" :icon="['fab', 'facebook-square']"/>
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']"/>
        </div>
      </div>
    </div>

<!--    <div class="contact_us">-->
<!--      <div class="contact_us-person">-->
<!--        <h3>Szymon Wójcik</h3>-->

<!--        <div class="contact_us-person-detail">-->
<!--          <font-awesome-icon class="contact_us-person-icon" :icon="['fas', 'mobile-alt']"/>-->
<!--          <p>+(48) 794 700 712</p>-->
<!--        </div>-->

<!--        <div class="contact_us-person-detail">-->
<!--          <font-awesome-icon class="contact_us-person-icon" :icon="['fas', 'envelope']"/>-->
<!--          <p>wojcik.szymon1@gmail.com</p>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="contact_us-person">-->
<!--        <h3>Adrian Ochała</h3>-->

<!--        <div class="contact_us-person-detail">-->
<!--          <font-awesome-icon class="contact_us-person-icon" :icon="['fas', 'mobile-alt']"/>-->
<!--          <p>+(48) 512 390 104</p>-->
<!--        </div>-->

<!--        <div class="contact_us-person-detail">-->
<!--          <font-awesome-icon class="contact_us-person-icon" :icon="['fas', 'envelope']"/>-->
<!--          <p>ochala.adrian@gmail.com</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
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
    font-size: 5rem;
    text-align: center;
    margin: 4rem 0;

    @include respond(medium) {
      font-size: 4rem;
      margin: 1rem 0;
      align-self: center;
    }

    @include respond(largeMobile) {
      font-size: 2.5rem;
    }
  }

  &-container {
    display: flex;
    flex-direction: column;
    width: 65%;

    @include respond(medium) {
      width: 100%;
      margin-top: 1rem;
      flex-direction: column;
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
      background-color: transparent;
      border: none;
      border-bottom: 1px solid $color-grey;

      @include respond(medium) {
        margin-bottom: 1rem;
        text-align: center;
      }

      @include respond(largeMobile) {
        font-size: 1.2rem;
      }

      &:focus {
        border: 1px solid $color-purple;
      }
    }

    textarea {
      padding: 1rem;
      height: 5rem;
      background-color: transparent;
      resize: none;
      border: none;
      border-bottom: 1px solid $color-grey;

      @include respond(medium) {
        width: 100%;
        align-self: center;
        text-align: center;
      }

      @include respond(largeMobile) {
        font-size: 1.2rem;
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
      font-size: 1.5rem;
      cursor: pointer;

      @include respond(medium) {
        padding: 1rem;
        margin-top: 1.5rem;
        margin-bottom: .5rem;
      }

      @include respond(largeMobile) {
        font-size: 1rem;
      }

      &:hover {
        border: 3px solid $color-purple;
        color: darken($color-purple, 10);
      }
    }
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

      @include respond(medium) {
        font-size: 3rem;
        margin: 1rem 0;
      }

      @include respond(largeMobile) {
        font-size: 2.5rem;
      }
    }

    p {
      font-weight: 200;
      font-size: 2rem;
      margin: 0 auto;
      width: 70%;

      @include respond(medium) {
        display: none;
      }
    }

    &-icons {
      display: flex;
      flex-grow: 1;
      font-size: 6rem;
      align-items: flex-end;
      margin-bottom: 5rem;
      justify-content: space-evenly;

      @include respond(medium) {
        margin-bottom: 1rem;
      }

      @include respond(largeMobile) {
        font-size: 4.5rem;
      }

      .icon {
        cursor: pointer;
        transition: all .5s;

        &:hover, &:active {
          font-size: 8rem;
          border: 2px solid $color-purple;
        }
      }
    }
  }

  &_us {
    display: flex;
    width: 90vw;
    padding: 2rem;
    justify-content: space-evenly;
    border: 1px solid #FFFFFF;

    @include respond(largeMobile) {
      flex-direction: column;
      align-items: center;
      padding: 1rem;
    }

    h3 {
      font-size: 2.5rem;

      @include respond(largeMobile) {
        font-size: 2rem;
      }
    }

    &-person {
      text-align: center;
      border: 1px solid #FFFFFF;
      padding: 1rem;
      width: 40rem;

      @include respond(largeMobile) {
        padding: .5rem;
        width: 30rem;
      }


      &-icon {
        font-size: 2rem;
        opacity: .5;

        @include respond(largeMobile) {
          font-size: 1.5rem;
        }
      }

      &-detail {
        display: flex;
        font-size: 1.5rem;
        align-items: center;
        justify-content: center;

        @include respond(largeMobile) {
          font-size: 1.2rem;
        }

        p {
          font-family: Mulish, sans-serif;
          margin-left: .5rem;
          font-weight: 200;
        }
      }
    }

  }

}

</style>
