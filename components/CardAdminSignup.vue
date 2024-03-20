<script setup lang="ts">
import { ref } from 'vue'
const passwordVisible = ref(false)
const password = ref('')
const confirmPassword = ref('')

function switchVisibility() {
    passwordVisible.value = !passwordVisible.value
}

function isPasswordValid() {
    return password.value !== '' && confirmPassword.value !== ''
}
</script>

<template>
    <div class="absolute inset-0 flex items-center justify-center z-20">
        <div class="max-w-sm rounded-2xl overflow-hidden shadow-2xl p-6 max-w-full bg-white">
            <h1 class="font-bold text-xl mb-1">Buat password</h1>
            <p class="text-sm text-gray-500 mb-4">Password akan digunakan untuk login dashboard Uwang.</p>
            <form class="w-full max-w-md">
                <div class="mb-4">
                    <label for="password" class="block text-gray-700 mb-2 text-sm text-gray-500">Password</label>
                    <div class="relative">
                        <input :type="passwordVisible ? 'text' : 'password'" v-model="password" id="password"
                            name="password"
                            class="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                            placeholder="Masukkan password Anda">
                        <button @click="switchVisibility" type="button"
                            class="absolute inset-y-0 right-0 flex items-center px-2">
                            <img v-if="passwordVisible" src="/image/eye-on.svg" alt="">
                            <img v-else src="/image/eye-off.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="confirmPassword" class="block text-gray-700 mb-2 text-sm text-gray-500">Konfirmasi
                        Password</label>
                    <div class="relative">
                        <input :type="passwordVisible ? 'text' : 'password'" v-model="confirmPassword"
                            id="confirmPassword" name="confirmPassword"
                            class="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                            placeholder="Masukkan password Anda">
                        <button @click="switchVisibility" type="button"
                            class="absolute inset-y-0 right-0 flex items-center px-2">
                            <img v-if="passwordVisible" src="/image/eye-on.svg" alt="">
                            <img v-else src="/image/eye-off.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        :class="{ 'bg-state-primary-main hover:bg-state-primary-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full': isPasswordValid(), 'bg-gray-300 hover:bg-gray-300 text-gray-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full': !isPasswordValid() }"
                        type="submit" :disabled="!isPasswordValid()">Buat Password
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
