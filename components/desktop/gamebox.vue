<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const mediaURL = runtimeConfig.public.media
console.log(mediaURL)

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
    <NuxtLink :to="'/game/' + id" class="flex flex-col items-center shrink-0 w-36 p-2">
        <NuxtImg :src="mediaURL + '/media/' + id + '/cover/big/' + cover_id" :alt="name" height="144"
            width="144" class="rounded-lg" />
        <p :class="'text-' + text_color + ' mt-2 text-center text-xs font-bold'">{{ name }}</p>
    </NuxtLink>
</template>

<style scoped></style>