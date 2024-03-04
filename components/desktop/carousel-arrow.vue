<script lang="ts" setup>
defineProps({
    items: {
        type: Array as PropType<GameMin[]>,
        default: () => []
    },
})

const carouselRef = ref<HTMLElement | null>(null)
let itemWidth: number = 0
const maxItems = ref(0)

const scrollBy = (direction: 'left' | 'right') => {
    if (carouselRef.value && itemWidth) {
        carouselRef.value.getElementsByClassName('overflow-scroll')[0].scrollBy({
            left: direction === 'left' ? -itemWidth * 2 : itemWidth * 2,
            behavior: 'smooth'
        })
    }
}

onMounted(() => {
    const carouselWidth = carouselRef.value?.parentElement?.parentElement?.clientWidth || 0
    itemWidth = carouselRef.value?.getElementsByClassName('overflow-scroll')[0].firstElementChild?.clientWidth || 0

    if (carouselWidth && itemWidth) {
        maxItems.value = Math.floor((carouselWidth - 64) / itemWidth)
    }
})
</script>

<template>
    <div class="flex items-center h-64 w-full relative" ref="carouselRef">
        <div class="flex items-center self-start h-[95%] cursor-pointer opacity-30 hover:opacity-100 duration-200">
            <NuxtSvgIcon name="chevron-up" :stroke="'rgb(251 251 255)'" :fontSize="32" strokeWidth="3"
                :useOriginSize="false" class="w-8 h-8 -rotate-90" @click="scrollBy('left')" />
        </div>

        <div class="flex overflow-scroll no-scrollbar h-56" :style="'width: ' + (maxItems * itemWidth) + 'px;'">
            <template v-for="item in items">
                <DesktopGamebox :id="item.id" :name="item.name" :cover_id="item.cover_id" :cover_hash="item.cover_hash"
                    class="h-full" />
            </template>
        </div>

        <div class="flex items-center self-start h-[95%] cursor-pointer opacity-30 hover:opacity-100 duration-200">
            <NuxtSvgIcon name="chevron-up" :stroke="'rgb(251 251 255)'" :fontSize="32" strokeWidth="3"
                :useOriginSize="false" class="w-8 h-8 rotate-90" @click="scrollBy('right')" />
        </div>
    </div>
</template>