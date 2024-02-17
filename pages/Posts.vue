<template>
  <div>
    <ul role="list" class="divide-y divide-gray-100">
      <li v-for="post in posts" :key="post.id" class="py-10">
        <div class="flex min-w-0 gap-x-4">
          <div class="min-w-0 flex-auto">
            <h2 class="text-2xl font-bold leading-8 tracking-tight">
              <a class="text-gray-900">
                {{ post.title }}
              </a>
            </h2>
            <p class="mt-3 prose max-w-none text-base text-gray-600">
              {{ post.content }}
            </p>
            <div class="flex flex-wrap mt-6">
              <a
                class="flex justify-center items-center mr-3 px-3 h-6 text-sm bg-slate-100 font-medium uppercase text-customGreen rounded-2xl hover:bg-slate-50"
                >react</a
              ><a
                class="flex justify-center items-center mr-3 px-3 h-6 text-sm bg-slate-100 font-medium uppercase text-customGreen rounded-2xl hover:bg-slate-50"
                >javascript</a
              ><a
                class="flex justify-center items-center mr-3 px-3 h-6 text-sm bg-slate-100 font-medium uppercase text-customGreen rounded-2xl hover:bg-slate-50"
                >typescript</a
              ><a
                class="flex justify-center items-center mr-3 px-3 h-6 text-sm bg-slate-100 font-medium uppercase text-customGreen rounded-2xl hover:bg-slate-50"
                >book</a
              >
            </div>
            <div class="flex mt-6 text-sm text-gray-400 font-normal">
              <span>2022년 1월 27일</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// import { useAsyncData } from '#app';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import type { Post } from '~/types/posts';

const posts = ref<Post[]>([]);
const fetchPosts = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/posts');
    posts.value = res.data;
    return res.data;
  } catch (error) {
    console.error('Fetch Posts Error: ', error);
    return [];
  }
};
onMounted(fetchPosts);
// const { data: posts } = await useAsyncData('posts', () => fetchPosts());
</script>

<style scoped></style>
