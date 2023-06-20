<template>
  <CollapsibleAccordion header="Job types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in UNIQUE_JOB_TYPES"
            :key="jobType"
            class="h-8 w-1/2"
          >
            <input
              v-model="selectedJobTypes"
              @change="selectJobTypes"
              :value="jobType"
              :id="jobType"
              type="checkbox"
              class="mr-3"
            />
            <label :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollapsibleAccordion>
</template>

<script setup>
import { useJobsStore } from "../../../stores/jobs";
import { useUserStore } from "../../../stores/user";
import CollapsibleAccordion from "../../Shared/CollapsibleAccordion.vue";

import { useRouter } from "vue-router";
import { ref, computed } from "vue";

const selectedJobTypes = ref([]);
const jobsStore = useJobsStore(); 
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);
const router = useRouter();
const userStore = useUserStore();

const selectJobTypes = () => {
  userStore.ADD_SELECTED_JOB_TYPES(selectedJobTypes.value);
  router.push({ name: "JobResults" });
  console.log(selectedJobTypes.value);
};
</script>
