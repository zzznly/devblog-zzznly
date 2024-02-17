<template>
  <div class="mx-auto py-10 text-center">
    <h2 class="text-3xl">Login Page</h2>
    <p class="mt-2 text-sm">로그인 페이지입니다</p>
    <GoogleSignInButton
      @success="handleLoginSuccess"
      @error="handleLoginError"
    />
  </div>
</template>

<script setup lang="ts">
// handle success event
const handleLoginSuccess = async (response: any) => {
  const { credential } = response;
  // localStorage.setItem('Access Token', credential);
  if (!credential) return;
  const user = await $fetch('http://localhost:3000/api/google-login', {
    method: 'POST',
    body: {
      token: credential,
    },
  });
  console.log('user: ', user);
};

// handle an error event
const handleLoginError = () => {
  console.error('Login failed');
};
</script>

<style scoped></style>
