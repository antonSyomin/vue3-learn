<script setup>
import { onActivated, onDeactivated } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import {
  timelineItems,
  timelineItemRefs,
  scrollToCurrentHour,
  stopTimelineItemTimer
} from '../timeline-items'
import { startCurrentDateTimer, stopCurrentDateTimer } from '../time'
import TheTimelineIndicator from '../components/TheTimelineIndicator.vue'

stopTimelineItemTimer()

onActivated(() => {
  scrollToCurrentHour()

  startCurrentDateTimer()
})
onDeactivated(stopCurrentDateTimer)
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
