<script setup>
    import {PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS} from '../constants'
    import {ClockIcon, ListBulletIcon, ChartBarIcon} from '@heroicons/vue/24/outline'
    import NavItem from './NavItem.vue'

    defineProps(['currentPage'])

    const emit = defineEmits(['navigate'])

    const navItems = {
        [PAGE_TIMELINE]: ClockIcon, 
        [PAGE_ACTIVITIES]: ListBulletIcon, 
        [PAGE_PROGRESS]: ChartBarIcon
    }
</script>
<template>
    <nav class='sticky bottom-0 bg-white z-10 text-3xl'>
        <ul class='flex items-center justify-around border-t'>
            <NavItem v-for='(icon, page) in navItems' 
                    :key='page' 
                    :href="`#${page}`" 
                    :class='{"bg-gray-200 pointer-events-none": page === currentPage}'
                    @click="emit('navigate', page)">
                <component :is='icon' class='h-6 w-6'/> {{ page }}
            </NavItem>
        </ul>
    </nav>
</template>