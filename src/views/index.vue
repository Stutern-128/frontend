<template>
  <div class="pt-2 px-5">
    <h1 class="text-xl text-[#151A19] font-bold">Let’s Breathe Freshly!</h1>
    <p class="text-sm text-[#959595]">The air today is pleasant to breathe. 😊</p>

    <section class="mt-7 flex justify-between">
      <Listbox v-model="selectedDate" class="relative z-10">
        <div class="relative mt-1">
          <ListboxButton
            class="relative cursor-default rounded-full py-2 capitalize text-xs
            pl-3 pr-8 text-left focus:outline-none bg-primary-dark text-white
            focus-visible:border-indigo-500 focus-visible:ring-2
            focus-visible:ring-white/75 focus-visible:ring-offset-2
            focus-visible:ring-offset-orange-300 sm:text-sm">
            <span class="block truncate">{{ selectedDate.name }}</span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                class="h-5 w-5"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <ListboxOptions
              class="absolute mt-1 max-h-60 w-full min-w-[200px] overflow-auto rounded-md bg-white
              text-base ring-1 ring-[#F0F0F0] focus:outline-none sm:text-sm capitalize">
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="date_ in dates_"
                :key="date_.name"
                :value="date_"
                as="template">
                <li
                  :class="[
                    active ? 'text-primary-dark bg-primary-dark/5' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-10 pr-4',
                  ]">
                  <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]">
                    {{ date_.name }}
                  </span>
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-dark">
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>

      <button><ArrowUpOnSquareIcon class="h-6 w-6 text-gray-500" /></button>
    </section>

    <section class="mt-4 h-[144px] border border-[#F0F0F0] rounded-2xl relative">
      <div class="absolute inset-0 flex justify-between p-4 [&>*]:w-full">
        <div class="relative">
          <div class="absolute flex items-center justify-center inset-0 pr-8">
            <apexchart
              width="200"
              :type="radialChartOptions.chart.type"
              :series="radialChartOptions.series"
              :options="radialChartOptions.plotOptions"
              :labels="radialChartOptions.labels"
            ></apexchart>
          </div>
        </div>

        <div class="flex flex-col justify-between">
          <div>
            <Pill class="text-[#F87226]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <mask id="mask0_25_2721" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                  <rect width="14" height="14" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_25_2721)">
                  <path d="M7.00004 11.2875C8.18615 10.1986 9.06601 9.20933 9.63963 8.31975C10.2132 7.43017 10.5 6.64024 10.5 5.94996C10.5 4.89024 10.1622 4.02253 9.4865 3.34683C8.8108 2.67114 7.98199 2.33329 7.00004 2.33329C6.0181 2.33329 5.18928 2.67114 4.51358 3.34683C3.83789 4.02253 3.50004 4.89024 3.50004 5.94996C3.50004 6.64024 3.78685 7.43017 4.36046 8.31975C4.93407 9.20933 5.81393 10.1986 7.00004 11.2875ZM7.00004 12.4395C6.86393 12.4395 6.72782 12.4152 6.59171 12.3666C6.4556 12.318 6.33407 12.2451 6.22712 12.1479C5.59518 11.5645 5.03615 10.9958 4.55004 10.4416C4.06393 9.88746 3.65803 9.35031 3.33233 8.83017C3.00664 8.31003 2.75872 7.80933 2.58858 7.32808C2.41844 6.84683 2.33337 6.38746 2.33337 5.94996C2.33337 4.49163 2.80247 3.32982 3.74067 2.46454C4.67886 1.59926 5.76532 1.16663 7.00004 1.16663C8.23476 1.16663 9.32122 1.59926 10.2594 2.46454C11.1976 3.32982 11.6667 4.49163 11.6667 5.94996C11.6667 6.38746 11.5816 6.84683 11.4115 7.32808C11.2414 7.80933 10.9934 8.31003 10.6677 8.83017C10.3421 9.35031 9.93615 9.88746 9.45004 10.4416C8.96393 10.9958 8.4049 11.5645 7.77296 12.1479C7.66601 12.2451 7.54449 12.318 7.40837 12.3666C7.27226 12.4152 7.13615 12.4395 7.00004 12.4395ZM7.00004 6.99996C7.32087 6.99996 7.59553 6.88572 7.824 6.65725C8.05247 6.42878 8.16671 6.15413 8.16671 5.83329C8.16671 5.51246 8.05247 5.23781 7.824 5.00933C7.59553 4.78086 7.32087 4.66663 7.00004 4.66663C6.67921 4.66663 6.40455 4.78086 6.17608 5.00933C5.94761 5.23781 5.83337 5.51246 5.83337 5.83329C5.83337 6.15413 5.94761 6.42878 6.17608 6.65725C6.40455 6.88572 6.67921 6.99996 7.00004 6.99996Z" fill="#1AD57B"/>
                </g>
              </svg>
              <span>Yaba, Lagos</span>
            </Pill>
          </div>

          <div>
            <h2 class="text-primary font-bold text-xl">Healthy</h2>
            <p class="text-xs text-[#959595]">Updated just now</p>
          </div>
          
          <div class="flex justify-between">
            <Pill class="border-none !p-0">
              <span class="h-1 w-1 bg-primary"></span>
              <span class="text-lg font-bold text-[#363737]">40.2</span>
              <span class="text-[10px] text-[#959595]">AQI</span>
            </Pill>
            <Pill class="border-none !p-0">
              <span class="h-1 w-1 bg-primary/80"></span>
              <span class="text-lg font-bold text-[#363737]">9.8</span>
              <span class="text-[10px] text-[#959595]">PM 2.5</span>
            </Pill>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#F6F6F6] rounded-2xl p-4 mt-2">
      <header class="flex justify-between">
        <h2 class="text-sm text-[#363737]">Average Today’s Air Quality</h2>
        <Pill class="border-none bg-primary/10 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <mask id="mask0_25_2744" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
              <rect width="14" height="14" fill="#1AD57B"/>
            </mask>
            <g mask="url(#mask0_25_2744)">
              <path d="M1.57498 10.2812C1.45832 10.1646 1.40241 10.026 1.40727 9.86562C1.41214 9.7052 1.46804 9.57152 1.57498 9.46458L4.65207 6.34374C4.87568 6.12013 5.15276 6.00833 5.48332 6.00833C5.81387 6.00833 6.09095 6.12013 6.31457 6.34374L7.81665 7.86041L10.85 4.85624H9.91665C9.75137 4.85624 9.61283 4.80034 9.50102 4.68853C9.38922 4.57673 9.33332 4.43819 9.33332 4.27291C9.33332 4.10763 9.38922 3.96909 9.50102 3.85728C9.61283 3.74548 9.75137 3.68958 9.91665 3.68958H12.25C12.4153 3.68958 12.5538 3.74548 12.6656 3.85728C12.7774 3.96909 12.8333 4.10763 12.8333 4.27291V6.60624C12.8333 6.77152 12.7774 6.91006 12.6656 7.02187C12.5538 7.13367 12.4153 7.18958 12.25 7.18958C12.0847 7.18958 11.9462 7.13367 11.8344 7.02187C11.7226 6.91006 11.6666 6.77152 11.6666 6.60624V5.67291L8.6479 8.69166C8.42429 8.91527 8.1472 9.02708 7.81665 9.02708C7.48609 9.02708 7.20901 8.91527 6.9854 8.69166L5.48332 7.18958L2.39165 10.2812C2.2847 10.3882 2.14859 10.4417 1.98332 10.4417C1.81804 10.4417 1.68193 10.3882 1.57498 10.2812Z" fill="currentColor"/>
            </g>
          </svg>
          <span class="text-[10px]">16%</span>
        </Pill>
      </header>
      <main class="mt-3">
        <apexchart width="100%" :options="arearadialChartOptions" :series="areaChartSeries" type="area" />
      </main>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Pill from "@/components/Pill.vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon, ArrowUpOnSquareIcon } from '@heroicons/vue/20/solid'

// listbox
const dates_ = [
  { name: 'today' },
  { name: 'yesterday' },
  { name: 'this week' },
]
const selectedDate = ref(dates_[0])

// first chart
const radialChartOptions = {
  chart: {
    type: "radialBar",
  },
  series: [67, 20],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#293450"
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#fff",
          fontSize: "12px"
        },
        value: {
          color: "#fff",
          fontSize: "30px",
          show: true
        }
      }
    },
    stroke: {
      lineCap: "round",
      width: 2, // Set the desired thickness for the chart line
      curve: 'smooth', // Set the curve type to 'smooth' for smoother lines
    },
    // fill: {
    //   type: "gradient",
    //   gradient: {
    //     shade: "dark",
    //     type: "vertical",
    //     gradientToColors: ["#87D4F9"],
    //     stops: [0, 100]
    //   }
    // },
    colors: ['#1AD57B', '#1AD57B80'], // Set custom colors for each series
  },
  labels: ["Progress"]
};

// second chart
const arearadialChartOptions = ref({
  chart: {
    type: 'area',
    stacked: true,
    toolbar: {
      show: false, // Set this to false to hide the toolbar
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  legend: {
    show: false, // Set this to false to hide the legend
  },
  dataLabels: {
    enabled: false, // Set this to false to hide the labels at each point
  },
  stroke: {
    width: 2, // Set the desired thickness for the chart line
    curve: 'smooth', // Set the curve type to 'smooth' for smoother lines
  },
  colors: ['#FBA018', '#1AD57B'], // Set custom colors for each series
  annotations: {
    points: [
      // Add labels to specific data points
      {
        x: 'Feb',
        y: 49,
        marker: {
          size: 2,
          fillColor: '#FF5733',
          strokeColor: '#FF5733',
        },
        label: {
          borderColor: '#FF5733',
          style: {
            fontSize: '12px',
            color: '#000',
          },
          text: 'Point A',
        },
      },
      {
        x: 'May',
        y: 80,
        marker: {
          size: 2,
          fillColor: '#3399FF',
          strokeColor: '#3399FF',
        },
        label: {
          borderColor: '#3399FF',
          style: {
            fontSize: '12px',
            color: '#000',
          },
          text: 'Point B',
        },
      },
    ],
  },
})
const areaChartSeries = ref([
  {
    name: 'Series A',
    data: [0, 40, 35, 50, 49, 0],
  },
  {
    name: 'Series B',
    data: [0, 30, 25, 40, 39, 0],
  },
]);
</script>