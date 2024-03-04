<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const apiURL = runtimeConfig.public.api

defineProps({
    isMounted: {
        type: Boolean,
        required: true
    }
})

const { data, pending, error } = await useLazyAsyncData<SortGamesResponse>(
    'top-rated-games',
    () => $fetch(`${apiURL}/games/sort`, {
        params: {
            sort_type: 'rating',
            sort_order: 'desc',
            offset: 0,
            limit: 10
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
)
</script>

<template>
    <div class="w-full text-ghost_white">
        <template v-if="pending || !isMounted">
            <DesktopHomeTopRatedGamesSkeleton />
        </template>

        <template v-else-if="error">
            <div class="text-center w-full">
                <DesktopHomeBoxTitles title="Top Rated Games" link="/" />
                <div class="bg-red-700 bg-opacity-10 rounded-xl mx-16 h-32 my-8 flex flex-col items-center justify-center">
                    <h1 class="text-2xl font-bold text-red-500">Error</h1>
                    <p class="text-red-500">{{ error.message }}</p>                    
                </div>
            </div>
        </template>

        <template v-else>
            <div class="w-fit overflow-hidden">
                <DesktopHomeBoxTitles title="Top Rated Games" link="/" />
                <DesktopCarouselArrow :items="(data as GameMin[])" />
            </div>
        </template>
    </div>
</template>

<style scoped></style>