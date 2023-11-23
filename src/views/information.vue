<template>
  <div>
    <!-- <apexchart
      :type="chartOptions.chart.type"
      :colors="chartOptions.colors"
      :fill="chartOptions.fill"
      :stroke="chartOptions.stroke"
      :series="chartOptions.series"
      :options="chartOptions.plotOptions"
      :labels="chartOptions.labels"
    ></apexchart> -->

    <p class="text-4xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia a laudantium voluptatem fugit officiis possimus, doloribus velit. Reiciendis expedita id beatae libero, quaerat assumenda officia asperiores pariatur debitis, reprehenderit autem voluptas, ea repellat culpa doloribus qui provident porro veritatis quidem at atque dolorum optio nemo molestiae. Laboriosam atque sed magni.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
</script>