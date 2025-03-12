<template>
  <section class="py-8 md:py-12 xl:py-16 bg-gray-100">
    <UContainer>
    <h2 class="uppercase text-2xl font-bold text-blue-900">What does the LMS offer?</h2>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
      <UCard :ui="{ shadow: '' }">
        <h3 class="font-bold">Structure Self-Paced Courses</h3>
        <p>Organized lessons that let you learn at your own pace.</p>
      </UCard>
      <UCard :ui="{ shadow: '' }">
        <h3 class="font-bold">Expert-led Traning Programs</h3>
        <p>Interactive sessions led by industry professionals.</p>
      </UCard>
      <UCard :ui="{ shadow: '' }">
        <h3 class="font-bold">Interactive Learning Materials</h3>
        <p>Engaging multimedia content that keeps you involved such as videos, PDFs, quizzes, etc.</p>
      </UCard>
      <UCard :ui="{ shadow: '' }">
        <h3 class="font-bold">Recognized Certifications for Skill Enhancement</h3>
        <p>Accredited credentials that boost your career prospects.</p>
      </UCard>
    </div>
    </UContainer>
  </section>
</template>
