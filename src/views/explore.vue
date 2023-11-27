<template>
  <div>
    <section class="relative">
      <div class="h-[340px] bg-gray-200">
        <GMapMap
          :center="center"
          :zoom="16"
          map-type-id="terrain"
          :options="{
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: false,
          }"
          class="h-full">
          <GMapCluster>
            <GMapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />
          </GMapCluster>
        </GMapMap>
      </div>
      <div class="absolute top-0 inset-x-0 px-5 pt-5">
        <Tabs
          :tab_list="mapTabList"
          :value="mapTab"
          query_name="map_tab"
          @model-value="($event:any) => mapTab = $event"
          class="inline-flex h-[46px] w-full bg-[#F6F6F6] rounded-full
          p-1 [&>*]:w-full">
          <template v-slot:tab="{ tab, index: i, is_active }">
            <div
              :class="[is_active ? 'bg-white' : 'bg-transparent']"
              class="h-full transition duration-300 flex items-center justify-center
              rounded-full text-sm">
              <span class="flex flex-col items-center">
                <span>{{ tab?.name }}</span>
              </span>
            </div>
          </template>
        </Tabs>
      </div>
    </section>

    <section class="mt-6 px-5">
      <label
        for="address"
        class="flex items-center relative">
        <input
          type="search"
          name="address"
          id="address"
          placeholder="Type your address here"
          class="bg-[#F6F6F6] h-[46px] w-full p-1 pl-4 pr-[68px]
          outline-none rounded-full text-sm">
          <button
            class="absolute right-1 h-[38px] min-w-[76px] flex items-center justify-center
            py-4 bg-primary-dark text-white rounded-full text-sm">
            Search
          </button>
      </label>

      <div class="mt-2 rounded-2xl p-4 bg-[#F6F6F6]">
        <ul
          class="
          [&>*]:inline-flex [&>*]:items-center [&>*]:text-xs
          [&>*]:before:h-5 [&>*]:before:w-5 [&>*]:before:content-['']
          [&>*]:before:mr-2 [&>*]:before:rounded-full">
          <li class="before:bg-[#1AD57B]">Air quality is good and healthy</li>
          <li class="before:bg-[#E4D125]">Air quality is moderate and healthy</li>
          <li class="before:bg-[#EB6158]">Air quality is bad and unhealthy</li>
        </ul>
      </div>
    </section>

    <NearbyPlaces class="mt-6" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Tabs from "@/components/Tabs.vue";
import NearbyPlaces from "@/components/molecules/NearbyPlaces.vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useCookies } from '@vueuse/integrations/useCookies'

const { get:getCookie, set:setCookie } = useCookies(['cookie-name'])
const mapTab = ref()
const mapTabList = [
  {
    name: "AQI",
    slug: 'aqi',
  },
  {
    name: "PM 2.5",
    slug: 'pm25',
  },
]

const center = ref({lat: 0, lng: 0})
const markers = [
  {
    position: {
      lat: 51.093048, lng: 6.842120
    },
  }
]

const locationWarnNotice = "Location access is required to use this app."
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
  center.value = { lat: latitude, lng: longitude }
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

onMounted(()=>{
  if(!getCookie('location') || Object.keys(getCookie('location')).length === 0) return
  deviceLocationPreference(true) // going behind their back to get precise location
})
</script>