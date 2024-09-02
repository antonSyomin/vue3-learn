<script setup>
import { ref, computed } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import {
  generateActivities,
  normailzePageHash,
  generateTimelineItems,
  generateactivitySelectOptions
} from './functions.js'

const currentPage = ref(normailzePageHash())
const timelineItems = generateTimelineItems()
const activities = ref(generateActivities())
const activitySelectOptions = computed(() => generateactivitySelectOptions(activities.value))

function goTo(page) {
  currentPage.value = page
}

function deleteActivity(activity) {
  timelineItems.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function setTimelineItemActivity({ timelineItem, activity }) {
  timelineItem.activityId = activity.id
}

function createActivity(activity) {
  activities.value.push(activity)
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activities="activities"
      :activity-select-options="activitySelectOptions"
      @set-timeline-item-activity="setTimelineItemActivity"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @create-activity="createActivity"
      @delete-activity="deleteActivity"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
