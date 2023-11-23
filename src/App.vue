<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import SplashScreen from './components/SplashScreen.vue';
import { isShown, setIsLoading } from './splash-screen';
import { onMounted, ref, watch } from 'vue';

// SPLASH SCREEN LOGIC
setIsLoading(true);
const fade = ref(false);
const showSplashScreen = () => {
  setTimeout(() => fade.value = true) // adding this immediately
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);  
}
onMounted(showSplashScreen);
watch(isShown, (val) => {
  if (val) {
    showSplashScreen();
    return
  }
  fade.value = false;
})


</script>

<template>
  <div class="tw-h-[100dvh] tw-relative">
    <SplashScreen
      v-if="isShown"
      :class="{ 'tw-opacity-0':fade }"
      class="tw-z-20 tw-delay-[2.7s] tw-transition-all tw-duration-500"
    />
    <Header class="tw-h-[60px] tw-z-10" />
    <main
      class="tw-absolute tw-inset-0 tw-overflow-y-auto
      tw-mt-[60px] tw-mb-[83px]">
      <RouterView />
    </main>
    <Nav class="tw-h-[83px]" />
  </div>
</template>