import './assets/main.css'
import { loadState, saveState } from './storage'
import { startTimelineItemTimer, findActiveTimelineItem } from './timeline-items'
import { createApp } from 'vue'
import App from './App.vue'

loadState()

const activeTimelineItem = findActiveTimelineItem()

if (activeTimelineItem) {
  startTimelineItemTimer(activeTimelineItem)
}

document.addEventListener('visibilitychange', () =>
  document.visibilityState === 'visible' ? loadState() : saveState()
)

createApp(App).mount('#app')
