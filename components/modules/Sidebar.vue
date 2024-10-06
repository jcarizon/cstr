<template>
  <div class="sidebar-menu">
    <figure class="flex-box gap-md items-h-center main-logo">
      <img class="col ungrow" src="../../public/images/admin-logo.png" alt="CSTR - IS">
      <figcaption class="col title title-1">CSTR - IS</figcaption>
    </figure>
    <ul class="flex-box dir-column sidebar-items custom-scrollbar">
      <li 
        v-for="(item, index) in siderbarItems" 
        class="col ungrow" 
        :key="index"
        @click="item.click()"
      >
        <div :class="['flex-box items-h-center gap-sm item-menu', { 'active-menu' : routeName === item.name}]">
          <div class="col ungrow sidebar-icon">
            <component v-if="(routeName?.includes(item.name) && !isSubClicked) || routeName === item.name" :is="item.iconActive" />
            <component v-else-if="routeName?.includes(item.name) && isSubClicked" :is="item.icon" />
            <component v-else :is="item.icon" />
          </div>
          <div class="col sidebar-label">
            {{ item.label }}
          </div>
          <div v-if="item.sub" class="col ungrow sidebar-arrow">
            <IconsMenuArrowWhite v-if="(routeName?.includes(item.name) && !isSubClicked) || routeName === item.name" />
            <IconsMenuArrow v-else-if="routeName?.includes(item.name) && isSubClicked" />
            <IconsMenuArrow v-else />
          </div>
        </div>
        <template v-if="item.sub?.length && routeName?.includes(item.name)">
          <ul class="flex-box dir-column sub-sidebar-items">
            <li 
              v-for="(sub, subIndex) in item.sub" 
              :class="['col ungrow', { 'active-menu' : routeName === sub.name}]" 
              :key="subIndex"
              @click="sub.click()"
            >
              <div :class="['flex-box items-h-center gap-sm item-menu', { 'active-menu' : routeName === sub.name}]">
                <div class="col ungrow sidebar-icon">
                  <component :is="sub.icon" />
                </div>
                <div class="col sidebar-label">
                  {{ sub.label }}
                </div>
              </div>
            </li>
          </ul>
        </template>
      </li>
    </ul>
    <figure class="flex-box gap-sm items-h-center profile-menu">
      <img class="col ungrow" src="../../public/images/profile-dummy.png" alt="Profile Picture">
      <figcaption class="col flex-box dir-column">
        <em class="col ungrow weight-500 size-16px">Georgene Quilaton</em>
        <span class="col ungrow">admin@cstr.edu.ph</span>
      </figcaption>
      <div class="col ungrow profile-menu-icon">
        <IconsProfileMenu @click="handleShowProfileMenu" />
      </div>
      <ul v-if="showProfileMenu" class="flex-box dir-column profile-menu-items sidebar-items  custom-scrollbar">
        <li 
          v-for="(item, index) in profileMenuItems" 
          class="col ungrow" 
          :key="index"
          @click="item.click()"
        >
          <div :class="['flex-box items-h-center gap-sm item-menu', { 'active-menu' : routeName === item.name}]">
            <div class="col ungrow sidebar-icon">
              <component :is="item.icon" />
            </div>
            <div class="col sidebar-label">
              {{ item.label }}
            </div>
          </div>
        </li>
      </ul>
    </figure>
  </div>
</template>

<script setup lang="ts">
  import '~/assets/scss/modules/sidebar.scss'

  const { currentRoute } = useRouter();
  const routeName: any = ref(currentRoute.value.name);
  const isSubClicked = ref(true)
  const showProfileMenu = ref(false)
  const siderbarItems = [
    {
      icon: resolveComponent('IconsDashboard'),
      iconActive: resolveComponent('IconsDashboardWhite'),
      label: 'Dashboard',
      name: 'admin-dashboard',
      click: () => navigateTo('/admin/dashboard')
    },
    {
      icon: resolveComponent('IconsStudentMd'),
      iconActive: resolveComponent('IconsStudentMdWhite'),
      label: 'Students',
      name: 'admin-students',
      click: () => navigateTo('/admin/students/all'),
      sub: [
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'All',
          name: 'admin-students-all',
          click: () => {
            navigateTo('/admin/students/all'),
            isSubClicked.value = true
          }
        },
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'High School',
          name: 'admin-students-high-school',
          click: () => navigateTo('/admin/students')
        },
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'College',
          name: 'admin-students-college',
          click: () => navigateTo('/admin/students')
        },
      ],
    },
    {
      icon: resolveComponent('IconsDepartmentMd'),
      label: 'Departments',
      name: 'admin-departments',
      click: () => null
    },
    {
      icon: resolveComponent('IconsHumanResource'),
      label: 'Human Resource',
      name: 'admin-human-resource',
      click: () => null,
      sub: [
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'All',
          name: 'admin-human-resource-all',
          click: () => {
            navigateTo('/admin/students/all')
            isSubClicked.value = true
          }
        },
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'Faculty',
          name: 'admin-human-resource-faculty',
          click: () => navigateTo('/admin/students')
        },
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'Staff',
          name: 'admin-human-resource-stagg',
          click: () => navigateTo('/admin/students')
        },
      ],
    },
    {
      icon: resolveComponent('IconsStudentDevelopment'),
      label: 'Student Development',
      click: () => null
    },
    {
      icon: resolveComponent('IconsAccounting'),
      label: 'Accounting',
      click: () => null,
      sub: [
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'Fees',
          name: 'admin-accounting-fees',
          click: () => {
            navigateTo('/admin/students/all')
            isSubClicked.value = true
          }
        },
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'Payments',
          name: 'admin-accounting-payments',
          click: () => navigateTo('/admin/students')
        }
      ],
    },
    {
      icon: resolveComponent('IconsResources'),
      label: 'Resources',
      click: () => null,
      sub: [
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'College',
          name: 'admin-resources-college',
          click: () => {
            navigateTo('/admin/students/all')
            isSubClicked.value = true
          }
        },
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'Area',
          name: 'admin-resources-area',
          click: () => navigateTo('/admin/students')
        },
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'Curriculum Program',
          name: 'admin-resources-curriculum-program',
          click: () => navigateTo('/admin/students')
        },
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'Subjects',
          name: 'admin-resources-subjects',
          click: () => {
            navigateTo('/admin/students/all')
            isSubClicked.value = true
          }
        },
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'Buildings',
          name: 'admin-resources-buildings',
          click: () => navigateTo('/admin/students')
        },
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'Rooms',
          name: 'admin-resources-rooms',
          click: () => navigateTo('/admin/students')
        },
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'Term',
          name: 'admin-account-term',
          click: () => {
            navigateTo('/admin/students/all')
            isSubClicked.value = true
          }
        },
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'Nationality',
          name: 'admin-resources-nationality',
          click: () => navigateTo('/admin/students')
        },
        {
          icon: resolveComponent('IconsSubDot'),
          label: 'Religion',
          name: 'admin-accounting-religion',
          click: () => navigateTo('/admin/students')
        }
      ],
    },
    {
      icon: resolveComponent('IconsEvents'),
      label: 'Events',
      click: () => null
    },
    {
      icon: resolveComponent('IconsHolidays'),
      label: 'Holidays',
      click: () => null
    },
    {
      icon: resolveComponent('IconsFiles'),
      label: 'Files',
      click: () => null
    },
    {
      icon: resolveComponent('IconsSettings'),
      label: 'Settings',
      click: () => null
    }
  ]
  const profileMenuItems = [
    {
      icon: resolveComponent('IconsProfile'),
      iconActive: resolveComponent('IconsDashboardWhite'),
      label: 'Profile',
      name: 'admin-profile',
      click: () => navigateTo('/admin/dashboard')
    },
    {
      icon: resolveComponent('IconsLogout'),
      iconActive: resolveComponent('IconsDashboardWhite'),
      label: 'Logout',
      name: 'admin-logout',
      click: () => navigateTo('/admin/dashboard')
    },
  ];

  const handleShowProfileMenu = () => {
    showProfileMenu.value = !showProfileMenu.value
  }

  watch(currentRoute, value => {
    routeName.value = currentRoute.value.name
  }, {deep: true, immediate: true})
</script>