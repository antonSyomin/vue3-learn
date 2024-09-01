<script setup>
import { nextTick, ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import { isActivityValid } from '../validators.js'

const emit = defineEmits({
  submit: isActivityValid
})

async function submit() {
  emit('submit', activity.value)
  activity.value = ''
  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}

const activity = ref('')
</script>
<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input
      type="text"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
      v-model="activity"
    />
    <BaseButton :disabled="activity.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
