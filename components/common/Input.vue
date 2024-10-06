<template>
  <div class="common-input">
    <template v-if="isSearchIput">
      <form class="flex-box dir-column search-form">
        <div class="col search-button">
          <CommonButton icon="search" label="" theme="bordered"/>
        </div>
        <input class="col input--text" :type="props.type" :placeholder="props.placeholder" />
      </form>
    </template>
    <template v-else>
      <label class="flex-box dir-column">
        <em v-if="props.label" class="input--label">{{ props.label }}</em>
        <input class="input--text" :type="props.type" :placeholder="props.placeholder" />
      </label>
    </template>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Please input'
    },
    isSearchIput: {
      type: Boolean,
      default: false
    }
  })
</script>