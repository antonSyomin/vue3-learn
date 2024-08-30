import {PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS} from './constants'
import {HOURS_IN_DAY} from './constants'

export function normailzePageHash() {
    const hash = window.location.hash.slice(1);

    if (Object.keys([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS]).includes(hash)) {
        return hash
    }

    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
}

export function generateTimelineItems()
{
    const timelineItems = []

    for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
        timelineItems.push({ hour })
    }

    return timelineItems
}