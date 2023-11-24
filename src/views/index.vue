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

      <button>share</button>
    </section>

    <section class="mt-4 h-[144px] border border-[#F0F0F0] rounded-2xl relative">
      <div class="absolute inset-0 flex justify-between p-4 [&>*]:w-full">
        <div class="relative">
          <div class="absolute flex items-center justify-center inset-0 pr-8">
            <apexchart
              width="200"
              :type="chartOptions.chart.type"
              :colors="chartOptions.colors"
              :fill="chartOptions.fill"
              :stroke="chartOptions.stroke"
              :series="chartOptions.series"
              :options="chartOptions.plotOptions"
              :labels="chartOptions.labels"
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
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'

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

const dates_ = [
  { name: 'today' },
  { name: 'yesterday' },
  { name: 'this week' },
]
const selectedDate = ref(dates_[0])
</script>