<template>
  <header class="header-menu">
    <div class="flex-box gap-sm items-h-center">
      <div class="col ungrow header-buttons">
        <CommonButton label="" theme="icon" icon="menu" />
      </div>
      <div class="col header-search">
        <CommonInput is-search-iput placeholder="Search name, email or student no..." />
      </div>
      <div class="col ungrow header-right">
        <div class="flex-box gap-sm">
          <div class="col header-add-button">
            <CommonButton 
              label="Add New" 
              theme="bordered" 
              icon="plusprimary" 
              @onClick="handleDropActive($event)"
            />
            <ul v-if="headerDropActive" class="flex-box gap-md dir-column header-dropdown">
              <li class="col header-drop-item">
                <div class="flex-box gap-sm">
                  <div class="col ungrow">
                    <IconsStudent />
                  </div>
                  <em class="col">
                    Add Student
                  </em>
                </div>
              </li>
              <li class="col header-drop-item">
                <div class="flex-box gap-sm">
                  <div class="col ungrow">
                    <IconsDepartment/>
                  </div>
                  <em class="col">
                    Add Department
                  </em>
                </div>
              </li>
              <li class="col header-drop-item">
                <div class="flex-box gap-sm">
                  <div class="col ungrow">
                    <IconsEmployee />
                  </div>
                  <em class="col">
                    Add Employee
                  </em>
                </div>
              </li>
              <li class="col header-drop-item">
                <div class="flex-box gap-sm">
                  <div class="col ungrow">
                    <IconsPayable/>
                  </div>
                  <em class="col">
                    Add Payable
                  </em>
                </div>
              </li>
              <li class="col header-drop-item">
                <div class="flex-box gap-sm">
                  <div class="col ungrow">
                    <IconsCollege />
                  </div>
                  <em class="col">
                    Add College
                  </em>
                </div>
              </li>
            </ul>
          </div>
          <div class="col header-buttons">
            <CommonButton label="" theme="icon" icon="notification" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import '~/assets/scss/modules/header.scss'

  const headerDropActive = ref(false)

  const handleDropActive = (event: any) => {
    event.preventDefault()
    headerDropActive.value = !headerDropActive.value
    console.log(headerDropActive.value)
  }

  watch(headerDropActive, value => {
    return headerDropActive.value
  }, {deep: true, immediate: true})
</script>