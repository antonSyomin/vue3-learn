<script setup>
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import { isTimelineItemValid, isUndefined } from '../validators'
import { setTimelineItemActivity } from '../timeline-items'
import { activitySelectOptions } from '../activities'
import TimelineStopwatch from './TimelineStopwatch.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const emit = defineEmits({
  scrollToHour: isUndefined
})
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" @click.prevent="emit('scrollToHour')" />
    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="setTimelineItemActivity(timelineItem, $event)"
    />
    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>
