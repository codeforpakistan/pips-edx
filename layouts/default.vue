<script setup lang="ts">
const links = [{
  label: 'Courses',
  to: '/courses'
}, {
  label: 'Programs',
  to: '/programs'
}]
</script>
<template>
  <article>
    <header>
      <UContainer class="flex flex-row">
        <SiteTitle class="py-2 me-5" />
        <UHorizontalNavigation :links="links" :ui="{ wrapper: 'relative w-auto flex items-center justify-between grow' }" />
        <div class="flex items-center gap-1">
          <!-- <theme-toggle /> -->
          <UButton color="white" label="Register for free" size="xl" />
          <UButton color="blue" label="Sign in" size="xl" />
        </div>
      </UContainer>
    </header>
    <UDivider orientation="horizontal" />
    <main>
      <slot />
    </main>
    <UDivider orientation="horizontal" />
    <footer class="py-4 sm:py-6 lg:py-8">
      <UContainer>
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 lg:col-span-4 flex gap-4 items-center grow">
            <span>Powered by:</span>
            <ULink to="https://docs.tutor.edly.io" target="_blank">
              <img src="~/assets/tutor.png" alt="Runs on Tutor" width="57">
            </ULink>
            <ULink to="https://open.edx.org" target="_blank">
              <img src="~/assets/openedx.png" alt="Powered by Open edX" width="79">
            </ULink>
          </div>
          <nav class="col-span-12 lg:col-span-8 lg:text-right">
            <ULink class="me-2" to="/about">About Us</ULink>
            <ULink class="mx-2" to="/blog">Blog</ULink>
            <ULink class="mx-2" to="/donate">Donate</ULink>
            <ULink class="mx-2" to="/terms">Terms of Sevice</ULink>
            <ULink class="mx-2" to="/privacy">Privacy Policy</ULink>
            <ULink class="mx-2" to="/help">Help</ULink>
            <ULink class="ms-2" to="/contact">Contact Us</ULink>
          </nav>
        </div>
        <p class="my-4">Copyrights ©2025. All Rights Reserved.</p>
      </UContainer>
    </footer>
  </article>
</template>
