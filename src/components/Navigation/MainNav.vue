<template>
<header :class="['w-full', 'text-xl', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
        <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-grey-1 px-8">
            <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl">
                Bobo Careers
            </router-link>
            <nav class="ml-12 h-full text-sm">
                <ul class="flex h-full list-none">
                    <li v-for="menuItem in menuItems" :key="menuItem.text" class="ml-9 h-full first:ml-0">
                        <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">
                            {{ menuItem.text }}
                        </router-link>
                    </li>
                </ul>
            </nav>
            <div class="ml-auto flex h-full items-center">
                <ProfileImg v-if="isLoggedIn" />
                <ActionButton v-else text="Sign in" type="primary" @click="LOGIN_USER" />
            </div>
        </div>
        <TheSubnav v-if="isLoggedIn" />
    </div>
</header>
</template>

<script lang="ts" setup>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImg from "@/components/Navigation/ProfileImg.vue";
import TheSubnav from "@/components/Navigation/TheSubnav.vue";
import { useUserStore } from "../../stores/user";
import { computed, ref } from "vue";

const userStore = useUserStore();
const LOGIN_USER = userStore.LOGIN_USER;
const isLoggedIn = computed(() => userStore.isLoggedIn);

const headerHeightClass = computed(() => ({
    "h-16": !isLoggedIn.value,
    "h-32": isLoggedIn.value,
}));

const menuItems = ref([
    { text: "Teams", url: "/teams" },
    { text: "Locations", url: "/" },
    { text: "Life at Bobo Corp", url: "/" },
    { text: "How we hire", url: "/" },
    { text: "Jobs", url: "/jobs/results" },
]);
</script>

