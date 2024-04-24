<template>
  <main class="flex h-screen flex-col sm:h-full">
    <section class="pt-10 pb-20" id="hero">
      <div class="grid grid-cols-12 px-12 sm:flex sm:flex-col">
        <div class="col-span-3 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <TheHeadline />
          <JobSearchForm />
        </div>
        <div
          class="col-span-5 col-start-7 self-center justify-self-center sm:mt-6"
        >
          <img
            class="h-80 w-80 object-contain sm:h-60 sm:w-60"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt=""
          />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
    <SpotLight
      class="flex flex-row justify-center pb-16 sm:flex sm:flex-col sm:items-center sm:gap-3"
      style="background: linear-gradient(180deg, transparent 40%, #e8eaed 0)"
    >
      <template #default="{ img, title, description }">
        <router-link
          to="/jobs/results"
          class="mx-5 flex h-96 w-72 flex-col rounded-lg border bg-brand-grey-2 sm:h-full sm:w-64"
        >
          <img
            :src="img"
            alt=""
            class="rounded-lg rounded-b-none object-contain"
          />
          <div class="mt-3 h-48 px-6 py-4 sm:m-0 sm:h-full sm:py-3">
            <h3 class="text-lg font-medium sm:text-sm">
              {{ title }}
            </h3>
            <p class="mt-3 text-sm">{{ description }}</p>
          </div>
          <router-link
            to="/jobs/results"
            class="px-6 py-4 text-sm text-brand-blue-1 sm:py-3"
            >See jobs</router-link
          ></router-link
        >
      </template>
    </SpotLight>
  </main>
</template>

<script lang="ts" setup>
import TheHeadline from "../../components/JobSearch/TheHeadline.vue";
import JobSearchForm from "../../components/JobSearch/JobSearchForm.vue";
import SpotLight from "./SpotLight.vue";
</script>
