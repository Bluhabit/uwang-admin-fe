<script lang="ts">
export default {
  data() {
    return {
      isSidebarOpen: true,
      user: {
        name: "Marquez Pazeyo",
        avatar: "https://i.pravatar.cc/150?u=uwang@example.com",
        role: "Super Admin",
      },
      items: [
        { text: "Dashboard", href: "/", icon: "image/home.webp" },
        {
          text: "Manajemen User", 
          icon: "image/users.webp",
          submenu: [
            { text: "Daftar Pengguna", href: "/users/list" },
            { text: "Log Aktivitas Pengguna", href: "/users/logs" }
          ],
          show: false,
        },
        { text: "Manajemen Akses", href: "/access", icon: "image/settings.webp" },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    logout() {
      // Implementasi logout
    },
    toggleDropdown(itemText: string) {
      const item = this.items.find((i: any) => i.text === itemText);
      if (item) {
        item.show = !item.show;
      }
    },
  },
};
</script>

<template>
  <div :class="{'w-64': isSidebarOpen, 'w-12': !isSidebarOpen}" class="fixed inset-y-0 left-0 bg-white shadow-md h-screen overflow-y-auto flex flex-col transition-width duration-300">
    <div class="flex items-center justify-center py-4 mb-8 mt-4 px-4 relative">
      <img src="image/Logo.webp" alt="Logo" :class="{'w-30': isSidebarOpen, 'hidden': !isSidebarOpen, 'transition-all duration-300': true}" class="transition-all duration-300 h-auto">
      <button @click="toggleSidebar" class="absolute right-4 text-black">
        <span v-if="isSidebarOpen" class="font-bold text-lg">&#x3c;</span>
        <span v-else class="font-bold text-lg">&#x3e;</span>
      </button>
    </div>

    <nav class="flex-1">
      <ul class="space-y-2">
        <li v-for="item in items" :key="item.text" class="group">
          <div
            class="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-black cursor-pointer"
            @click="item.submenu ? toggleDropdown(item.text) : null"
          >
            <a :href="item.href" class="flex items-center" v-if="!item.submenu">
              <img :src="item.icon" class="h-6 w-6 mr-2" alt="Icon">
              <span>{{ item.text }}</span>
            </a>
            <div v-else class="flex items-center justify-between w-full">
              <div class="flex items-center">
                <img :src="item.icon" class="h-6 w-6 mr-2" alt="Icon">
                <span>{{ item.text }}</span>
              </div>
              <span v-if="item.submenu" class="transition-transform transform" :class="{'rotate-180': item.show}">
                &#9662;
              </span>
            </div>
          </div>
          <ul v-if="item.submenu && item.show" class="pl-8">
            <li v-for="subItem in item.submenu" :key="subItem.text" class="px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-black">
              <a :href="subItem.href">{{ subItem.text }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="mt-auto flex justify-center pb-4">
      <div v-if="isSidebarOpen" class="flex items-center space-x-4">
        <img v-if="user.avatar" :src="user.avatar" class="w-10 h-10 rounded-full object-cover" alt="Profile">
        <div>
          <div class="text-black font-bold text-sm">{{ user.name }}</div>
          <div class="text-gray-600 text-xs">{{ user.role }}</div>
        </div>
      </div>
      <button @click="logout" class="ml-3">
        <img src="image/log-out.webp" class="h-6 w-6" alt="Logout Icon">
      </button>
    </div>
  </div>
</template>
