<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const apiURL = runtimeConfig.public.api

const { data, pending, error, refresh } = await useLazyAsyncData<SortGamesResponse>(
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

onMounted(() => {
    console.log(data.value)
})
</script>

<template>
    <div class="text-ghost_white ml-4">
        <h1 class="text-xl font-bold mt-10">Top Rated Games</h1>
        <div class="flex mt-2 w-1/2 overflow-scroll">
            <template v-if="pending">
                <div class="text-center">
                    <p>Loading...</p>
                </div>
            </template>

            <template v-else-if="error">
                <div class="text-center">
                    <h1 class="text-2xl font-bold">Error</h1>
                    <p class="text-lg">{{ error.message }}</p>
                </div>
            </template>

            <template v-else>
                <template v-for="game in data">
                    <DesktopGamebox :id="game.id" :name="game.name" :cover_id="game.cover_id"
                        :cover_hash="game.cover_hash" />
                </template>
            </template>
        </div>
    </div>
</template>

<style scoped></style>