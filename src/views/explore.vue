<template>
  <div>
    <section class="relative">
      <div class="h-[340px] bg-gray-200">
  
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
import { ref } from "vue";
import Tabs from "@/components/Tabs.vue";
import NearbyPlaces from "@/components/molecules/NearbyPlaces.vue";

const chartOptions2 = ref({
  series: [67, 84],
  plotOptions: {
    radialBar: {
      dataLabels: {
        total: {
          show: false,
          label: 'TOTAL'
        }
      }
    }
  },
  labels: ['TEAM A', 'TEAM B']
})

var chartOptions = {
  chart: {
    // height: 280,
    type: "radialBar",
  },
  series: [67, 20],
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#293450"
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#fff",
          fontSize: "13px"
        },
        value: {
          color: "#fff",
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Progress"]
};


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
</script>