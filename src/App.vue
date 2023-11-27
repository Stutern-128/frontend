<script setup lang="ts">
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import SplashScreen from './components/SplashScreen.vue';
import LocationPermission from './components/LocationPermission.vue';
import { RouterLink, RouterView } from 'vue-router'
import { isShown, setIsLoading } from './splash-screen';
import { computed, onMounted, ref, watch } from 'vue';
import { useCookies } from '@vueuse/integrations/useCookies'

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

const { get:getCookie } = useCookies(['cookie-name'])
const haveGottenLocation = computed(()=>{
  const locationCookie = getCookie('location')
  if(!locationCookie) return false
  return Object.keys(locationCookie).length !== 0
})
</script>

<template>
  <div class="h-[100dvh] relative satoshi">
    <SplashScreen
      v-if="isShown"
      :class="{ 'opacity-0':fade }"
      class="z-20 delay-[2.7s] transition-all duration-500"
    />
    <LocationPermission v-if="!haveGottenLocation" :animate="isShown === false" />
    <Header class="h-[60px] z-10" />
    <main
      class="absolute inset-0 overflow-y-auto
      mt-[60px] mb-[83px] bg-white">
      <RouterView />
    </main>
    <Nav />
  </div>
</template>