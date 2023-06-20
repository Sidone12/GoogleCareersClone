import { computed, ref } from "vue";
import { defineStore } from "pinia";

import type { Degree } from "@/api/types";
import getDegrees from "@/api/getDegrees";


export const useDegreesStore = defineStore("degrees", () => {
  const degrees = ref<Degree[]>([]);

  const FETCH_DERGEES = async () => {
    const recivedDegree = await getDegrees();
    degrees.value = recivedDegree;
  };
  const UNIQUE_DEGREES = computed(() =>
    degrees.value.map((degree) => degree.degree)
  );
  return { degrees, FETCH_DERGEES, UNIQUE_DEGREES };
});
