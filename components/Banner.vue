<template>
  <section class="p-4 md:p-8 xl:p-16 banner text-white flex items-center">
    <UContainer class="py-4 md:py-8 xl:py-16 grow">
      <div class="md:w-8/12">
        <p class="uppercase xl:text-2xl font-bold">Pakistan Institute for Parliamentary Services</p>
        <h1 class="text-4xl xl:text-6xl font-bold my-8 xl:my-16">Empowering Learning,<br />Strengthening Governance</h1>
        <p class="text-lg xl:text-2xl">An initiative by the <strong>Pakistan Institute for Parliamentary Services</strong> to
          provide accessible digital learning resources</p>
        <p class="mt-8">
          <UButton class="me-1" color="blue" size="xl" to="/courses" label="Start Learning"></UButton>
          <UButton class="ms-1" color="blue" size="xl" to="/about" label="About PIPS LMS"></UButton>
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