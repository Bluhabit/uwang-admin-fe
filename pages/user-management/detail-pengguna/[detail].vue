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
        <h1 class="font-semibold text-2xl">Infromasi Pengguna</h1>
        <UserInformation />
      </div>
      <DataTable :items="dataDummy" :headers="headers">
        <template #actionHeader>
          <div class="w-full flex justify-between">
            <div class="flex gap-2">
              <ButtonTable text="Add Filter">
                <template #leadingIcon>
                  <img src="/image/filter.svg" alt="" />
                </template>
              </ButtonTable>
              <ButtonTable text="Sort">
                <template #leadingIcon>
                  <img src="/image/arrow-up.svg" alt="" />
                </template>
                <template #trailingIcon>
                  <img src="/image/chevron-down.svg" alt="" />
                </template>
              </ButtonTable>
            </div>
            <ButtonTable text="Add Filter">
              <template #leadingIcon>
                <img src="/image/download.svg" alt="" />
              </template>
            </ButtonTable>
          </div>
        </template>
        <template #status="{ item }">
          <p
            class="bg-state-success-main text-white rounded-full px-2 py-1 w-fit"
          >
            {{ item.status }}
          </p>
        </template>
        <template #id="{ item }">
          <a
            @click="goToDetailUser(item.id)"
            class="text-state-primary-main underline cursor-pointer"
          >
            {{ item.id }}
          </a>
        </template>
      </DataTable>
    </template>
  </MainLayout>
</template>
