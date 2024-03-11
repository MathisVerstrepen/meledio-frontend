<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const apiURL = runtimeConfig.public.api

defineProps({
    isMounted: {
        type: Boolean,
        required: true
    }
})

const itemsWrapperRef = ref<HTMLElement | null>(null)
const maxItems = ref(0)

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

watch(() => itemsWrapperRef.value?.clientWidth, () => {
    const wrapperWidth = itemsWrapperRef.value?.clientWidth || 0

    if (wrapperWidth) {
        maxItems.value = Math.floor((wrapperWidth*0.9) / 300)
        console.log(maxItems.value)
    }
})
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
            <div class="w-full overflow-hidden pt-4" ref="itemsWrapperRef" >
                <DesktopHomeBoxTitles title="Top Rated Collections" link="/" />
                <div class="flex justify-between mx-12 h-48 items-center collection">
                    <DesktopHomeCollectionBox :collection v-for="collection in data?.slice(0, maxItems)" />
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped>

</style>