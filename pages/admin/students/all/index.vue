<template>
  <div class="flex-box admin-detail-page students-all">
    <div class="col student-all-content">
      <div class="flex-box items-h-center admin-title-container">
        <h1 class="col title title-1">
          All Students
        </h1>
        <div class="col ungrow align-right">
          <div class="flex-box gap-sm items-h-center">
            <div class="col">
              <CommonButton label="Add Student" icon="pluswhite" />
            </div>
            <div class="col others-button">
              <CommonButton label="" theme="bordered" icon="others" />
            </div>
          </div>
        </div>
      </div>
      <CommonTable :thead="tableData.head" :tbody="tableData.body">
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
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'admin'
  })

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
        items: [
          {
            id: 'student-no',
            value: '24-34054'
          }, 
          {
            id: 'student',
            value: {
              type: 'person',
              pic: '/_nuxt/public/images/profile-dummy.png',
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
        items: [
          {
            id: 'student-no',
            value: '24-34054'
          }, 
          {
            id: 'student',
            value: {
              type: 'person',
              pic: '/_nuxt/public/images/profile-dummy.png',
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
        items: [
          {
            id: 'student-no',
            value: '24-34054'
          }, 
          {
            id: 'student',
            value: {
              type: 'person',
              pic: '/_nuxt/public/images/profile-dummy.png',
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
        items: [
          {
            id: 'student-no',
            value: '24-34054'
          }, 
          {
            id: 'student',
            value: {
              type: 'person',
              pic: '/_nuxt/public/images/profile-dummy.png',
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
        items: [
          {
            id: 'student-no',
            value: '24-34054'
          }, 
          {
            id: 'student',
            value: {
              type: 'person',
              pic: '/_nuxt/public/images/profile-dummy.png',
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
        items: [
          {
            id: 'student-no',
            value: '24-34054'
          }, 
          {
            id: 'student',
            value: {
              type: 'person',
              pic: '/_nuxt/public/images/profile-dummy.png',
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