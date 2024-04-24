<template>
  <footer class="bg-[#f8f9fa] py-8 px-12">
    <div
      class="grid grid-cols-12 items-center py-8 sm:flex sm:flex-col sm:items-start sm:gap-3 sm:pt-0 md:flex md:flex-col md:items-start md:gap-3 md:pt-0"
    >
      <div class="col-span-1 col-start-1"></div>
      <div
        class="col-span-2 text-lg font-semibold text-[#202124] sm:text-sm md:col-span-4"
      >
        Follow Life at Google on
      </div>
      <ul class="flex flex-row items-center gap-2">
        <li v-for="social in socials" :key="social.id">
          <a :href="social.link" target="_blank">
            <font-awesome-icon
              :icon="social.social"
              class="h-7 w-10 text-[#202124] hover:translate-y-0.5 sm:w-5"
            />
          </a>
        </li>
      </ul>
    </div>

    <hr />
    <div
      class="grid grid-cols-12 py-6 pt-10 sm:flex sm:flex-col sm:items-start sm:gap-3 sm:pt-8 md:flex md:flex-col md:items-start md:gap-3 md:pt-7"
    >
      <div class="col-span-1 col-start-1"></div>
      <div class="col-span-2 lg:col-span-3">
        <h2 class="text-2xl text-[#202124] sm:text-xl">More about us</h2>
        <ul>
          <li v-for="link in aboutUsLinks" class="my-6 sm:my-2">
            <a
              :href="link.url"
              target="_blank"
              class="text-lg text-[#5f6368] sm:text-sm"
            >
              {{ link.text }}
              <font-awesome-icon
                :icon="link.favicon"
                class="h-5 w-8 text-[#5f6368] hover:translate-y-0.5"
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="col-span-2 lg:col-span-3">
        <h2 class="text-2xl text-[#202124] sm:text-xl">Related information</h2>
        <ul>
          <li v-for="link in RelatedInformationLinks" class="my-6 sm:my-2">
            <a
              :href="link.url"
              target="_blank"
              class="text-lg text-[#5f6368] sm:text-sm"
            >
              {{ link.text }}
              <font-awesome-icon
                :icon="link.favicon"
                class="h-5 w-8 text-[#5f6368] hover:translate-y-0.5"
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="col-span-5">
        <h2 class="text-2xl text-[#202124] sm:text-xl">Equal Opportunity</h2>
        <p class="mt-6 text-sm text-[#5f6368] sm:mt-3 sm:text-sm">
          Google is proud to be an equal opportunity workplace and is an
          affirmative action employer. We are committed to equal employment
          opportunity regardless of race, color, ancestry, religion, sex,
          national origin, sexual orientation, age, citizenship, marital status,
          disability, gender identity or Veteran status. We also consider
          qualified applicants regardless of criminal histories, consistent with
          legal requirements. See also
          <a
            href="https://careers.google.com/eeo/"
            class="text-blue-500 underline"
            >Google's EEO Policy</a
          >
          and
          <a
            href="https://careers.google.com/jobs/dist/legal/EEOC_KnowYourRights_10_20.pdf"
            class="text-blue-500 underline"
            >Know your rights: workplace discrimination is illegal</a
          >
          . If you have a need that requires accommodation, please let us know
          by completing our
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSecoIh9BFbvT2hbcPZqGzUkNAB2d7jA64Wzt6gQPEyxVw5nSA/viewform"
            class="text-blue-500 underline"
            >Accommodations for Applicants form</a
          >.
        </p>
      </div>
    </div>
    <hr />
    <div
      class="grid grid-cols-12 items-center py-8 sm:flex sm:flex-col sm:items-start sm:gap-3 md:flex md:flex-col md:items-start md:gap-3"
    >
      <div class="col-span-1 col-start-1"></div>
      <div class="col-span-2 text-lg font-semibold text-[#202124]">
        <img
          src="../../../public/Google logo.png"
          alt="Google logo"
          class="w-36 sm:w-28"
        />
      </div>
      <ul
        class="col-span-4 flex flex-row items-center gap-4 sm:flex sm:flex-col sm:items-start sm:text-sm lg:col-span-5"
      >
        <li v-for="link in privacyLinks" :key="link.text">
          <a :href="link.url" target="_blank">
            {{ link.text }}
            <font-awesome-icon
              :icon="link.favicon"
              class="h-4 w-6 text-[#5f6368] hover:translate-y-0.5"
            />
          </a>
        </li>
      </ul>
      <ul class="col-span-4 ml-auto flex flex-row items-center sm:m-0 md:m-0">
        <li>
          <a
            href="https://support.google.com/googlecareers/?hl=en&_ga=2.113351044.2013530686.1693572914-1436823367.1687265243&_gl=1*xvxxkr*careers_ga*MTQzNjgyMzM2Ny4xNjg3MjY1MjQz*careers_ga_41NEC9ZD62*MTY5MzU3Njk3OC4xMi4xLjE2OTM1NzkyOTYuMC4wLjA.#topic=6095159"
            target="_blank"
            class="flex flex-row items-center gap-1"
          >
            <font-awesome-icon
              class="h-6 w-8 text-[#202124] hover:translate-y-0.5 sm:w-5"
              :icon="['fas', 'question-circle']"
            />
            <p>Help</p>
            <font-awesome-icon
              :icon="['fas', 'external-link-alt']"
              class="h-4 w-6 text-[#5f6368] hover:translate-y-0.5 sm:w-5"
            />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Soсials {
  social: string[];
  id: number;
  link: string;
}

const socials = ref<Soсials[]>([
  {
    social: ["fab", "instagram-square"],
    id: 1,
    link: "https://www.instagram.com/lifeatgoogle",
  },
  {
    social: ["fab", "twitter"],
    id: 2,
    link: "https://twitter.com/lifeatgoogle",
  },
  {
    social: ["fab", "youtube"],
    id: 3,
    link: "https://www.youtube.com/lifeatgoogle",
  },
  {
    social: ["fab", "linkedin"],
    id: 4,
    link: "https://www.linkedin.com/company/google/jobs",
  },
  {
    social: ["fab", "facebook"],
    id: 5,
    link: "https://www.facebook.com/lifeatgoogle/",
  },
]);

interface aboutUsLinks {
  text: string;
  favicon: string[];
  url: string;
}

const aboutUsLinks = ref<aboutUsLinks[]>([
  {
    text: "About us",
    favicon: ["fas", "external-link-alt"],
    url: "https://www.google.com/about/?hl=en_US&_ga=2.106011904.2013530686.1693572914-1436823367.1687265243&_gl=1*n2n4cv*careers_ga*MTQzNjgyMzM2Ny4xNjg3MjY1MjQz*careers_ga_41NEC9ZD62*MTY5MzU3MjkxMy4xMS4wLjE2OTM1NzI5MzQuMC4wLjA.",
  },
  {
    text: "Contact us",
    favicon: ["fas", "external-link-alt"],
    url: "https://www.google.com/contact/?hl=en_US",
  },
  {
    text: "Press",
    favicon: ["fas", "external-link-alt"],
    url: "https://blog.google/press?hl=en_US",
  },
]);

const RelatedInformationLinks = ref<aboutUsLinks[]>([
  {
    text: "Investor relations",
    favicon: ["fas", "external-link-alt"],
    url: "https://investor.google.com/?hl=en_US",
  },
  {
    text: "Blog",
    favicon: ["fas", "external-link-alt"],
    url: "https://blog.google/?hl=en_US",
  },
]);

const privacyLinks = ref([
  {
    text: "Privacy",
    favicon: ["fas", "external-link-alt"],
    url: "https://policies.google.com/privacy?hl=en&gl=US",
  },
  {
    text: "Applicant and Candidate Privacy",
    url: "https://careers.google.com/privacy-policy/",
  },
  {
    text: "Terms",
    favicon: ["fas", "external-link-alt"],
    url: "https://policies.google.com/terms?hl=en&gl=US",
  },
]);
</script>
