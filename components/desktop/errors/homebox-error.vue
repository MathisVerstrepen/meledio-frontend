<script lang="ts" setup>
defineProps({
    error: {
        type: Object as PropType<Error>,
        required: true
    }
})
</script>

<template>
    <div class="bg-red-700 bg-opacity-10 rounded-xl flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold text-red-500">Error</h1>
        <p class="text-red-500">{{ error.message }}</p>                    
    </div>
</template>