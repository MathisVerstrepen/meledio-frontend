<script lang="ts" setup>
const isMounted = ref(false)

onMounted(() => {
    isMounted.value = true
})
</script>

<template>
    <div class="w-full h-full grid grid-cols-[50%_50%] grid-rows-[300px_auto] pt-10 px-4 overflow-y-scroll">
        <DesktopHomeTopRatedGames :isMounted />
        <DesktopHomeRecentlyAdded :isMounted />
        <DesktopHomeTopRatedCollection :isMounted />
        <DesktopHomeRandomGames :isMounted />
    </div>
</template>