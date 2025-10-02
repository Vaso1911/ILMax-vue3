<template>
  <footer class="footer bg-dark p-4">
    <div class="container d-flex justify-content-between footer__container">
      <!-- <ul class="list-reset contacts">
        <li class="contacts__item">
          <a
            class="contacts__link"
            href="#map"
          >
            <GeoIcon />
            <span class="contacts__text">г. Калининград, ​пр.Калинина 1-5, 1 этаж</span>
          </a>
        </li>
        <li class="contacts__item">
          <a
            class="contacts__link"
            href="tel:79001002001"
          >
            <PhoneIcon />
            <span class="contacts__text">+7-900-100-20-01</span>
          </a>
        </li>
        <li class="contacts__item">
          <a
            class="contacts__link"
            href="mailto:ilmax@gogogo.rus"
          >
            <MailIcon />
            <span class="contacts__text">ilmax@gogogo.rus</span>
          </a>
        </li>
      </ul> -->
<Contacts :showAddress="showAddress"/>
      <NavList :isHeader="false" />

      <Social />
    </div>
  </footer>
  <Copyright />
</template>

<script setup>
import Contacts from './Contacts.vue';
import Copyright from './Copyright.vue';
import NavList from './NavList.vue';
import Social from './Social.vue';

const props = defineProps({
  showAddress: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.footer {
  * {
    color: #F8F9FA;
  }

  .contacts,
  .nav__list,
  .social {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .contacts__link span,
  .nav__link {
    transition: color 0.3s ease-in-out;

        &:hover {
      color: #0D6EFD;
    }
  }
  &__container {
    @media (max-width: 992px) {
      flex-wrap: wrap;
      gap: 40px;
    }


    @media (max-width: 576px) {
      gap: 5px;
    }
  }

  .contacts {

    &__link {
      display: flex;
      align-items: center;
      gap: 35px;

      svg {
        flex-shrink: 0;
      }
    }

    &__text {
      @media (max-width: 768px) {
        display: none;
      }
    }

    @media (max-width: 768px) {
      gap: 20px;
    }
  }

  .nav__list {

    @media (max-width: 576px) {
      font-size: 14px;
    }
  }

  .social {

    &__link {
    gap: 10px;
      @media (max-width: 992px) {
        gap: 5px;
      }
    }

    &__text {
      @media (max-width: 768px) {
        display: none;
      }
    }

    @media (max-width: 992px) {
      flex-direction: row;
      gap: 20px;
    }

    @media (max-width: 576px) {
      flex-direction: column;
    }
  }


}
</style>