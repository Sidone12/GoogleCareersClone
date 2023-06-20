<template>
  <ul>
    <li v-for="spotLight in spotLights" :key="spotLight.id">
      <slot
        :img="spotLight.img"
        :title="spotLight.title"
        :description="spotLight.description"
      ></slot>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import axios from "axios";

interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}

const spotLights = ref<Spotlight[]>([]);

const getspotLights = async () => {
  const baseUrl = "http://localhost:3000";
  const url = `${baseUrl}/spotlights`;
  const request = await axios.get<Spotlight[]>(url);
  spotLights.value = request.data;
};
onMounted(getspotLights);
</script>

