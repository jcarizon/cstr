<template>
  <div class='flex-box login-container'>
    <div class="col login-background"></div>
    <div class="col login-content">
      <form class="login-form" action="#" onsubmit="onSubmit">
        <h1 class="title title-2">Login to your Account</h1>
        <CommonInput type="text" label="Username" placeholder="Please enter username" />
        <CommonInput type="password" label="Password" placeholder="Please enter password" />
        <CommonButton label="Login" type="submit" @click="onSubmit()" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import '~/assets/scss/modules/login.scss'

  const onSubmit = async () => {
    await navigateTo('/admin/dashboard')
  }
</script>