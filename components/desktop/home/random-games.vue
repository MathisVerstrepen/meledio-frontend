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

const { data, pending, error } = await useLazyAsyncData<RandomGamesResponse>(
    'random-games',
    () => $fetch(`${apiURL}/games/sort`, {
        params: {
            sort_type: 'random',
            sort_order: 'desc',
            offset: 0,
            limit: 27
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
)
</script>

<template>
    <div class="w-full h-fit col-start-1 col-span-2">
        <DesktopHomeBoxTitles title="Random Games" link="/"/>
        <div class="flex flex-wrap justify-between px-8 mt-2">
            <template v-for="item in data">
                <DesktopGamebox :id="item.id" :name="item.name" :cover_id="item.cover_id" :cover_hash="item.cover_hash"
                    class="h-full" theme="dark" />
            </template>
        </div>        
    </div>

</template>

<style scoped></style>