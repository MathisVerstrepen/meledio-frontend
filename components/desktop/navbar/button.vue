<script lang="ts" setup>
defineProps({
    to: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    selected: {
        type: Boolean,
        required: true
    }
});
</script>

<template>
    <NuxtLink :to="to" class="flex svg-anim">
        <NuxtSvgIcon :name="icon" :stroke="selected ? 'rgb(255 51 31)' : 'rgb(251 251 255)'" :fontSize="24"
            strokeWidth="2" :useOriginSize="false" class="mr-5 h-6 w-6" />
        <p class="font-switzer-bold" :class="[selected ? 'text-scarlet-anim' : 'text-ghost_white-anim']"
           :data-text="text">{{ text }}</p>
    </NuxtLink>
</template>

<style>
.svg-anim svg {
    transition: all 0.3s ease-in-out;
}
.svg-anim:hover svg {
    --svg-icon-stroke: rgb(255 51 31);
}

.text-ghost_white-anim {
    position: relative;
    color: rgba(251, 251, 255, 1);
    overflow: hidden;
    display: inline-block;
    transition: all 0.3s ease-in-out;
}

.text-ghost_white-anim::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    width: 0;
    color: rgb(255 51 31);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    white-space: nowrap;
}

.text-ghost_white-anim:hover::before {
    width: 100%;
}

.text-ghost_white-anim:hover{
    color: transparent;
    transition-delay: 0.1s;
}

.text-scarlet-anim {
    position: relative;
    color: rgb(255 51 31);
    overflow: hidden;
    display: inline-block;
    transition: all 0.3s ease-in-out;
}
</style>