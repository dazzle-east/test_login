<template>
  <div class="min-h-screen flex items-center justify-center p-6 bg-gray-50">
  <div class="sm:max-w-md w-full">
    <LoginForm/>
    <Button class="mt-4 w-full" variant="outline">
      返回首页
    </Button>
  </div>
  </div>
</template>
<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import LoginForm from "@/components/LoginForm.vue";
import {userouter} from 'vue-router';
const router = userouter();
const goHome = () => {
  router.push('/');
};
</script>
<script lang="ts">
export const description = "A simple login form.";
</script>
<style scoped></style>
