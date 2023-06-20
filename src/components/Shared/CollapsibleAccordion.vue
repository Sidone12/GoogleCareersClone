<template>
  <div class="border-b border-solid border-brand-grey-2 py-5">
    <div
      class="flex cursor-pointer flex-wrap items-center justify-between"
      role="button"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>

    <div class="mt-5 w-full" v-if="isOpen">
      <slot><p>Whooops, some body forget to ad something</p> </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
defineProps({
  header: {
    type: String,
    required: true,
  },
});
const isOpen = ref(false);
const open = () => {
  isOpen.value = !isOpen.value;
};
const caretIcon = computed(() => {
  return isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"];
});
</script>

<style scoped></style>
