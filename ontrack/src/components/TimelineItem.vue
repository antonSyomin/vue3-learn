<script setup>
import { ref } from 'vue'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'

const options = [
    {value: 1, label: 'Coding'},
    {value: 2, label: 'Reading'},
    {value: 3, label: 'Training'},
]

defineProps(['timelineItem'])

const selectedActivityId = ref(1) 
</script>
<template>
    <li 
        class='relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4'>
        <TimelineHour :hour="timelineItem.hour"/>
        <div class='flex gap-2'>
            <BaseSelect :selected="selectedActivityId" :options="options" placeholder="Rest" @select="selectedActivityId = $event"/>
        </div>
    </li>
</template>