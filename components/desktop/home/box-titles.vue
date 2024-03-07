<script lang="ts" setup>
defineProps({
    title : {
        type: String,
        required: true
    },
    link : {
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
    <div class="flex items-end justify-between mx-12" :class="theme === 'dark' ? 'text-ghost_white' : 'text-licorice'">
        <h2 class="text-xl font-bold">{{title}}</h2>
        <NuxtLink class="text-sm font-bold opacity-50 hover:opacity-100" :to="link">more</NuxtLink>
    </div>
</template>