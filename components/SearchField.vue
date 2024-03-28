<script setup>
import debounce from "lodash.debounce";
const props = defineProps({
  query: {
    type: String,
  },
});

const debouncedSearch = debounce((query) => {
  console.log("Send API request", query);
}, 500);

function onSearch(query) {
  debouncedSearch(query); 
}

const query = props.query;
</script>
<template>
  <div>
    <div>
      <div
        class="p-3 bg-white rounded-xl flex gap-1 items-center border border-border text-main"
      >
        <img src="/image/search.svg" alt="" />
        <input
          class="outline-none border-none"
          type="text"
          v-model="query"
          @input="onSearch(query)"
          name=""
          id=""
          placeholder="Search"
        />
      </div>
    </div>
  </div>
</template>
