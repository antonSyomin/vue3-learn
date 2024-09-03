import { ref } from 'vue'
import { PAGE_TIMELINE } from './constants'
import { normailzePageHash } from './functions'

export const timelineRef = ref()

export const currentPage = ref(normailzePageHash())

export function navigate(page) {
  if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    timelineRef.value.scrollToHour()
  }

  if (page !== PAGE_TIMELINE) {
    document.body.scrollIntoView()
  }

  currentPage.value = page
}
