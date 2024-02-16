<template>
  <div>
    <Header />
    <ul role="list" class="divide-y divide-gray-100">
      <li
        v-for="post in posts"
        :key="post.id"
        class="flex justify-between gap-x-6 py-5"
      >
        <div class="flex min-w-0 gap-x-4">
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              {{ post.title }}
            </p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              {{ post.content }}
            </p>
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
