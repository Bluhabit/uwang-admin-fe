<script setup lang="ts">
// import { BiEyeFill, BiEyeSlashFill } from "oh-vue-icons/icons";
import { ref } from 'vue'
const logo = "/logo.png"

const passwordVisible = ref(false)

const switchVisibility = () => {
    passwordVisible.value = !passwordVisible.value
}
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 p-5 items-center justify-center">
        <div class="flex flex-col card border rounded-lg py-12 px-12 bg-primary w-full h-[540px]">
            <img :src="logo" alt="Logo" class="w-5/12">
            <h1 class="text-2xl font-medium text-white mb-4">
                Hello
                <br />
                Friends of Uwang!👋🏻
            </h1>
            <p class="text-white mb-16">You are a significant friend to someone who always helps keep money conducive to the
                common goal of achieving
                financial independence.</p>
            <span class="text-white text-center text-sm">
                {{ new Date().getFullYear() }} Uwang. All rights reserved.
            </span>
        </div>
        <div class="flex flex-col justify-center items-center">
            <img src="https://bluhabit.id/assets/img/logo-uwang.png" alt="" class="mb-6" />
            <div class="max-w-sm rounded-2xl overflow-hidden shadow-2xl p-6 w-full">
                <h1 class="font-bold text-xl mb-2">Login</h1>
                <p class="text-sm text-gray-500 mb-4">Masuk ke akun anda</p>
                <form class="w-full max-w-md">
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 mb-2 text-sm text-gray-500">Email</label>
                        <input type="text" id="email" name="email"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                            placeholder="Masukkan email Anda">
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-gray-700 mb-2 text-sm text-gray-500">Password</label>
                        <div class="relative">
                            <input :type="passwordVisible ? 'text' : 'password'" id="password" name="password"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                placeholder="Masukkan password Anda">
                            <button @click="switchVisibility" type="button">
                                <!-- <BiEyeFill v-if="passwordVisible" />
                                <BiEyeSlashFill v-else /> -->
                            </button>
                        </div>
                    </div>
                    <p class="text-right text-sm text-blue-500 mb-4"><a href="#">Lupa password?</a></p>
                    <div class="flex items-center justify-between">
                        <button type="submit"
                            class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Masuk
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
