<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            birthDate: new Date('1990-01-01'),
            registerDate: new Date('2023-02-23'),
            followerCount: 1000,
            postCount: 500,
            country: 'Indonesia',
            lastActive: '2024-02-23',
        };
    },
    computed: {
        userName(): string {
            return 'Trian Damai';
        },
        userEmail(): string {
            return 'trian@gmail.com';
        }
    },
    methods: {
        formatDate(date: Date): string {
            return date.toLocaleDateString('id-ID');
        }
    }
});
</script>

<template>
    <div class="card p-6 rounded-lg bg-white shadow-md w-11/12 mx-auto mt-8">
        <h1 class="text-xl font-bold mb-8">Informasi Pengguna</h1>

        <div class="flex">
            <div class="flex">
                <div class="col">
                    <img src="image/user-photo.svg" alt="">
                </div>
                <div class="col ml-3">
                    <h1 class="font-bold text-xl mb-1">{{ userName }} <span class="text-gray-500">#21212</span></h1>
                    <p class="text-sm text-gray-500 mb-1">@{{ userName.toLowerCase() }}</p>
                    <p class="text-sm text-gray-500">{{ userEmail }}</p>
                </div>
            </div>
            <div class="flex ml-[auto]">
                <div class="col">
                    <p class="mt-5 text-gray-500">Tanggal lahir :</p>
                    <p class="text-gray-500">Tanggal daftar :</p>
                </div>
                <div class="col ml-3">
                    <p class="mt-5">{{ formatDate(birthDate) }}</p>
                    <p>{{ formatDate(registerDate) }}</p>
                </div>
            </div>
            <div class="flex ml-5">
                <div class="col">
                    <p class="mt-5 text-gray-500">Followers :</p>
                    <p class="text-gray-500">Postingan :</p>
                </div>
                <div class="col ml-3">
                    <p class="mt-5">{{ followerCount }}</p>
                    <p>{{ postCount }}</p>
                </div>
            </div>
            <div class="flex ml-5">
                <div class="col">
                    <p class="mt-5 text-gray-500">Negara :</p>
                    <p class="text-gray-500">Terakhir Aktif :</p>
                </div>
                <div class="col ml-3">
                    <p class="mt-5">{{ country }}</p>
                    <p>{{ lastActive }}</p>
                </div>
            </div>
            <button class="bg-green-500 text-white font-bold rounded w-16 h-8 mt-7 ml-5">
                Aktif
            </button>
            <button class="border font-medium rounded w-24 h-10 py-2 mt-6 ml-5">
                Ubah status
            </button>
        </div>

    </div>
</template>



