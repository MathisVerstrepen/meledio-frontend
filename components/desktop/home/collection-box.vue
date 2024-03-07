<script lang="ts" setup>
defineProps({
    collection: {
        type: Object as PropType<CollectionMin>,
        required: true
    }
})
</script>

<template>
    <div class="flex rounded-3xl overflow-hidden relative">
        <span class="h-full w-full absolute bg-black bg-opacity-80"/>
        <template v-for="game in collection.games.slice(0, 3)">
            <NuxtPicture provider="triton" :src="'/media/' + game.id + '/cover/big/' + game.cover_id" height="134"
            :img-attrs="{ class: 'h-[134px]', alt: game.name }"/>
        </template>
        <div class="flex flex-col items-center justify-center w-full h-full absolute z-10">
            <h3 class="text-2xl font-bold text-ghost_white">{{ collection.name }}</h3>
            <p class="text-sm font-bold text-scarlet">{{ collection.n_games }} games - {{ collection.n_tracks }} tracks</p>
        </div>
    </div>
</template>

<style scoped></style>