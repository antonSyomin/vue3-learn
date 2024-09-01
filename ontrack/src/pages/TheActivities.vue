<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline'
import ActivityItem from '../components/ActivityItem.vue'
import BaseButton from '../components/BaseButton.vue'
import { isActivityValid, validateActivities } from '../validators.js'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})

const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid
})

let newActivity = 'sss'
</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <form
      @submit.prevent="emit('createActivity', newActivity)"
      class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
    >
      <input
        type="text"
        class="w-full rounded border px-4 text-xl"
        placeholder="Activity name"
        :value="newActivity"
        @input="newActivity = $event.target.value"
      />
      <BaseButton>
        <PlusIcon class="h-8" />
      </BaseButton>
    </form>
  </div>
</template>
