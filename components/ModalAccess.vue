<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['close']);

const users = ['triandamai', 'fahmiazzuhri', 'fikrimaulana'];

let userInput = '';

function handleClose() {
    emit('close');
};
function filterUsers() {
    return users.filter(user => user.toLowerCase().includes(userInput.toLowerCase()));
};
function selectUser(user: string) {
    userInput = user;
};
</script>

<template>
    <div class="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full p-6">

            <div class="flex flex-col">
                <div class="flex flex-row justify-between mb-1">
                    <p class="text-xl font-bold">Tambah Akses</p>
                    <button type="button" @click="handleClose"
                        class="bg-transparent absolute right-4 text-gray-900 text-xl hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent">
                        <img src="/image/close.svg" alt=""></button>
                </div>
                <div>
                    <p class="text-gray-500 mb-5">Isi data dibawah untuk menambahkan akses baru.</p>
                    <div class="flex flex-col">
                        <p class="text-md mb-1">Nama Pengguna</p>
                        <input type="text" placeholder="Masukkan nama pengguna disini"
                            class="border border-gray-500 p-2 mb-3 rounded-xl mb-5" v-model="userInput">

                        <div v-if="userInput !== ''" class="border border-gray-300 p-2 rounded-xl mb-3">
                            <ul>
                                <li v-for="user in filterUsers()" @click="selectUser(user)" :key="user">{{ user }}</li>
                            </ul>
                        </div>
                        <p class="text-md mb-1">Pilih Role</p>
                        <select class="border border-gray-500 p-2 rounded-xl text-gray-500">
                            <option disabled selected>Pilih role yang diinginkan</option>
                            <option value="admin">Admin</option>
                            <option value="superadmin">Super Admin</option>
                            <option value="analyst">Analyst</option>
                        </select>
                        <div class="flex flex-row items-center justify-center mt-5">
                            <button
                                class="border-2 border-blue-500 text-blue-500 font-bold rounded-lg w-full py-2 px-4 mr-2">Batal</button>
                            <button
                                class="border-2 border-blue-500 bg-blue-500 text-white font-bold rounded-lg w-full py-2 px-4 ml-2">Simpan</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
