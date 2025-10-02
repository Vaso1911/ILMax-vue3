<template>
  <header class="header bg-dark">
    <div class="container mx-auto d-flex justify-content-between align-items-center  py-2">
      <Logo />
      <NavList :isHeader="true" />
      <a
        class="phone"
        href="tel:79001002001"
      >
        <PhoneIcon />
        +7-900-100-20-01
      </a>
    </div>
  </header>
</template>

<script setup>

import PhoneIcon from './icons/PhoneIcon.vue';
import Logo from './Logo.vue';
import NavList from './NavList.vue';


</script>

<style lang="scss">
.header {
  width: 100%;

  * {
    color: #0D6EFD;
  }

  .list-header {
    display: flex;
    align-items: center;

    @media (max-width: 576px) {
      display: none;
    }
  }

  .nav {
    &__list {
      gap: 20px;
    }

    &__item {
      height: max-content;
    }

    &__link {
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #F8F9FA;
      }
    }
  }

  .phone {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 2px 0;
    border-bottom: 1px solid transparent;
    transition: border 0.2s ease-in-out;

    &:hover {
      border-bottom: 1px solid #0D6EFD;
    }
  }
}
</style>
