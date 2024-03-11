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
    'recently-added-games',
    () => $fetch(`${apiURL}/games/sort`, {
        params: {
            sort_type: 'recent',
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
    <div class="w-full text-ghost_white flex justify-end pr-12">
        <template v-if="pending || !isMounted">
            <DesktopSkeletonsHomeGamesBox />
        </template>

        <template v-else-if="error">
            <div class="text-center w-full bg-ghost_white rounded-[45px] pt-4">
                <DesktopHomeBoxTitles title="Recently added" link="/" theme="light" />
                <DesktopErrorsHomeboxError :error="error" class="mx-16 h-32 my-8" />
            </div>
        </template>

        <template v-else>
            <div class="w-fit overflow-hidden bg-ghost_white rounded-[45px] pt-4 ">
                <DesktopHomeBoxTitles title="Recently added" link="/" theme="light" />
                <DesktopCarouselArrow :items="(data as GameMin[])" theme="light" />
            </div>
        </template>
    </div>
</template>

<style scoped>

</style>