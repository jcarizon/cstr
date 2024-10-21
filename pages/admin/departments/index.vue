<template>
  <div class="flex-box admin-detail-page students-all">
    <div class="col student-all-content">
      <div class="flex-box items-h-center admin-title-container">
        <h1 class="col title title-1">
          Departments
        </h1>
        <div class="col ungrow align-right">
          <div class="flex-box gap-sm items-h-center">
            <div class="col">
              <CommonButton label="Add Department" icon="pluswhite" />
            </div>
            <div class="col others-button">
              <CommonButton label="" theme="bordered" icon="others" />
            </div>
          </div>
        </div>
      </div>
      <CommonTable 
        :thead="tableData.head" 
        :tbody="tableData.body"
        has-pagination
      >
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
      { value: 'Code' },
      { value: 'Name' },
      { value: 'No. of Students' },
      { value: 'Area' },
      { value: 'Status' },
      { value: 'Actions' },
    ],
    body: [
      {
        tdItems: [
          {
            id: 'code',
            value: '24-34054'
          }, 
          {
            id: 'name',
            value: 'Department of Mathematics'
          },
          {
            id: 'no-of-students',
            value: '80'
          }, 
          {
            id: 'area',
            value: 'Area name'
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
            id: 'code',
            value: '24-34054'
          }, 
          {
            id: 'name',
            value: 'Department of Mathematics'
          },
          {
            id: 'no-of-students',
            value: '80'
          }, 
          {
            id: 'area',
            value: 'Area name'
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
            id: 'code',
            value: '24-34054'
          }, 
          {
            id: 'name',
            value: 'Department of Mathematics'
          },
          {
            id: 'no-of-students',
            value: '80'
          }, 
          {
            id: 'area',
            value: 'Area name'
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
            id: 'code',
            value: '24-34054'
          }, 
          {
            id: 'name',
            value: 'Department of Mathematics'
          },
          {
            id: 'no-of-students',
            value: '80'
          }, 
          {
            id: 'area',
            value: 'Area name'
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
            id: 'code',
            value: '24-34054'
          }, 
          {
            id: 'name',
            value: 'Department of Mathematics'
          },
          {
            id: 'no-of-students',
            value: '80'
          }, 
          {
            id: 'area',
            value: 'Area name'
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
            id: 'code',
            value: '24-34054'
          }, 
          {
            id: 'name',
            value: 'Department of Mathematics'
          },
          {
            id: 'no-of-students',
            value: '80'
          }, 
          {
            id: 'area',
            value: 'Area name'
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
            id: 'code',
            value: '24-34054'
          }, 
          {
            id: 'name',
            value: 'Department of Mathematics'
          },
          {
            id: 'no-of-students',
            value: '80'
          }, 
          {
            id: 'area',
            value: 'Area name'
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
            id: 'code',
            value: '24-34054'
          }, 
          {
            id: 'name',
            value: 'Department of Mathematics'
          },
          {
            id: 'no-of-students',
            value: '80'
          }, 
          {
            id: 'area',
            value: 'Area name'
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