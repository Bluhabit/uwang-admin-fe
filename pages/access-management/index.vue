<script setup lang="ts">

</script>

<template>
    <div class="bg-separator h-screen">
        <div class="flex justify-between items-center p-4">
            <div>
                <h1 class="text-2xl font-bold">Manajemen akses</h1>
                <p class="text-gray-500">Tambah atau hapus akses setiap role</p>
            </div>
            <div>
                <button class="border-2 border-gray-300 p-2 rounded-lg hover:bg-gray-100"><img src="image/bell.svg"
                        alt=""></button>
            </div>
        </div>
        <DataTable />
    </div>
</template>