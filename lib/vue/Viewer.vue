<script setup lang="ts">
import { defineExpose, defineProps, onMounted, ref, useTemplateRef } from 'vue';
import { Viewer, ViewerOptions } from '../main';

let book: Viewer;

const props = defineProps<{ options?: Partial<ViewerOptions> }>();
const currentPage = ref(0);

const options: Partial<ViewerOptions> = {
  ...props.options,
  hooks: {
    onPageUpdate: (page: number) => {
      currentPage.value = page;
    },
  },
};

const dom = useTemplateRef('book');

onMounted(() => {
  if (!dom.value) return new Error('Viewer: dom is not found');
  book = new Viewer(dom.value, options);
  book.mount();
});

defineExpose({
  next: () => book.next(),
  previous: () => book.previous(),
  page: currentPage.value, // In the future, we can control the current page but now it's read-only.
});
</script>

<template>
  <div ref="book"></div>
</template>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
