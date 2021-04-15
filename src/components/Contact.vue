<template>
  <div class="full">
    <div class="contact">
      <div class="contact-container">
        <h2>{{ $t("contact.contact") }}</h2>
        <form class="contact-form" @submit.prevent="sendEmail">
          <input :placeholder="$t('contact.name')" type="text" required name="user_name">
          <input :placeholder="$t('contact.email')" type="email" required name="user_email">
          <textarea :placeholder="$t('contact.message')" required name="message"></textarea>
          <button :disabled="isSend" :class="{ disabled: isSend, active: !isSend}" type="submit">{{
              $t('contact.send')
            }}
          </button>
        </form>
      </div>

      <div class="contact-social">
        <h2>{{ $t("contact.follow") }}</h2>
        <p>Lorem ipsum faka maka kup mi składaka</p>
        <div class="contact-social-icons">
          <font-awesome-icon class="icon" :icon="['fab', 'facebook-square']"/>
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']"/>
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
@import "../styles/abstract/variables";

.full {
  display: flex;
  align-items: center;
  height: 80vh;
}

.disabled {
  margin-top: auto;
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
}

.input-button {
  color: white;
  font-size: 2rem;
  font-weight: 300;
  text-decoration: none;
  background-color: transparent;
}

.contact {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 60vh;
  width: 90vw;
  border: 1px solid #FFFFFF;

  h2 {
    font-weight: 600;
    font-size: 5rem;
    text-align: center;
    margin: 4rem 0;
  }

  &-container {
    display: flex;
    flex-direction: column;
    width: 65%;
  }

  &-form {
    display: flex;
    width: 50%;
    margin: 0 auto;
    flex: 1;
    flex-direction: column;

    input {
      margin-bottom: 4rem;
      padding: 1rem;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid $color-grey;

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

      &:focus {
        border: 1px solid $color-purple;
      }
    }

    .active {
      margin-top: auto;
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
        transition: all .5s;

        &:hover, &:active {
          font-size: 8rem;
          border: 2px solid $color-purple;
        }
      }
    }
  }

}

</style>
