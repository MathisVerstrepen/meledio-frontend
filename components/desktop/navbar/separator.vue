<script lang="ts" setup>
const props = defineProps({
    fixedHeight: {
        type: Number,
        required: true
    }
});
</script>

<template>
    <svg width="90" :height="fixedHeight" :viewBox="'0 0 90 ' + fixedHeight" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#a)">
            <path stroke="#FF331F" stroke-width="2" :d="'M73.55 27.066V' + (fixedHeight - 2)" id="vsep"/>
        </g>
        <g filter="url(#b)">
            <path d="M 20 14 L 55 14 Q 73.55 14 73.55 27.066" stroke="#FF331F" stroke-width="2" stroke-linecap="round"/>
        </g>
        <g filter="url(#c)">
            <path d="M 20 17 L 55 17 Q 73.55 17 73.55 30.066" stroke="#FF331F" stroke-width="2" stroke-opacity=".5" stroke-linecap="round"/>
        </g>
        <g filter="url(#d)">
            <path d="M 20 20 L 55 20 Q 73.55 20 73.55 32.066" stroke="#FF331F" stroke-width="2" stroke-opacity=".25" stroke-linecap="round"/>
        </g>

    </svg>
</template>

<style scoped>
svg {
    filter: drop-shadow(0px 0px 10px rgba(255, 51, 31, 0.5));
}

#vsep {
    stroke-dasharray: v-bind('fixedHeight');
    stroke-dashoffset: v-bind('fixedHeight');
    animation: dash 0.5s linear forwards;
}

@keyframes dash {
    to {
        stroke-dashoffset: 0;
    }
}
</style>