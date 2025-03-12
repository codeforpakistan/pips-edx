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
        <ULink to="/">
          <img src="~/assets/logo.svg" class="py-2 me-5" alt="PIPS eLearing Platform" width="144" height="48">
        </ULink>
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
    <footer class="py-4 sm:py-6 lg:py-8 text-sm">
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
            <ULink class="mx-2" to="/contributors">Contributors</ULink>
            <ULink class="mx-2" to="/terms">Terms of Service</ULink>
            <ULink class="mx-2" to="/privacy">Privacy Policy</ULink>
            <ULink class="mx-2" to="/help">Help</ULink>
            <ULink class="ms-2" to="/contact">Contact Us</ULink>
          </nav>
          <p class="col-span-12 lg:col-span-8 lg:my-4">&copy; 2025, All Rights Reserved. Pakistan Institute for Parliamentary Services (PIPS)<br>Disclaimer: This platform is an initiative by PIPS to provide online learning resources.</p>
          <p class="col-span-12 lg:col-span-4 lg:my-4 lg:text-right">
            <UButton variant="ghost" to="https://twitter.com/PIPS_GOV">
              <img src="~/assets/twitter.svg" class="w-5 h-5" /></UButton>
            <UButton variant="ghost" to="https://www.instagram.com/pips_gov">
                <img src="~/assets/instagram.svg" class="w-5 h-5" /></UButton>
              </p>
        </div>
      </UContainer>
    </footer>
  </article>
</template>
