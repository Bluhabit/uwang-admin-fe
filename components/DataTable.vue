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
    <table class="rounded-t-xl w-full border text-left my-5 border-separator">
      <thead class="rounded-t-xl border-b border-b-separator">
        <tr class="">
          <th
            v-for="(header, index) in headers"
            :key="index"
            class="px-2 py-4 text-sm font-normal capitalize rounded-t-xl bg-neutral-gray-3"
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
