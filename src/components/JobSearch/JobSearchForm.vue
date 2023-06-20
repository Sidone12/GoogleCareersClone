<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-grey-3"
    @submit.prevent="serchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex-no flex h-full flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label for="role" class="absolute left-0 -top-10">Role</label>
        <TextInput id="role" placeholder="Software engineer" v-model="role" />
      </div>
      <span
        class="flex h-full items-center border-l border-r border-brand-grey-3 bg-brand-grey-2 px-3"
      >
        in
      </span>
      <div class="relative flex h-full flex-1 items-center pl-3">
        <label for="location" class="absolute left-0 -top-10">Where?</label>
        <TextInput id="location" placeholder="Los Angeles" v-model="location" />
      </div>
    </div>
    <ActionButton
      text="Search"
      type="secondary"
      class="ml-auto h-full hover:rounded-r-3xl"
    />
  </form>
</template>
<script lang="ts" setup>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
const role = ref("");
const location = ref("");

const router = useRouter();
const serchForJobs = () => {
  router.push({
    name: "JobResults",
    query: { role: role.value, location: location.value },
  });
};
</script>
