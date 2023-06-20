<template>
  <JobFilterSidebarCheckboxGroup
    :unique-values="UNIQUE_ORGANISATIONS"
    :action="userStore.ADD_SELECTED_ORGANISATIONS"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useJobsStore } from "../../../stores/jobs";
import { useUserStore } from "../../../stores/user";

import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";
const userStore = useUserStore();
const jobsStore = useJobsStore();
const UNIQUE_ORGANISATIONS = computed(() => jobsStore.UNIQUE_ORGANISATIONS);
</script>
