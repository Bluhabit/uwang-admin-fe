<script setup lang="ts">
type Item = {
  [key: string]: any;
};

const props = defineProps({
  items: {
    type: Array<Item>,
  },
  headers: {
    type: Array<Header>,
  },
});
</script>
<template>
  <div class="font-inter p-6">
    <div class="flex w-full">
      <slot name="actionHeader"></slot>
    </div>
    <table
      style="
        -moz-border-top-left-radius: 0.75rem /* 12px */;
        -moz-border-top-right-radius: 0.75rem /* 12px */;
      "
      class="rounded-t-xl w-full outline text-left my-5 outline-separator"
    >
      <thead class="border-b">
        <tr class="">
          <th
            v-for="(header, index) in headers"
            :key="index"
            class="px-2 py-4 text-sm font-normal capitalize bg-neutral-gray-3"
          >
            {{ header.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items">
          <td v-for="header in headers" class="px-2 py-4 text-sm font-normal">
            <slot :name="header.value" :item="item">
              <span v-if="header.value === 'action'"> </span>
              <span v-else-if="header.value === 'number'">
                {{ index + 1 }}
              </span>
              <span v-else>
                {{ item[header.value] }}
              </span>
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
