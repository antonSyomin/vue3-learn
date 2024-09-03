<script setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants'
</script>
<template>
  <nav class="sticky bottom-0 bg-white z-10 text-3xl">
    <ul class="flex items-center justify-around border-t">
      <NavItem v-for="(icon, page) in NAV_ITEMS" :key="page" :page="page">
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
