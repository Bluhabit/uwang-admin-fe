<script setup lang="ts">
const route = useRoute()
const {get} = useApi()

const auth = useAuth()

onMounted(async ()=>{
  const result = await get("/api")
})
</script>

<template>
  <div>
    <Sidebar /> 
  </div>
</template>
