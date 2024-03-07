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
    theme: {
        type: String as PropType<'dark' | 'light'>,
        default: 'dark'
    }
});
</script>

<template>
    <NuxtLink :to="'/game/' + id" class="flex flex-col items-center shrink-0 w-40 p-4 relative">
        <NuxtPicture provider="triton" :src="'/media/' + id + '/cover/big/' + cover_id" height="164"
            :img-attrs="{ class: 'rounded-2xl shadow-lg h-[164px]', alt: name }" class="z-10 box" />
        <p class="mt-2 text-center text-xs font-bold" :class="theme === 'dark' ? 'text-ghost_white' : 'text-licorice'">
            {{ name }}</p>
    </NuxtLink>
</template>

<style scoped></style>