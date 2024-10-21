<template>
  <div class="dashboard admin-detail-page flex-box">
    <div class="col dashboard-content">
      <div class="flex-box items-h-center admin-title-container">
        <h1 class="col title title-1">
          Dashboard
        </h1>
        <div class="col ungrow dashboard-select-wrapper">
          <CommonSelect :options="selectOptions"/>
        </div>
      </div>
      <div class="flex-box gap-md dashboard-stats">
        <div 
          class="col flex-box gap-md stats-item" 
          v-for="(item, index) in dashboardStats"
        >
          <div class="col ungrow">
            <component :is="item.icon" />
          </div>
          <div class="col flex-box dir-column">
            <h2 class="col title title-2">{{ item.count }}</h2>
            <span class="col size-14px">{{ item.item }}</span>
          </div>
          <NuxtLink to="/admin/students" class="stats-link">
            <IconsOptions />
          </NuxtLink>
        </div>
      </div>
      <div class="dashboard-table">
        <div class="flex-box items-h-center dashboard-table-title">
          <h3 class="col title title-3">Recent Enrollment</h3>
          <NuxtLink to="/admin/dashboard" class="col ungrow anchor">View All</NuxtLink>
        </div>
        <CommonTable :has-search-filter="false" :thead="tableData.head" :tbody="tableData.body" :has-pagination="false">
          <div class="flex-box item-h-center gap-sm">
            <div class="col ungrow">
              <CommonButton label="" theme="icon" icon="edit" />
            </div>
            <div class="col ungrow">
              <CommonButton label="" theme="icon" icon="view" />
            </div>
          </div>
        </CommonTable>
      </div>
    </div>
    <ModulesRecentActivities />
  </div>
</template>

<script setup lang="ts">
  import '~/assets/scss/modules/dashboard.scss'
  definePageMeta({
    layout: 'admin'
  })

  const selectOptions = [
    { text: 'S.Y. 2021 - 2022', value: 'S.Y. 2021 - 2022' },
    { text: 'S.Y. 2022 - 2023', value: 'S.Y. 2022 - 2023' },
    { text: 'S.Y. 2024 - 2025', value: 'S.Y. 2024 - 2025' }
  ]

  const dashboardStats = [
    {
      icon: resolveComponent('IconsStudentsBg'),
      count: '320',
      item: 'Students'
    },
    {
      icon: resolveComponent('IconsEmployeesBg'),
      count: '45',
      item: 'Employees'
    },
    {
      icon: resolveComponent('IconsEventsBg'),
      count: '12',
      item: 'Upcoming Events'
    },
    {
      icon: resolveComponent('IconsTeachersBg'),
      count: '25',
      item: 'Teachers'
    },
  ]

  const tableData = {
    head: [
      { value: 'Student No.' },
      { value: 'Student' },
      { value: 'Year Level' },
      { value: 'Status' },
      { value: 'Admission Date' },
      { value: 'Actions' },
    ],
    body: [
      {
        tdItems: [
          {
            id: 'student-no',
            value: '24-34054'
          }, 
          {
            id: 'student',
            value: {
              type: 'person',
              pic: '/images/profile-dummy.png',
              name: 'Georgene Tambiga',
              email: 'phoenix_baker@gmail.com'
            }
          },
          {
            id: 'year-level',
            value: '1st year'
          }, 
          {
            id: 'status',
              value: {
                type: 'badge',
                text: 'Enrolled',
                theme: 'info'
              }
          },
          {
            id: 'admission-date',
            value: '2024-05-05 08:24 AM'
          },
          {
            id: 'actions',
            value: {
              type: 'actions'
            }
          },
        ]
      },
      {
        tdItems: [
          {
            id: 'student-no',
            value: '24-34054'
          }, 
          {
            id: 'student',
            value: {
              type: 'person',
              pic: '/images/profile-dummy.png',
              name: 'Georgene Tambiga',
              email: 'phoenix_baker@gmail.com'
            }
          },
          {
            id: 'year-level',
            value: '1st year'
          }, 
          {
            id: 'status',
              value: {
                type: 'badge',
                text: 'Enrolled',
                theme: 'info'
              }
          },
          {
            id: 'admission-date',
            value: '2024-05-05 08:24 AM'
          },
          {
            id: 'actions',
            value: {
              type: 'actions'
            }
          },
        ]
      },
      {
        tdItems: [
          {
            id: 'student-no',
            value: '24-34054'
          }, 
          {
            id: 'student',
            value: {
              type: 'person',
              pic: '/images/profile-dummy.png',
              name: 'Georgene Tambiga',
              email: 'phoenix_baker@gmail.com'
            }
          },
          {
            id: 'year-level',
            value: '1st year'
          }, 
          {
            id: 'status',
              value: {
                type: 'badge',
                text: 'Enrolled',
                theme: 'info'
              }
          },
          {
            id: 'admission-date',
            value: '2024-05-05 08:24 AM'
          },
          {
            id: 'actions',
            value: {
              type: 'actions'
            }
          },
        ]
      },
      {
        tdItems: [
          {
            id: 'student-no',
            value: '24-34054'
          }, 
          {
            id: 'student',
            value: {
              type: 'person',
              pic: '/images/profile-dummy.png',
              name: 'Georgene Tambiga',
              email: 'phoenix_baker@gmail.com'
            }
          },
          {
            id: 'year-level',
            value: '1st year'
          }, 
          {
            id: 'status',
              value: {
                type: 'badge',
                text: 'Enrolled',
                theme: 'info'
              }
          },
          {
            id: 'admission-date',
            value: '2024-05-05 08:24 AM'
          },
          {
            id: 'actions',
            value: {
              type: 'actions'
            }
          },
        ]
      },
      {
        tdItems: [
          {
            id: 'student-no',
            value: '24-34054'
          }, 
          {
            id: 'student',
            value: {
              type: 'person',
              pic: '/images/profile-dummy.png',
              name: 'Georgene Tambiga',
              email: 'phoenix_baker@gmail.com'
            }
          },
          {
            id: 'year-level',
            value: '1st year'
          }, 
          {
            id: 'status',
              value: {
                type: 'badge',
                text: 'Enrolled',
                theme: 'info'
              }
          },
          {
            id: 'admission-date',
            value: '2024-05-05 08:24 AM'
          },
          {
            id: 'actions',
            value: {
              type: 'actions'
            }
          },
        ]
      },
      {
        tdItems: [
          {
            id: 'student-no',
            value: '24-34054'
          }, 
          {
            id: 'student',
            value: {
              type: 'person',
              pic: '/images/profile-dummy.png',
              name: 'Georgene Tambiga',
              email: 'phoenix_baker@gmail.com'
            }
          },
          {
            id: 'year-level',
            value: '1st year'
          }, 
          {
            id: 'status',
              value: {
                type: 'badge',
                text: 'Enrolled',
                theme: 'info'
              }
          },
          {
            id: 'admission-date',
            value: '2024-05-05 08:24 AM'
          },
          {
            id: 'actions',
            value: {
              type: 'actions'
            }
          },
        ]
      },
    ]
  }
</script>