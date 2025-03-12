<template>
  <section class="py-4 md:py-8 xl:py-16 text-center bg-gray-100">
    <UContainer>
    <h2 class="uppercase text-2xl font-bold text-blue-900">Acknowledgment & Future Vision</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      <UCard :ui="{ shadow: '' }">
        <h3 class="md:text-2xl text-left">Recognition of contributors, facilitators, and development partners</h3>
      </UCard>
      <UCard :ui="{ shadow: '' }">
        <h3 class="md:text-2xl text-left">Commitment to continuous growth with additional courses and training opportunities</h3>
      </UCard>
    </div>
    <UButton size="xl" color="blue" class="mx-auto" to="/courses">Start Learning Today!</UButton>
    </UContainer>
  </section>
</template>
