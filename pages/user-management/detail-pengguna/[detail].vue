<script setup>
const route = useRoute();
const uuid = route.params.detail;
const dataDummy = {
  id: "1551b951-5506-48cf-bb76-4804563e6287",
  email: "azkigm03@gmail.com",
  full_name: "tes",
  username: "azkik",
  dateOfBirth: "1999-03-25T00:00:00Z",
  dateOfRegister: "1999-03-25T00:00:00Z",
  status: "ACTIVE",
};
</script>
<template>
  <MainLayout>
    <template #content>
      <HeaderPage
        headerText="Detail Pengguna"
        :subtitleText="`Daftar Pengguna > ${dataDummy.full_name}`"
      />
      <div class="p-6">
        <h1 class="font-semibold text-2xl ">Infromasi Pengguna</h1>
        <UserInformation />
      </div>
    </template>
  </MainLayout>
</template>
