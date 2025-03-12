<template>
  <article class="py-8 md:py-12 xl:py-16">
    <UContainer class="mb-8">
      <h1 class="text-2xl font-bold uppercase text-blue-900 mb-8">Our Partners & Contributors</h1>
      <p class="text-lg">We would like to thank all our partners and contributors in this venture.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <UCard :ui="{ background: 'bg-gray-100', shadow: '' }">
          <img src="~/assets/undp.svg" alt="Learning" class="w-32 h-32 mx-auto" />
          <h5 class="text-2xl font-bold text-center">UNDP</h5>
          <p class="text-center">For Supporting policy & capacity building</p>
        </UCard>
        <UCard :ui="{ background: 'bg-gray-100', shadow: '' }">
          <img src="~/assets/cfp.svg" alt="Learning" class="w-32 h-32 mx-auto" />
          <h5 class="text-2xl font-bold text-center">Code for Pakistan</h5>
          <p class="text-center">For Providing technical support</p>
        </UCard>
        <UCard :ui="{ background: 'bg-gray-100', shadow: '' }">
          <img src="~/assets/certificate.svg" alt="Learning" class="w-32 h-32 mx-auto" />
          <h5 class="text-2xl font-bold text-center">Team Members &amp; Content Contributors </h5>
          <p class="text-center">Names and Roles</p>
        </UCard>
      </div>
    </UContainer>
  </article>
</template>