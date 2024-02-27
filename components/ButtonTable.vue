<script setup lang="ts">
const props = defineProps({
  text:{
    type: String,
  }
})
</script>
<template>
  <div>
    <button class="p-3 bg-white rounded-xl flex gap-1 items-center border border-border text-main">
      <slot name="leadingIcon"></slot>
      {{ text }}
      <slot name="trailingIcon"></slot>
    </button>
  </div>
</template>