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
            <DesktopSkeletonsHomeGamesBox />
        </template>

        <template v-else-if="error">
            <div class="text-center w-full pt-4">
                <DesktopHomeBoxTitles title="Top Rated Games" link="/" />
                <DesktopErrorsHomeboxError :error="error" class="mx-16 h-32 my-8" />
            </div>
        </template>

        <template v-else>
            <div class="w-fit overflow-hidden pt-4">
                <DesktopHomeBoxTitles title="Top Rated Games" link="/" />
                <DesktopCarouselArrow :items="(data as GameMin[])" />
            </div>
        </template>
    </div>
</template>

<style scoped></style>