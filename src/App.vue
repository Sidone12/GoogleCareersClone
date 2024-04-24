<template>
  <MainNav />
  <router-view />
  <Footer />
</template>

<script lang="ts" setup>
import MainNav from "@/components/Navigation/MainNav.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>
