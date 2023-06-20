<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-row flex-wrap">
        <li v-for="value in uniqueValues" :key="value" class="h-8 w-1/2">
          <input
            v-model="selectedValues"
            @change="selectValue"
            :value="value"
            :id="value"
            type="checkbox"
            class="mr-3"
          />
          <label :for="value">{{ value }}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore, CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/stores/user";
import { useRouter } from "vue-router";
import { ref } from "vue";

const props = defineProps({
  uniqueValues: {
    type: [Set<string>, Array<string>],
    required: true,
  },
  action: {
    type: Function,
    required: true,
  },
});

const selectedValues = ref<string[]>([]);

const router = useRouter();

const selectValue = () => {
  props.action(selectedValues.value);
  router.push({ name: "JobResults" });
  console.log(selectedValues.value);
};

const userStore = useUserStore();
userStore.$onAction(({ after, name }) => {
  after(() => {
    if (name === CLEAR_USER_JOB_FILTER_SELECTIONS) {
      selectedValues.value = [];
    }
  });
});
</script>
