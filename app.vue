<template>
  <div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="flex h-screen flex-col justify-between">
      <div class="container mx-auto">
        <Header />
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
                    href="/tags/react/pages/1"
                    >react</a
                  ><a
                    class="flex justify-center items-center mr-3 px-3 h-6 text-sm bg-slate-100 font-medium uppercase text-customGreen rounded-2xl hover:bg-slate-50"
                    href="/tags/javascript/pages/1"
                    >javascript</a
                  ><a
                    class="flex justify-center items-center mr-3 px-3 h-6 text-sm bg-slate-100 font-medium uppercase text-customGreen rounded-2xl hover:bg-slate-50"
                    href="/tags/typescript/pages/1"
                    >typescript</a
                  ><a
                    class="flex justify-center items-center mr-3 px-3 h-6 text-sm bg-slate-100 font-medium uppercase text-customGreen rounded-2xl hover:bg-slate-50"
                    href="/tags/book/pages/1"
                    >book</a
                  >
                </div>
                <div class="flex mt-6 text-sm text-gray-500 font-normal">
                  <span>2022년 1월 27일</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <button
          @click="
            createPost({
              title: '새로운 포스트22',
              content: '새로운 여정',
            })
          "
        >
          글 작성 버튼
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const posts = ref([]);
const fetchPosts = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/posts');
    posts.value = res.data;
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
  }
};

onMounted(fetchPosts);

const createPost = async (post) => {
  try {
    const res = await axios.post('http://localhost:3000/api/posts', post);
    console.log('생성된 포스트:', res.data);
  } catch (error) {
    console.error('포스트 작성 중 오류 발생:', error);
  }
};
</script>
