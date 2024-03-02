<script lang="ts" setup>

</script>

<template>
  <nav>
    <NuxtImg src="logo.png" alt="logo" class="w-40 mx-auto my-4" />
    <div class="w-full flex flex-col space-y-8 px-12 mt-8">
        <DesktopNavbarButton to="/" text="Home" icon="home" :selected="false" />
        <DesktopNavbarButton to="/games" text="Game" icon="gamepad" :selected="false" />
        <DesktopNavbarButton to="/category" text="Category" icon="category" :selected="false" />
        <DesktopNavbarButton to="/other" text="Other" icon="dots" :selected="false" />        
    </div>
  </nav>
</template>

<style scoped>

</style>