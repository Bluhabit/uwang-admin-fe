<script setup lang="ts">
import { ref } from 'vue';
import { useApi } from '../../common/useApi';

const api = useApi();
const users = ref<string[]>([]);
const isModalVisible = ref(false);

async function fetchData() {
    const response = await api.get<UserCredentialResponse[]>('uwang/dev/account/v1/admin/search-by-username');

    if (response.isSuccessful && response.data !== null) {
        users.value = response.data.map(user => user.username);
    } else {
        console.error('Failed to fetch user data');
    }
}

fetchData();

function openModal() {
    isModalVisible.value = true;
}

function closeModal() {
    isModalVisible.value = false;
}

</script>

<template>
    <div class="bg-separator h-screen">
        <div class="flex justify-between items-center p-4">
            <div>
                <h1 class="text-2xl font-bold">Manajemen akses</h1>
                <p class="text-gray-500">Tambah atau hapus akses setiap role</p>
            </div>
            <div>
                <button class="border-2 border-gray-300 p-2 rounded-lg hover:bg-gray-100">
                    <img src="image/bell.svg" alt="">
                </button>
            </div>
        </div>
        <div class="container mx-auto flex justify-between items-center">
            <p class="text-gray-500 text-sm">Tambah role Admin, Moderator, & Analyst hingga 5 orang</p>
            <button class="bg-blue-500 text-white font-bold rounded py-2 px-4" @click="openModal"> + Tambah
                Akses</button>
        </div>
        <DataTable />
        <ModalAccess :users="users" v-if="isModalVisible" @close="closeModal" />
    </div>
</template>
