<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="mx-auto block rounded border border-solid border-brand-grey-2 bg-white hover:shadow-gray"
    >
      <div class="mx-8 border-b border-solid border-brand-grey-2 pt-5 pb-2">
        <h2 class="mb-2 text-2xl">{{ job.title }}</h2>
        <div
          class="flex flex-row border-b border-solid border-brand-grey-2 align-middle"
        >
          <div class="mr-5 h-10">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul>
              <li
                v-for="location in job.locations"
                :key="location"
                class="mr-5 inline-block"
              >
                <span>{{ location }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="py-4">
          <div>
            <h3 class="mt-1 mb-2">Qualifications</h3>
            <div>
              <ul class="list-disc pl-8">
                <li
                  v-for="qualification in job.minimumQualifications"
                  :key="qualification"
                >
                  {{ qualification }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link :to="jobPageLink" class="text-blue-500"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script lang="ts" setup>
import { computed, type PropType } from "vue";
import type { Job } from "@/api/types";

const props = defineProps({
  job: {
    type: Object as PropType<Job>,
    required: true,
  },
});
const jobPageLink = computed(() => `/jobs/result/${props.job.id}`);
</script>
