<template>
  <div class="common-select">
    <label class="flex-box dir-column">
      <em v-if="props.label" class="select--label">{{ props.label }}</em>
      <div class="select-div">
        <select class="col select--input">
          <option 
            v-for="(item, index) in props.options" 
            :key="index"
            :value="item.value"
          >
            {{ item.text }}
          </option>
        </select>
        <div class="select-arrow">
          <IconsMenuArrow />
        </div>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  options: {
    default: [
      { text: 'Please select', value: '' }
    ]
  }
})
</script>