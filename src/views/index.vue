<template>
  <div class="pt-2 px-5">
    <h1 class="text-xl text-[#151A19] font-bold">Let’s Breathe Freshly!</h1>
    <p class="text-sm text-[#959595]">The air today is pleasant to breathe. 😊</p>

    <section class="mt-7 flex justify-between">
      <Listbox v-model="selectedDate" class="relative z-10">
        <div class="relative mt-1">
          <ListboxButton
            class="relative cursor-default rounded-full py-2 capitalize text-xs
            pl-3 pr-8 text-left focus:outline-none bg-primary text-white
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
                    active ? 'text-primary bg-primary/5' : 'text-gray-900',
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
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
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

    <section class="mt-4 border border-[#F0F0F0] rounded-2xl">
      <apexchart
        height="200"
        :type="chartOptions.chart.type"
        :colors="chartOptions.colors"
        :fill="chartOptions.fill"
        :stroke="chartOptions.stroke"
        :series="chartOptions.series"
        :options="chartOptions.plotOptions"
        :labels="chartOptions.labels"
      ></apexchart>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
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