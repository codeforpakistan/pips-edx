<template>
  <section class="p-4 md:p-8 xl:p-16 bg-gray-100">
    <UContainer class="py-4 md:py-8 xl:py-16">
      <h2 class="uppercase text-2xl xl:text-4xl font-bold xl:text-center text-blue-900">Supported by Our Partners</h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 my-16">
        <img src="~/assets/eu.svg" alt="Learning" class="h-32 mx-auto" />
        <img src="~/assets/giz.jpg" alt="Learning" class="h-32 mx-auto" />
        <img src="~/assets/undp.svg" alt="Learning" class="h-32 mx-auto" />
        <img src="~/assets/undp.svg" alt="Learning" class="h-32 mx-auto" />
        <img src="~/assets/cfp.svg" alt="Learning" class="h-32 mx-auto" />
      </div>
      <p class="text-center"><UButton label="See all contributors" to="/contributors" size="xl" color="green" /></p>
    </UContainer>
  </section>
</template>
