<script setup lang="ts">
// NB : for adapting the number of items to display, we will need client screen side on server side
// therefore, we will use a fixed number of items to display optimized for 1080p screens for now
// a solution would be to use cookies to store either the number of items to display or the screen size
</script>

<template>
    <div class="w-[90%] animate-pulse pr-8">
        <div class="flex items-end justify-between mx-12 h-7">
            <div class="h-4 rounded-full bg-gray-700 w-48"></div>
            <div class="h-2 rounded-full bg-gray-700 w-10"></div>
        </div>

        <div class="flex justify-between h-64 items-center mx-12">
            <div>
                <div class="h-[164px] w-[123px] rounded-2xl bg-gray-700"></div>
                <div class="h-3 w-16 mt-2 rounded-full bg-gray-700 m-auto"></div>
            </div>
            <div>
                <div class="h-[164px] w-[123px] rounded-2xl bg-gray-700"></div>
                <div class="h-3 w-20 mt-2 rounded-full bg-gray-700 m-auto"></div>
            </div>
            <div>
                <div class="h-[164px] w-[123px] rounded-2xl bg-gray-700"></div>
                <div class="h-3 w-10 mt-2 rounded-full bg-gray-700 m-auto"></div>
            </div>
            <div>
                <div class="h-[164px] w-[123px] rounded-2xl bg-gray-700"></div>
                <div class="h-3 w-24 mt-2 rounded-full bg-gray-700 m-auto"></div>
            </div>
        </div>
    </div>
</template>