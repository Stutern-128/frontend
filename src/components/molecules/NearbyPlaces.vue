<template>
  <section class="p-4 bg-[#F6F6F6]">
    <header class="text-[#151A19] font-bold text-xl">Similar places</header>
    <main class="mt-2 grid grid-cols-2 gap-2">
      <SimilarPlacesCard>
        <div class="flex flex-col justify-between items-start gap-2 h-full">
          <span class="text-[#D3FCF4] text-[10px] block">Updated just now</span>
          <Pill class="text-[#F87226] bg-white">
            <svg class="text-primary-dark" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <mask id="mask0_25_2721" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                <rect width="14" height="14" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_25_2721)">
                <path d="M7.00004 11.2875C8.18615 10.1986 9.06601 9.20933 9.63963 8.31975C10.2132 7.43017 10.5 6.64024 10.5 5.94996C10.5 4.89024 10.1622 4.02253 9.4865 3.34683C8.8108 2.67114 7.98199 2.33329 7.00004 2.33329C6.0181 2.33329 5.18928 2.67114 4.51358 3.34683C3.83789 4.02253 3.50004 4.89024 3.50004 5.94996C3.50004 6.64024 3.78685 7.43017 4.36046 8.31975C4.93407 9.20933 5.81393 10.1986 7.00004 11.2875ZM7.00004 12.4395C6.86393 12.4395 6.72782 12.4152 6.59171 12.3666C6.4556 12.318 6.33407 12.2451 6.22712 12.1479C5.59518 11.5645 5.03615 10.9958 4.55004 10.4416C4.06393 9.88746 3.65803 9.35031 3.33233 8.83017C3.00664 8.31003 2.75872 7.80933 2.58858 7.32808C2.41844 6.84683 2.33337 6.38746 2.33337 5.94996C2.33337 4.49163 2.80247 3.32982 3.74067 2.46454C4.67886 1.59926 5.76532 1.16663 7.00004 1.16663C8.23476 1.16663 9.32122 1.59926 10.2594 2.46454C11.1976 3.32982 11.6667 4.49163 11.6667 5.94996C11.6667 6.38746 11.5816 6.84683 11.4115 7.32808C11.2414 7.80933 10.9934 8.31003 10.6677 8.83017C10.3421 9.35031 9.93615 9.88746 9.45004 10.4416C8.96393 10.9958 8.4049 11.5645 7.77296 12.1479C7.66601 12.2451 7.54449 12.318 7.40837 12.3666C7.27226 12.4152 7.13615 12.4395 7.00004 12.4395ZM7.00004 6.99996C7.32087 6.99996 7.59553 6.88572 7.824 6.65725C8.05247 6.42878 8.16671 6.15413 8.16671 5.83329C8.16671 5.51246 8.05247 5.23781 7.824 5.00933C7.59553 4.78086 7.32087 4.66663 7.00004 4.66663C6.67921 4.66663 6.40455 4.78086 6.17608 5.00933C5.94761 5.23781 5.83337 5.51246 5.83337 5.83329C5.83337 6.15413 5.94761 6.42878 6.17608 6.65725C6.40455 6.88572 6.67921 6.99996 7.00004 6.99996Z" fill="currentColor"/>
              </g>
            </svg>
            <span>Ajah, Lagos</span>
          </Pill>
          <h3 class="text-xl font-bold text-white">Healthy</h3>
          <div class="flex justify-between text-white w-full">
            <Pill class="border-none !p-0">
              <span class="h-1 w-1 bg-primary"></span>
              <span class="text-lg font-bold">40.2</span>
              <span class="text-[10px]">AQI</span>
            </Pill>
            <Pill class="border-none !p-0">
              <span class="h-1 w-1 bg-primary/80"></span>
              <span class="text-lg font-bold">9.8</span>
              <span class="text-[10px]">PM 2.5</span>
            </Pill>
          </div>
        </div>
      </SimilarPlacesCard>
      <SimilarPlacesCard>
        <div class="flex flex-col justify-between items-start gap-2 h-full">
          <span class="text-[#D3FCF4] text-[10px] block">Updated just now</span>
          <Pill class="text-[#F87226] bg-white">
            <svg class="text-primary-dark" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <mask id="mask0_25_2721" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                <rect width="14" height="14" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_25_2721)">
                <path d="M7.00004 11.2875C8.18615 10.1986 9.06601 9.20933 9.63963 8.31975C10.2132 7.43017 10.5 6.64024 10.5 5.94996C10.5 4.89024 10.1622 4.02253 9.4865 3.34683C8.8108 2.67114 7.98199 2.33329 7.00004 2.33329C6.0181 2.33329 5.18928 2.67114 4.51358 3.34683C3.83789 4.02253 3.50004 4.89024 3.50004 5.94996C3.50004 6.64024 3.78685 7.43017 4.36046 8.31975C4.93407 9.20933 5.81393 10.1986 7.00004 11.2875ZM7.00004 12.4395C6.86393 12.4395 6.72782 12.4152 6.59171 12.3666C6.4556 12.318 6.33407 12.2451 6.22712 12.1479C5.59518 11.5645 5.03615 10.9958 4.55004 10.4416C4.06393 9.88746 3.65803 9.35031 3.33233 8.83017C3.00664 8.31003 2.75872 7.80933 2.58858 7.32808C2.41844 6.84683 2.33337 6.38746 2.33337 5.94996C2.33337 4.49163 2.80247 3.32982 3.74067 2.46454C4.67886 1.59926 5.76532 1.16663 7.00004 1.16663C8.23476 1.16663 9.32122 1.59926 10.2594 2.46454C11.1976 3.32982 11.6667 4.49163 11.6667 5.94996C11.6667 6.38746 11.5816 6.84683 11.4115 7.32808C11.2414 7.80933 10.9934 8.31003 10.6677 8.83017C10.3421 9.35031 9.93615 9.88746 9.45004 10.4416C8.96393 10.9958 8.4049 11.5645 7.77296 12.1479C7.66601 12.2451 7.54449 12.318 7.40837 12.3666C7.27226 12.4152 7.13615 12.4395 7.00004 12.4395ZM7.00004 6.99996C7.32087 6.99996 7.59553 6.88572 7.824 6.65725C8.05247 6.42878 8.16671 6.15413 8.16671 5.83329C8.16671 5.51246 8.05247 5.23781 7.824 5.00933C7.59553 4.78086 7.32087 4.66663 7.00004 4.66663C6.67921 4.66663 6.40455 4.78086 6.17608 5.00933C5.94761 5.23781 5.83337 5.51246 5.83337 5.83329C5.83337 6.15413 5.94761 6.42878 6.17608 6.65725C6.40455 6.88572 6.67921 6.99996 7.00004 6.99996Z" fill="currentColor"/>
              </g>
            </svg>
            <span>VI, Lagos</span>
          </Pill>
          <h3 class="text-xl font-bold text-white">Healthy</h3>
          <div class="flex justify-between text-white w-full">
            <Pill class="border-none !p-0">
              <span class="h-1 w-1 bg-primary"></span>
              <span class="text-lg font-bold">40.2</span>
              <span class="text-[10px]">AQI</span>
            </Pill>
            <Pill class="border-none !p-0">
              <span class="h-1 w-1 bg-primary/80"></span>
              <span class="text-lg font-bold">9.8</span>
              <span class="text-[10px]">PM 2.5</span>
            </Pill>
          </div>
        </div>
      </SimilarPlacesCard>
    </main>
  </section>
</template>

<script setup lang="ts">
import Pill from "@/components/Pill.vue";
import SimilarPlacesCard from "@/components/SimilarPlacesCard.vue";
</script>