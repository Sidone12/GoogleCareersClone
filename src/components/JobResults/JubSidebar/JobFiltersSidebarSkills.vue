<template>
  <div class="mt-2">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      type="text"
      class="h-12 w-full border border-solid border-brand-grey-1 p-3 text-base shadow-gray"
      placeholder="Computer programing, Finance degree"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const skillsSearchTerm = computed({
  get() {
    return userStore.skillsSearchTerm; 
  }, 
  set(value) {
    userStore.UPDATE_SKILLS_SEARCH_TERM(value);
  }, 
});
</script>
