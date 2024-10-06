<template>
  <div :class="['common-button', props.theme]">
    <div class="flex-box items-h-center">
      <div v-if="props.icon" class="col ungrow button-icon">
        <component :is="buttonIcon" />
      </div>
      <button v-if="props.label" :class="['col button', props.icon.length ? '' : 'has-icon']" :type="props.type" @click="clickFn($event)">{{props.label}}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import '~/assets/scss/base/common-button.scss'

  const props = defineProps({
    label: {
      type: String,
      default: 'Button'
    },
    theme: {
      type: String,
      default: 'primary',
      validator(value: string) {
        return ['primary', 'cancel', 'delete', 'bordered', 'icon'].includes(value)
      }
    },
    type: {
      type: String as () => "submit" | "button",
      default: 'button'
    },
    click: {
      type: Function,
    },
    icon: {
      type: String, // icons-${icon name}
      default: ''
    }
  })

  const clickFn = (event: any) => {
    event?.preventDefault()
    props.click
  }

  const buttonIcon = computed(() => {
    switch (props.icon) {
      case 'menu':
        return resolveComponent("IconsMenu")
      case 'search':
        return resolveComponent("IconsSearch")
      case 'plusprimary':
        return resolveComponent("IconsPlusprimary")
      case 'pluswhite':
        return resolveComponent("IconsPlusWhite")
      case 'notification':
        return resolveComponent("IconsNotification")
      case 'filter':
        return resolveComponent("IconsFilter")
      case 'edit':
        return resolveComponent("IconsEdit")
      case 'view':
        return resolveComponent("IconsView")
      case 'delete':
        return resolveComponent("IconsDelete")
      case 'others':
        return resolveComponent("IconsOthers")
      default:
        return ''
    }
  })
</script>