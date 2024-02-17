<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-white">
    <div class="mx-auto max-w-7xl">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-8 w-8" aria-hidden="true" />
            <XMarkIcon v-else class="block h-8 w-8" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <div class="hidden md:flex items-center justify-between">
            <svg
              class="w-7 h-7 mr-4 md:block"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 192 192"
            >
              <path
                fill-rule="evenodd"
                d="M24 0h144c13.255 0 24 10.745 24 24v144c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V24C0 10.745 10.745 0 24 0Zm25 57.92v7.56h18l13.68 77.04 17.82-1.26c17.52-22.2 29.34-38.82 35.46-49.86 6.24-11.16 9.36-20.46 9.36-27.9 0-4.44-1.32-7.8-3.96-10.08-2.52-2.28-5.7-3.42-9.54-3.42-7.2 0-13.2 3.06-18 9.18 4.68 3.12 7.86 5.7 9.54 7.74 1.8 1.92 2.7 4.5 2.7 7.74 0 5.4-1.62 11.52-4.86 18.36-3.12 6.84-6.54 12.9-10.26 18.18-2.4 3.36-5.46 7.5-9.18 12.42L88.06 57.2c-.96-4.8-3.96-7.2-9-7.2-2.28 0-6.66.96-13.14 2.88-6.48 1.8-12.12 3.48-16.92 5.04Z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="w-20 h-7 text-xl font-notosansmono font-semibold">
              zzznly.log
            </div>
          </div>
        </div>
        <div class="flex space-x-8 items-center justify-center">
          <div class="md:flex md:space-x-8 hidden">
            <NuxtLink
              v-for="{ name, href } in navigation"
              :key="name"
              :to="href"
              :class="[
                route.name === name
                  ? 'bg-white text-gray-900 font-bold'
                  : 'text-gray-900',
                'font-medium',
              ]"
              :aria-current="route.name === name ? 'page' : undefined"
              >{{ name }}
            </NuxtLink>
          </div>
          <button
            type="button"
            class="flex items-center justify-center h-8 px-4 rounded-full outline outline-1 outline-offset-0 outline-black text-sm font-semibold bg-white text-black hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in"
            @click="createPost"
          >
            새 글 작성
          </button>
        </div>
        <!-- Buttons -->
        <!-- <button
          class="flex items-center justify-center w-10 h-10 mr-1 rounded-full hover:bg-gray-200"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 19v-2h2v-7c0-1.383.417-2.612 1.25-3.688.833-1.075 1.917-1.779 3.25-2.112v-.7c0-.417.146-.77.438-1.063A1.447 1.447 0 0 1 12 2c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062v.7c1.333.333 2.417 1.037 3.25 2.112C17.583 7.388 18 8.617 18 10v7h2v2H4Zm8 3c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 10 20h4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 22Zm-4-5h8v-7c0-1.1-.392-2.042-1.175-2.825C14.042 6.392 13.1 6 12 6s-2.042.392-2.825 1.175C8.392 7.958 8 8.9 8 10v7Z"
            />
          </svg>
        </button>
        <button
          class="flex items-center justify-center w-10 h-10 mr-1 rounded-full hover:bg-gray-200"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m19.326 20.712-5.809-5.808a5.693 5.693 0 0 1-1.765.98 6.394 6.394 0 0 1-2.133.354c-1.849 0-3.414-.64-4.697-1.923C3.641 13.033 3 11.468 3 9.619c0-1.849.637-3.414 1.91-4.697C6.183 3.641 7.744 3 9.593 3c1.866 0 3.44.64 4.723 1.922 1.282 1.283 1.922 2.848 1.922 4.697 0 .75-.117 1.46-.352 2.132a6.052 6.052 0 0 1-.982 1.793l5.834 5.808a.888.888 0 0 1 .262.654c0 .261-.096.497-.288.706a.944.944 0 0 1-.693.288.945.945 0 0 1-.693-.288Zm-9.707-6.436c1.29 0 2.39-.453 3.297-1.36s1.36-2.006 1.36-3.297c0-1.308-.453-2.411-1.36-3.31-.907-.898-2.006-1.347-3.297-1.347-1.308 0-2.411.45-3.309 1.347-.898.899-1.348 2.002-1.348 3.31 0 1.29.45 2.39 1.348 3.297.898.907 2.001 1.36 3.31 1.36Z"
            />
          </svg>
        </button> -->
        <!-- <button
          type="button"
          class="h-8 inline-flex items-center rounded-full outline outline-1 outline-offset-0 outline-black bg-black px-4 text-sm font-semibold text-white hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in"
        >
          로그인
        </button> -->
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            route.name === item.name
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import axios from 'axios';

const navigation = [
  { name: 'Posts', href: '/posts' },
  { name: 'Tags', href: '/tags' },
  { name: 'About', href: '/' },
];
const route = useRoute();

const createPost = async () => {
  try {
    await axios.post('http://localhost:3000/api/posts', {
      title: 'test',
      content: 'test',
    });
  } catch (err) {
    console.log('Create Post Error: ', err);
  }
};
</script>
