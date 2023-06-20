<template>
  <CollapsibleAccordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organisation in UNIQUE_ORGANISATIONS"
            :key="organisation"
            class="h-8 w-1/2"
          >
            <input
              v-model="selectedOrganizations"
              @change="selectOrganization"
              :value="organisation"
              :id="organisation"
              type="checkbox"
              class="mr-3"
            />
            <label :for="organisation">{{ organisation }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollapsibleAccordion>
</template>

<script setup>
import CollapsibleAccordion from "../../Shared/CollapsibleAccordion.vue";

import { useJobsStore } from "../../../stores/jobs";
import { useUserStore } from "../../../stores/user";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const selectedOrganizations = ref([]);

const jobsStore = useJobsStore();
const UNIQUE_ORGANISATIONS = computed(() => jobsStore.UNIQUE_ORGANISATIONS);

const userStore = useUserStore();
const router = useRouter();

const selectOrganization = () => {
  userStore.ADD_SELECTED_ORGANISATIONS(selectedOrganizations.value);
  router.push({ name: "JobResults" });
};
</script>
