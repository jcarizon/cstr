<template>
  <div class="common-table">
    <div class="flex-box gap-sm items-h-center table-filter-form" v-if="props.hasSearchFilter">
      <div class="col ungrow table-filter-button">
        <CommonButton 
          label="Filter" 
          theme="bordered" 
          icon="filter"
        />
      </div>
      <div class="col ungrow table-search-input">
        <CommonInput is-search-iput placeholder="Search name, id or email address..." />
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <td v-for="(item, index) in props.thead" :key="index">
            {{ item.value }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(trItem, id) in paginatedItems" :key="id">
          <td v-for="(item, index) in trItem.tdItems" :key="index">
            <template v-if="typeof item.value === 'object'">
              <!-- if there are other formats for td create another v-else-if below -->
              <template  v-if="item.value.type === 'person'">
                <div class="flex-box gap-sm items-h-center">
                  <img class="col ungrow" :src="item.value.pic" alt="Profile Picture" />
                  <div class="col flex-box dir-column">
                    <div class="col">{{ item.value.name }}</div>
                    <div class="col size-12px">{{ item.value.email }}</div>
                  </div>
                </div>
              </template>
              <template v-else-if="item.value.type === 'badge'">
                <div class="td-badge">
                  <CommonBadge :label="item.value.text" :theme="item.value.theme" />
                </div>
              </template>
              <template v-else-if="item.value.type === 'actions'">
                <div class="table-actions">
                  <slot />
                  <!-- copy this code below and paste this in the common-table slot -->
                  <!-- <div class="flex-box item-h-center gap-sm">
                    <div class="col ungrow">
                      <CommonButton label="" theme="icon" icon="edit" />
                    </div>
                    <div class="col ungrow">
                      <CommonButton label="" theme="icon" icon="view" />
                    </div>
                    <div class="col ungrow">
                      <CommonButton label="" theme="icon" icon="delete" />
                    </div>
                  </div> -->
                </div>
              </template>
            </template>
            <template v-else>
              {{ item.value }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
    <template v-if="hasPagination">
      <CommonPagination 
        :totalItems="props.tbody.length" 
        :currentPage="currentPage" 
        :itemsPerPage="props.itemsPerPage" 
        @page-changed="onPageChanged" 
      />
    </template>
  </div>
</template>

<script setup lang="ts">
  import '~/assets/scss/base/common-table.scss'
  const props = defineProps({
    hasSearchFilter: {
      type: Boolean,
      default: true
    },
    itemsPerPage: {
      type: Number,
      default: 7
    },
    hasPagination: {
      type: Boolean,
      default: true
    },
    thead: {
      default: [
        { value: 'Head 1' },
        { value: 'Head 2' },
        { value: 'Head 3' },
        { value: 'Head 4' },
      ]
    },
    tbody: {
      default: [
        {
          tdItems: [
            // format for normal td item
            {
              id: 'head1',
              value: 'This is the head1'
            },
            // format for person with picture
            {
              id: 'head2',
              value: {
                type: 'person',
                pic: '/_nuxt/public/images/profile-dummy.png',
                name: 'Georgene Tambiga',
                email: 'phoenix_baker@gmail.com'
              }
            },
            // format for badge
            {
              id: 'head3',
              value: {
                type: 'badge',
                text: 'Badge',
                theme: 'info' // primary, info, error
              }
            },
            // format for actions
            {
              id: 'head4',
              value: {
                type: 'actions'
              }
            }
          ]
        }
      ]
    }
  })

  const currentPage = ref(1);

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * props.itemsPerPage;
    const sliced = props.tbody.slice(start, start + props.itemsPerPage);
    return sliced;
  });

  const onPageChanged = (page: number) => {
    currentPage.value = page; // Update the current page when the child component emits the event
  };
</script>