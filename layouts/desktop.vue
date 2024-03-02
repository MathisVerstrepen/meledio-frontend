<script lang="ts" setup>

</script>

<template>
    <div class="h-full w-full bg-black relative grid grid-rows-[90%_10%] grid-cols-[250px_auto]">
        <DesktopNavbarWrapper />
        <slot />
        <DesktopPlayerWrapper class="col-start-1 col-span-2" />
    </div>
</template>

<style></style>