<template>
  <section class="py-8 md:py-12 xl:py-16 text-center">
    <UContainer>
    <h2 class="uppercase text-2xl font-bold text-blue-900">Who Can Benefit?</h2>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8 text-center">
      <UCard :ui="{ background: '', ring: '', shadow: '' }">
        <img src="~/assets/politician.svg" alt="Learning" class="w-32 h-32 mx-auto" />
        <h3 class="font-bold">Parliamentarians and Parliamentary Staff</h3>
      </UCard>
      <UCard :ui="{ background: '', ring: '', shadow: '' }">
        <img src="~/assets/official.svg" alt="Learning" class="w-32 h-32 mx-auto" />
        <h3 class="font-bold">Government Officers and Policy Experts</h3>
      </UCard>
      <UCard :ui="{ background: '', ring: '', shadow: '' }">
        <img src="~/assets/teacher.svg" alt="Learning" class="w-32 h-32 mx-auto" />
        <h3 class="font-bold">Researchers, Academics, and Students</h3>
      </UCard>
      <UCard :ui="{ background: '', ring: '', shadow: '' }">
        <img src="~/assets/student.svg" alt="Learning" class="w-32 h-32 mx-auto" />
        <h3 class="font-bold">Anyone interested in governance, law, and public policy</h3>
      </UCard>
    </div>
    </UContainer>
  </section>
</template>
