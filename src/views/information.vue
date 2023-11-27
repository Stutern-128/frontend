<template>
  <div class="mt-2 px-5">
    <h1 class="text-[#151A19] text-xl font-bold">Know More About Air Quality</h1>
    <p class="mt-6 text-[#3F484A] text-base">How does the AQI work?</p>

    <section class="text-[#606060] text-xm font-light mt-4 space-y-4">
      <p>Think of the AQI as a yardstick that runs from 0 to 500. The higher the AQI value, the greater the level of air pollution and the greater the health concern. For example, an AQI value of 50 or below represents good air quality, while an AQI value over 300 represents hazardous air quality.</p>
      <p>For each pollutant an AQI value of 100 generally corresponds to an ambient air concentration that equals the level of the short-term national ambient air quality standard for protection of public health. AQI values at or below 100 are generally thought of as satisfactory. When AQI values are above 100, air quality is unhealthy: at first for certain sensitive groups of people, then for everyone as AQI values get higher.</p>
      <p>The AQI is divided into six categories. Each category corresponds to a different level of health concern. Each category also has a specific color. The color makes it easy for people to quickly determine whether air quality is reaching unhealthy levels in their communities.</p>
    </section>

    <section class="mt-8">
      <!-- header -->
      <div
        class="grid grid-cols-9 [&>*]:py-1 [&>*]:px-2 [&>*]:border-r bg-[#F6F6F6]
        text-[#3F484A] text-xs font-medium">
        <div class="col-span-2">Daily AQI Color</div>
        <div class="col-span-2">Levels of Concern</div>
        <div class="col-span-2">Values of Index</div>
        <div class="col-span-3 !border-r-0">Description of Air Quality</div>
      </div>
      <!-- body -->
      <div
        v-for="item in tableData"
        class="grid grid-cols-9 [&>*]:py-1 [&>*]:px-2 [&>*]:border-r
        text-[#3F484A] text-xs font-light">
        <div class="col-span-2" :style="bgClass(item.color)"></div>
        <div class="col-span-2" :style="fadedBgClass(item.color)">{{ item.concern }}</div>
        <div class="col-span-2" :style="fadedBgClass(item.color)">{{ item.index }}</div>
        <div class="col-span-3 !border-r-0" :style="fadedBgClass(item.color)">{{ item.description }}</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
const bgClass = computed(()=>(hash:string)=>`background:${hash};`)
const fadedBgClass = computed(()=>(hash:string)=>`background:${hash}10;`)
const tableData = [
  {
    color: "#1AD57B",
    concern: "Good",
    index: "0 to 50",
    description: "Air quality is satisfactory, and air pollution poses little or no risk.",
  },
  {
    color: "#FFE500",
    concern: "Moderate",
    index: "51 to 100",
    description: "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.",
  },
  {
    color: "#FFAB48",
    concern: "Unhealthy for Sensitive Groups",
    index: "101 to 150",
    description: "Members of sensitive groups may experience health effects. The general public is less likely to be affected.",
  },
  {
    color: "#EB6158",
    concern: "Unhealthy",
    index: "151 to 200",
    description: "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.",
  },
  {
    color: "#7E58EB",
    concern: "Very Unhealthy",
    index: "201 to 300",
    description: "Health alert: The risk of health effects is increased for everyone.",
  },
  {
    color: "#6C1A1A",
    concern: "Hazardous",
    index: "301 and higher",
    description: "Health warning of emergency conditions: everyone is more likely to be affected.",
  },
]
</script>