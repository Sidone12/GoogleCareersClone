<template>
  <HeaderContainer>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template v-slot:subtitle>
      <h2 class="my-4 w-full text-base font-light">
        It`s awesome working there. Why don`t you come join us?
      </h2>
    </template>
  </HeaderContainer>
</template>

<script lang="ts" setup>
import HeaderContainer from "../components/Shared/HeaderContainer.vue";
</script>

<style lang="scss" scoped></style>
