<script setup>
import { onActivated } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import { timelineItems, timelineItemRefs, scrollToCurrentHour } from '../timeline-items'
import TheTimelineIndicator from '../components/TheTimelineIndicator.vue'

onActivated(scrollToCurrentHour)
</script>

<template>
  <div class="relative mt-7">
    <TheTimelineIndicator />
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>
