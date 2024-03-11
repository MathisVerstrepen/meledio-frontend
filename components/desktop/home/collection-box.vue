<script lang="ts" setup>
defineProps({
    collection: {
        type: Object as PropType<CollectionMin>,
        required: true
    }
})
</script>

<template>
    <NuxtLink class="relative w-fit h-[134px]" to="/">
        <div class="absolute h-full flex">
            <template v-for="game in collection.games.slice(0, 3)">
                <NuxtPicture provider="triton" :src="'/media/' + game.id + '/cover/big/' + game.cover_id" height="134"
                :img-attrs="{ class: 'h-[134px]', alt: game.name }" class="blur-xl opacity-10"/>
            </template>
        </div>

        <div class="flex rounded-3xl h-full overflow-hidden relative">
            <span class="h-full absolute bg-black bg-opacity-80 w-full"></span>
            <NuxtPicture provider="triton" :src="'/media/' + game.id + '/cover/big/' + game.cover_id" height="134"
            :img-attrs="{ class: 'h-[134px]', alt: game.name }" v-for="game in collection.games.slice(0, 3)"/>
        </div>

        <div class="flex flex-col items-start justify-end h-full absolute bottom-0 z-10 px-4 py-3">
            <h3 class="text-2xl font-bold text-ghost_white">{{ collection.name }}</h3>
            <p class="text-sm font-bold text-scarlet">{{ collection.n_games }} games - {{ collection.n_tracks }} tracks</p>
        </div>
    </NuxtLink>
</template>

<style scoped></style>