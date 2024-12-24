<script lang="ts" setup>
const { isMobileOrTablet } = useDevice();
</script>

<template>
    <NuxtLayout :name="isMobileOrTablet ? 'mobile' : 'desktop'">
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt,
#__layout {
    height: 100% !important;
    width: 100% !important;
    overflow: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
}

body {
    font-family: 'Switzer-Regular', sans-serif;
}
</style>