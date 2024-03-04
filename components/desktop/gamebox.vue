<script lang="ts" setup>
defineProps({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cover_id: {
        type: String,
        required: true
    },
    cover_hash: {
        type: String,
        required: true
    },
    text_color: {
        type: String,
        required: false,
        default: 'ghost_white'
    },
});
</script>

<template>
    <NuxtLink :to="'/game/' + id" class="flex flex-col items-center shrink-0 w-40 p-4 relative">
        <NuxtPicture provider="triton" :src="'/media/' + id + '/cover/big/' + cover_id" height="164"
            :img-attrs="{ class: 'rounded-2xl', alt: name }" class="z-10" />
        <p :class="'text-' + text_color + ' mt-2 text-center text-xs font-bold'">{{ name }}</p>
    </NuxtLink>
</template>

<style scoped></style>