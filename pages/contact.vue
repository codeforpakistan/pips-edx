<script setup lang="ts">
const name = ref('')
const email = ref('')
const message = ref('')
const items = [{
  label: 'How do I enroll in a course?',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'What if I forget my password?',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Is certification provided for completed courses?',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}]
</script>
<template>
  <article class="py-8 md:py-12 xl:py-16">
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <form class="flex flex-col gap-1">
          <h1 class="text-2xl font-bold uppercase text-blue-900 mb-4">Contact Us</h1>
          <UInput size="xl" v-model="name" placeholder="Your name" />
          <UInput size="xl" v-model="email" placeholder="Email address" />
          <UInput size="xl" v-model="message" placeholder="Your message" />
          <UButton size="xl" label="Get in Touch" />
          <address class="mt-8">
            <p class="strong">Pakistan Institute for Parliamentary Services (PIPS)</p>
            <p class="">Services Road, Ataturk Avenue, Sector F-5/2, Islamabad</p>
            <p class="">Phone : +92 51 9091000, +92 51 9091111</p>
            <p class="">Fax: +92 51 9091507</p>
          </address>
        </form>
        <div>
          <h2 class="text-2xl font-bold uppercase text-blue-900 mb-4">Frequently Asked Questions</h2>
          <UAccordion :items="items" />
        </div>
      </div>
    </UContainer>
  </article>
</template>