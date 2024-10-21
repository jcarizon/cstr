<template>
  <div :class="['common-button', props.theme, { 'is-disabled' : props.disabled }]">
    <div :class="['flex-box items-h-center', { 'pad-left' : !props.iconLeft }]">
      <template v-if="props.iconLeft">
        <div v-if="props.icon" class="col ungrow button-icon" @click="handleClick">
          <component :is="buttonIcon" />
        </div>
      </template>
      <button 
        v-if="props.label" 
        :class="['col button', props.icon.length ? '' : 'has-icon']" 
        :type="props.type" 
        :disabled="props.disabled"
        @click="handleClick"
      >
        {{props.label}}
      </button>
      <template v-if="!props.iconLeft">
        <div v-if="props.icon" class="col ungrow button-icon" @click="handleClick">
          <component :is="buttonIcon" />
        </div>
      </template>
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
    icon: {
      type: String, // icons-${icon name}
      default: ''
    },
    iconLeft: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  })

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
      case 'arrow-right':
        return resolveComponent("IconsArrowRight")
      case 'arrow-left':
        return resolveComponent("IconsArrowLeft")
      default:
        return ''
    }
  })

  // methods
  // Define emits
  const emit = defineEmits(['onClick']);

  // Click handler
  const handleClick = (event: any) => {
    event.preventDefault()
    emit('onClick', event);
  };
</script>