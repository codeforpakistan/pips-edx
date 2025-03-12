<script setup lang="ts">
const isOpen = ref(false)
const links = [
  { label: 'Courses', to: '/courses'}, 
]
const nav = [[
  { label: 'Home', to: '/' }, 
  { label: 'Courses', to: '/courses' },
],[
  { label: 'Register Now', to: '/' }, 
  { label: 'Sign In', to: '/' }
]]
</script>
<template>
  <article>
    <header>
      <UContainer class="flex flex-row gap-2">
        <UButton icon="game-icons:hamburger-menu" class="flex md:hidden" color="white" variant="ghost" square @click="isOpen = true" />
        <ULink to="/">
          <img src="~/assets/logo.svg" class="py-2 me-5" alt="PIPS eLearing Platform" width="144" height="48">
        </ULink>
        <UHorizontalNavigation :links="links" class="hidden md:flex"
          :ui="{ wrapper: 'relative w-auto flex items-center justify-between grow' }" />
        <div class="md:flex items-center gap-2 hidden">
          <!-- <theme-toggle /> -->
          <UButton color="white" label="Register for free" size="xl" />
          <UButton color="blue" label="Sign in" size="xl" />
        </div>
      </UContainer>
      <USlideover v-model="isOpen" side="left">
        <UCard class="flex flex-col flex-1"
          :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                PIPS eLearning Platform
              </h3>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                @click="isOpen = false" />
            </div>
          </template>

          <UVerticalNavigation :links="nav" />
        </UCard>
      </USlideover>
    </header>
    <UDivider orientation="horizontal" />
    <main>
      <slot />
    </main>
    <UDivider orientation="horizontal" />
    <footer class="py-4 sm:py-6 xl:py-8 text-sm">
      <UContainer>
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 xl:col-span-4 flex gap-4 items-center grow">
            <span>Powered by:</span>
            <ULink to="https://docs.tutor.edly.io" target="_blank">
              <img src="~/assets/tutor.png" alt="Runs on Tutor" width="57">
            </ULink>
            <ULink to="https://open.edx.org" target="_blank">
              <img src="~/assets/openedx.png" alt="Powered by Open edX" width="79">
            </ULink>
          </div>
          <nav class="col-span-12 xl:col-span-8 xl:text-right">
            <ULink class="me-2" to="/about">About Us</ULink>
            <ULink class="mx-2" to="/contributors">Contributors</ULink>
            <ULink class="mx-2" to="/terms">Terms of Service</ULink>
            <ULink class="mx-2" to="/privacy">Privacy Policy</ULink>
            <ULink class="mx-2" to="/help">Help</ULink>
            <ULink class="ms-2" to="/contact">Contact Us</ULink>
          </nav>
          <p class="col-span-12 xl:col-span-8 xl:my-4">&copy; 2025, All Rights Reserved. Pakistan Institute for
            Parliamentary Services (PIPS)<br>Disclaimer: This platform is an initiative by PIPS to provide online
            learning
            resources.</p>
          <p class="col-span-12 xl:col-span-4 xl:my-4 xl:text-right">
            <UButton variant="ghost" to="https://twitter.com/PIPS_GOV">
              <img src="~/assets/twitter.svg" class="w-5 h-5" />
            </UButton>
            <UButton variant="ghost" to="https://www.instagram.com/pips_gov">
              <img src="~/assets/instagram.svg" class="w-5 h-5" />
            </UButton>
          </p>
        </div>
      </UContainer>
    </footer>
  </article>
</template>
