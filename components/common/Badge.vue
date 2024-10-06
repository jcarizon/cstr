<template>
  <div class="common-badge">
    <span :class="['size-12px', props.theme]">{{ props.label }}</span>
  </div>
</template>

<script setup lang="ts">
import '~/assets/scss/base/common-badge.scss'
const props = defineProps({
  label: {
    type: String,
    default: 'Badge'
  },
  theme: {
    type: String,
    default: 'info',
    validator(value: string) {
      return ['primary', 'info', 'error'].includes(value)
    }
  }
})
</script>