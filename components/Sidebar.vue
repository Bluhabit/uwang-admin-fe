<template>
  <div class="fixed inset-y-0 left-0 w-64 bg-white shadow-md h-screen overflow-y-auto flex flex-col">
    <div class="flex items-center justify-center py-4 mb-6 mt-4">
      <img src="image/Logo.webp" alt="Logo">
    </div>
    <nav class="flex-1">
      <ul class="space-y-2">
        <li
          v-for="item in items"
          :key="item.text"
          class="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-black"
        >
          <img :src="item.icon" class="h-6 w-6 mr-2" alt="Icon">
          <a :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
    <div class="mt-auto flex flex-col items-center pb-4">
      <div class="flex items-center">
        <img v-if="user.avatar" :src="user.avatar" class="w-16 h-16 rounded-full object-cover mr-2" alt="Profile">
        <div class="text-black font-bold text-xl">{{ user.name }}</div>
      </div>
      <button click="logout" class="mt-2 text-gray-500 hover:text-black">
        <img src="image/log-out.webp" class="h-6 w-6 mr-2" alt="Logout Icon">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Marquez Pazeyo",
        avatar: "https://i.pravatar.cc/150?u=uwang@example.com",
      },
      items: [
        { text: "Dashboard", href: "/", icon: "image/home.webp" },
        { text: "Manajemen User", href: "/users", icon: "image/users.webp" },
        { text: "Manajemen Akses", href: "/access", icon: "image/settings.webp" },
      ],
    };
  },
  methods: {
    logout() {
    }
  }
};
</script>
