<template>
  <img
    :src="imageLink"
    alt="User profile image"
    class="h-9 w-9 rounded-3xl object-cover"
  />
</template>
<script lang="ts" setup>
import { ref } from "vue";
const imageLink = ref(
  "https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
);
</script>
