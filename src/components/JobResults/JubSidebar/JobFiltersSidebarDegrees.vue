<template>
  <JobFilterSidebarCheckboxGroup
    :unique-values="UNIQUE_DEGREES"
    :action="userStore.ADD_SELECTED_DEGREES"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";
import { useDegreesStore } from "../../../stores/degrees";
import { useUserStore } from "../../../stores/user";

const degreeStore = useDegreesStore();
const UNIQUE_DEGREES = computed(() => degreeStore.UNIQUE_DEGREES);

const userStore = useUserStore();
</script>

<style></style>
