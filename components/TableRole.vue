<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '../type/user';
const users = ref<User[]>([
    { name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Inactive' },
]);
</script>

<template>
    <div class="container mx-auto bg-white rounded-lg p-5">
        <div class="flex items-center mb-6 justify-between">
            <div class="flex items-center">
                <img src="../public/image/info.svg" alt="">
                <p class="text-gray-500 ml-2">Tambah role Admin, Moderator, & Analyst hingga 5 orang</p>
            </div>
            <button
                class="bg-state-primary-main hover:bg-state-primary-hover text-white items-center font-bold py-2 px-4 rounded-[15px]">
                <span class="text-xl">+</span>
                Tambah Akses</button>
        </div>
        <div class="flex justify-between items-center">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr class="text-left">
                        <th class="px-6 py-3">No</th>
                        <th class="px-6 py-3">Nama</th>
                        <th class="px-6 py-3">Email</th>
                        <th class="px-6 py-3">Role</th>
                        <th class="px-6 py-3">Status</th>
                        <th class="px-6 py-3">Aksi</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="(user, index) in users" :key="index">
                        <td class="px-6 py-4">{{ index + 1 }}</td>
                        <td class="px-6 py-4">{{ user.name }}</td>
                        <td class="px-6 py-4">{{ user.email }}</td>
                        <td class="px-6 py-4">{{ user.role }}</td>
                        <td class="px-6 py-4">
                            <span v-if="user.status === 'Active'"
                                class="bg-green-100 px-2 py-1 rounded-full text-green-800">{{ user.status }}</span>
                            <span v-else class="bg-red-100 px-2 py-1 rounded-full text-red-800">{{ user.status }}</span>
                        </td>
                        <td class="px-6 py-4">
                            <img src="../public/image/edit.svg" alt="">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>