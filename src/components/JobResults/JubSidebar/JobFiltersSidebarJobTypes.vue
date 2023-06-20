<template>
  <JobFilterSidebarCheckboxGroup
    :unique-values="UNIQUE_JOB_TYPES"
    :action="userStore.ADD_SELECTED_JOB_TYPES"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";

import { useJobsStore } from "../../../stores/jobs";
import { useUserStore } from "../../../stores/user";
import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";

const userStore = useUserStore();
const jobsStore = useJobsStore();
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);
</script>
