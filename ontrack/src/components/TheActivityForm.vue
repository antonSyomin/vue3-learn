<script setup>
import { ref, nextTick } from 'vue'
import { ICON_PLUS } from '../icons'
import { id } from '../functions'
import { createActivity } from '../activities'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'

const name = ref('')

async function submit() {
  createActivity({
    id: id(),
    name: name.value,
    secondsToComplete: 0
  })
  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}
</script>
<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input
      type="text"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
      v-model="name"
    />
    <BaseButton :disabled="name.trim() === ''">
      <BaseIcon :name="ICON_PLUS" class="h-8" />
    </BaseButton>
  </form>
</template>
