import './assets/main.css'
import * as storage from './storage'
import { activities } from './activities'
import { timelineItems } from './timeline-items'

import { createApp } from 'vue'
import App from './App.vue'

loadState()

document.addEventListener('visibilitychange', () => {
  document.visibilityState === 'visible' ? loadState() : saveState()
})

function loadState() {
  const state = storage.load()

  timelineItems.value = state.timelineItems
  activities.value = state.activities
}

function saveState() {
  storage.save({
    timelineItems: timelineItems.value,
    activities: activities.value
  })
}

createApp(App).mount('#app')
