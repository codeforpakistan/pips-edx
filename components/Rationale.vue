<template>
  <section class="p-4 md:p-8 xl:p-16 bg-gray-100">
    <UContainer class="py-4 md:py-8 xl:py-16">
      <h2 class="uppercase text-2xl xl:text-4xl font-bold xl:text-center text-blue-900">Why this platform?</h2>
      <p class="xl:text-2xl my-4 xl:mb-16 xl:text-center">PIPS E-Learning Portal empowers parliamentarians, legislative
        staff, and professionals with high-quality training and knowledge resources to enhance their governance,
        research, and policymaking expertise.</p>

      <h3 class="uppercase text-2l xl:text-2xl font-bold xl:text-center">Key Features</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 xl:mt-8">
        <UCard :ui="{ shadow: '' }">
          <img src="~/assets/learning.svg" alt="Learning" class="w-32 h-32 mx-auto" />
          <h5 class="text-2xl font-bold text-center">Flexible Learning</h5>
          <p class="text-xl text-center">Learn at your own pace</p>
        </UCard>
        <UCard :ui="{ shadow: '' }">
          <img src="~/assets/faculty.svg" alt="Learning" class="w-32 h-32 mx-auto" />
          <h5 class="text-2xl font-bold text-center">Expert Faculty</h5>
          <p class="text-xl text-center">Training from experienced professionals</p>
        </UCard>
        <UCard :ui="{ shadow: '' }">
          <img src="~/assets/certificate.svg" alt="Learning" class="w-32 h-32 mx-auto" />
          <h5 class="text-2xl font-bold text-center">Certification</h5>
          <p class="text-xl text-center">Recognized training programs</p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
