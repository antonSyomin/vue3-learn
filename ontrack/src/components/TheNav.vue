<script setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants'
</script>
<template>
  <nav class="sticky bottom-0 bg-white z-10 text-3xl">
    <ul class="flex items-center justify-around border-t">
      <NavItem v-for="navItem in NAV_ITEMS" :key="navItem.page" :nav-item="navItem" />
    </ul>
  </nav>
</template>
