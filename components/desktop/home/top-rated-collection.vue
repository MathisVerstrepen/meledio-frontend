<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const apiURL = runtimeConfig.public.api

defineProps({
    isMounted: {
        type: Boolean,
        required: true
    }
})

const { data, pending, error } = await useLazyAsyncData<SortCollectionsResponse>(
    'top-rated-collections',
    () => $fetch(`${apiURL}/collections/sort`, {
        params: {
            sort_type: 'rating',
            sort_order: 'desc',
            min_games: 3,
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
    <div class="w-full col-start-1 col-span-2 text-ghost_white">
        <template v-if="pending || !isMounted">
            <DesktopSkeletonsHomeGamesBox />
        </template>

        <template v-else-if="error">
            <div class="text-center w-full pt-4">
                <DesktopHomeBoxTitles title="Top Rated Collections" link="/" />
                <DesktopErrorsHomeboxError :error="error" class="mx-16 h-32 my-8" />
            </div>
        </template>

        <template v-else>
            <div class="w-full overflow-hidden pt-4">
                <DesktopHomeBoxTitles title="Top Rated Collections" link="/" />
                <div class="flex space-x-4 justify-between mx-12 h-44 items-center">
                    <DesktopHomeCollectionBox :collection v-for="collection in data?.slice(0,4)" />
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped>

</style>