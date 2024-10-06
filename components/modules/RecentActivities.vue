<template>
  <aside class="col ungrow dashboard-recents custom-scrollbar">
    <div class="flex-box items-h-center">
      <h3 class="col title title-3">Recent Activities</h3>
      <NuxtLink to="/admin/dashboard" class="col ungrow anchor">View All</NuxtLink>
    </div>
    <div class="activities">
      <div 
        class="flex-box gap-md activity-item" 
        v-for="(item, index) in activities"
      >
        <div class="col act-pic">
          <img :src="item.pic" :alt="item.name">
        </div>
        <div class="col ungrow act-details">
          <div class="flex-box items-h-center act-item-head">
            <h4 class="col title title-4">{{ item.name }}</h4>
            <span class="col ungrow size-12px">{{ item.time }}</span>
          </div>
          <p class="size-14px">
            {{ item.activity }}
            <em class="weight-600" v-if="item.file">{{ item.file }}</em>
          </p>
          <p class="act-message size-14px">{{ item.message }}</p>
          <figure class="flex-box gap-sm" v-if="item.file">
            <div class="col ungrow">
              <IconsPdf />
            </div>
            <figcaption class="col flex-box dir-column">
              <span class="col size-14px">{{ item.file }}</span>
              <span class="col size-14px">{{ item.fileSize }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">

const activities = [
  {
    pic: '/_nuxt/public/images/profile-dummy.png',
    name: 'Georgene Tambiga',
    time: 'Just Now',
    activity: 'Added a file',
    file: 'leave_form_2024.pdf',
    fileSize: '720kb',
    message: 'Lorem ipsum dolor sit amet consectetur. Amet fermentum fames dui risus rhoncus non ut sed. In risus',
  },
  {
    pic: '/_nuxt/public/images/profile-dummy.png',
    name: 'Ryan Gosling',
    time: '1 min ago',
    activity: 'Made an evaluation',
    file: '',
    message: 'Lorem ipsum dolor sit amet consectetur. Amet fermentum fames dui risus rhoncus non ut sed. In risus',
  },
  {
    pic: '/_nuxt/public/images/profile-dummy.png',
    name: 'Georgene Tambiga',
    time: '30 mins ago',
    activity: 'Added a file',
    file: 'leave_form_2024.pdf',
    fileSize: '720kb',
    message: 'Lorem ipsum dolor sit amet consectetur. Amet fermentum fames dui risus rhoncus non ut sed. In risus',
  },
  {
    pic: '/_nuxt/public/images/profile-dummy.png',
    name: 'Ryan Gosling',
    time: '1 hour ago',
    activity: 'Made an evaluation',
    file: '',
    message: 'Lorem ipsum dolor sit amet consectetur. Amet fermentum fames dui risus rhoncus non ut sed. In risus',
  },
  {
    pic: '/_nuxt/public/images/profile-dummy.png',
    name: 'Ryan Gosling',
    time: '2 hours ago',
    activity: 'Made an evaluation',
    file: '',
    message: 'Lorem ipsum dolor sit amet consectetur. Amet fermentum fames dui risus rhoncus non ut sed. In risus',
  },
]
</script>