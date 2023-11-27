<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-[#151A19B2] backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template">
            <DialogPanel
              :class="{ '!translate-y-0':animate }"
              class="flex flex-col items-center gap-2
              w-full max-w-md transform overflow-hidden rounded-3xl
              bg-white p-6 text-center align-middle shadow-xl translate-y-[200%]
              transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                <mask id="mask0_18_964" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="28">
                  <rect x="0.5" width="28" height="28" fill="#097FF7"/>
                </mask>
                <g mask="url(#mask0_18_964)">
                  <path d="M14.5 24.8792C14.2278 24.8792 13.9556 24.8306 13.6834 24.7333C13.4111 24.6361 13.1681 24.4903 12.9542 24.2958C11.6903 23.1292 10.5722 21.9917 9.60002 20.8833C8.6278 19.775 7.81599 18.7007 7.1646 17.6604C6.51321 16.6201 6.01738 15.6187 5.6771 14.6562C5.33683 13.6937 5.16669 12.775 5.16669 11.9C5.16669 8.98333 6.10488 6.65972 7.98127 4.92917C9.85766 3.19861 12.0306 2.33333 14.5 2.33333C16.9695 2.33333 19.1424 3.19861 21.0188 4.92917C22.8952 6.65972 23.8334 8.98333 23.8334 11.9C23.8334 12.775 23.6632 13.6937 23.3229 14.6562C22.9827 15.6187 22.4868 16.6201 21.8354 17.6604C21.184 18.7007 20.3722 19.775 19.4 20.8833C18.4278 21.9917 17.3097 23.1292 16.0459 24.2958C15.832 24.4903 15.5889 24.6361 15.3167 24.7333C15.0445 24.8306 14.7722 24.8792 14.5 24.8792ZM14.5 14C15.1417 14 15.691 13.7715 16.1479 13.3146C16.6049 12.8576 16.8334 12.3083 16.8334 11.6667C16.8334 11.025 16.6049 10.4757 16.1479 10.0187C15.691 9.56181 15.1417 9.33333 14.5 9.33333C13.8584 9.33333 13.309 9.56181 12.8521 10.0187C12.3952 10.4757 12.1667 11.025 12.1667 11.6667C12.1667 12.3083 12.3952 12.8576 12.8521 13.3146C13.309 13.7715 13.8584 14 14.5 14Z" fill="#097FF7"/>
                </g>
              </svg>

              <h3 class="text-xs">Allow <strong>Browser</strong> to access this device’s location?</h3>

              <div
                class="flex gap-7 [&>*>button]:h-[116px] [&>*>button]:w-[116px]
                [&>*>button]:min-h-[116px] [&>*>button]:min-w-[116px] [&>*>button]:rounded-full [&>*>button]:overflow-hidden
                [&>*>button]:relative [&>*>button]:after:absolute [&>*>button]:after:inset-0
                [&>*>button]:ring-2 [&>*>button]:ring-transparent [&>*>button]:cursor-pointer
                [&>*>button]:transition-all [&>*>button]:duration-300">
                <div class="flex flex-col items-center gap-2">
                  <button
                    @click="deviceLocationPreference(true)"
                    class="hover:ring-[#174FA6]">
                    <img class="scale-[1.06]" src="@/assets/precise-location.png" alt="">
                  </button>
                  <span class="text-xs font-semibold">Precise</span>
                </div>
                
                <div class="flex flex-col items-center gap-2">
                  <button
                    @click="deviceLocationPreference(false)"
                    class="hover:ring-[#174FA6]">
                    <img src="@/assets/approximate-location.png" alt="">
                  </button>
                  <span class="text-xs font-semibold">Approximate</span>
                </div>
              </div>

              <div class="mt-[14px] flex flex-col items-center gap-[26px] font-semibold text-xs">
                <button @click="deviceLocationPreference(false)">While using the app</button>
                <button @click="deviceLocationPreference(false)">Only this time</button>
                <button @click="closeModal">Don’t allow</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from '@headlessui/vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useCookies } from '@vueuse/integrations/useCookies'

defineProps<{animate:boolean}>()
const { get:getCookie, set:setCookie, addChangeListener } = useCookies(['cookie-name'])

const isOpen = ref(true)
const locationWarnNotice = "Location access is required to use this app."
const closeModal = ()=>{
  // if location access not granted, leave the modal open
  const locationCookie = getCookie('location')
  if(!locationCookie || Object.keys(locationCookie).length === 0) {
    toast.warn(locationWarnNotice, {
      autoClose: 3000,
    });
    return
  }
  isOpen.value = false
}

type Position = {
  coords: {
    latitude: number;
    longitude: number;
  }
}
const locationObtained = (position:Position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  setCookie('location', { latitude, longitude })
  closeModal()
}
type PositionError = {
  code: number;
  message: string;
}
const errorObtainingLocation = (error:PositionError) => {
  toast.warn(locationWarnNotice, {
    autoClose: 3000,
  });
  console.warn(`Error obtaining location: ${error.message}`);
}
const deviceLocationPreference = (bePrecise: boolean) => {
  if (navigator.geolocation) {
    const options = {
      enableHighAccuracy: bePrecise, // Request high accuracy
      timeout: 5000, // Maximum time (in milliseconds) allowed to retrieve the location
      maximumAge: 0 // Do not use a cached position
    };

    navigator.geolocation.getCurrentPosition(locationObtained, errorObtainingLocation, options);
  } else {
    toast.error("Geolocation is not supported by this browser.");
  }
}
</script>