<script setup lang="ts">

</script>

<template>
    <div
        class="flex items-center justify-center min-h-screen py-12 bg-contain bg-no-repeat bg-center bg-custom-image relative">
        <img src="https://bluhabit.id/assets/img/logo-uwang.png" alt="logo-Uwang" class="absolute top-0 left-0 m-4 ml-10">
        <div class="w-full max-w-lg px-5 py-4 bg-white shadow-lg shadow-t-md rounded-2xl">
            <img src="image/maskSuccess.svg" alt="icon-success" class="pb-6 mx-auto">
            <h2 class="text-center text-2xl font-bold">Password berhasil dibuat</h2>
            <p class="text-center mt-4 text-neutral-gray-7">Silahkan login menggunakan password yang telah dibuat.</p>
            <button
                class="mt-8 w-full px-4 py-3 text-sm font-medium text-white bg-state-primary-main rounded-xl shadow-sm hover:bg-primary-700">Login</button>
        </div>
    </div>
</template>

<style>
.bg-custom-image {
    background-image: url('image/Illustration-Bg.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
</style>