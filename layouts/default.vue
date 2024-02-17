<template>
  <div
    class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 font-notosanskr"
  >
    <div class="flex h-screen flex-col justify-between">
      <div class="container mx-auto">
        <Header />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
