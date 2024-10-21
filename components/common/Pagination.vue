<template>
  <nav class="flex-box items-h-center pagination">
    <div class="col ungrow pagination-button">
      <CommonButton 
        label="Previous" 
        theme="bordered" 
        icon="arrow-left"
        :disabled="currentPage === 1"
        @on-click="goToPage(currentPage - 1)"
      />
    </div>
    <ul class="col text-center flex-box items-v-center">
      <li
        v-for="page in pages" :key="page" 
        :class="['col ungrow page-item', { active: page === currentPage }]" 
        @click="goToPage(page)"
      >
        {{ page }}
      </li>
    </ul>
    <div class="col ungrow pagination-button">
      <CommonButton 
        label="Next" 
        theme="bordered" 
        icon="arrow-right"
        :icon-left="false"
        :disabled="currentPage === totalPages"
        @on-click="goToPage(currentPage + 1)"
      />
    </div>
  </nav>
</template>

<script>
import '~/assets/scss/base/common-pagination.scss'
export default {
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 6
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  emits: ['page-changed'],
  setup(props, { emit }) {
    const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

    const pages = computed(() => {
      const pageArray = [];
      for (let i = 1; i <= totalPages.value; i++) {
        pageArray.push(i);
      }
      return pageArray;
    });

    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        emit('page-changed', page); // Emit event to notify the parent about the page change
      }
    };

    return {
      totalPages,
      pages,
      goToPage
    };
  }
};
</script>