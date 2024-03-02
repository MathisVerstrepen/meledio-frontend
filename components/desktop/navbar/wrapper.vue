import { ClientOnly } from '../../../.nuxt/components';

<script lang="ts" setup>
const separatorHeight = ref<number | null>(null);
const navRef = ref<HTMLElement | null>(null);

onMounted(() => {
    separatorHeight.value = navRef.value?.offsetHeight - 30;

    window.addEventListener('resize', () => {
        separatorHeight.value = navRef.value?.offsetHeight - 30;
    });
});
</script>

<template>
    <nav class="relative" ref="navRef">
        <NuxtImg src="logo.png" alt="logo" class="w-36 ml-10 my-5" />
        <div class="w-full flex flex-col space-y-8 px-12 mt-8">
            <DesktopNavbarButton to="/" text="Home" icon="home" :selected="false" />
            <DesktopNavbarButton to="/games" text="Game" icon="gamepad" :selected="false" />
            <DesktopNavbarButton to="/category" text="Category" icon="category" :selected="false" />
            <DesktopNavbarButton to="/other" text="Other" icon="dots" :selected="false" />
        </div>
        <ClientOnly>
            <DesktopNavbarSeparator class="absolute top-8 right-0" :fixedHeight="separatorHeight" />
        </ClientOnly>
    </nav>
</template>

<style scoped></style>