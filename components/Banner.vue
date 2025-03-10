<template>
  <section class="p-8 md:p-12 xl:p-16 banner text-white flex items-center">
    <UContainer class="py-8 md:py-12 xl:py-16 grow">
      <div class="w-8/12">
        <p class="uppercase text-2xl font-bold">Pakistan Institute for Parliamentary Services</p>
        <h1 class="text-6xl font-bold my-16">Empowering Learning,<br />Strengthening Governance</h1>
        <p class="text-2xl">An initiative by the <strong>Pakistan Institute for Parliamentary Services</strong> to
          provide accessible digital learning resources</p>
        <p class="mt-8">
          <UButton color="blue" size="xl" label="Start Learning"></UButton> <UButton color="blue" size="xl" label="About PIPS LMS"></UButton>
        </p>
      </div>
    </UContainer>
  </section>
</template>
<style scoped>
.banner {
  background-image: url('~/assets/banner.jpg');
  background-size: cover;
  background-position: center center;
}
</style>