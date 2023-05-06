<template>
  <div style="width: 500px; height: 300px">
    <div ref="quillEditor"></div>
  </div>
  <el-button @click="xxx">提交</el-button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
const quillEditor = ref(null);
const options = {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
      [{ color: [] }, { background: [] }], // 文本颜色、背景色
      ['bold', 'italic', 'underline', 'strike'], // 加粗、斜体、下划线、删除线
      [{ align: [] }], // 对齐方式
      [{ list: 'ordered' }, { list: 'bullet' }], // 有序列表、无序列表
      ['link', 'image'], // 链接、图片
      ['clean'] // 清除格式
    ]
  },
  theme: 'snow', // 选择主题，可以是 snow 或 bubble
  placeholder: '请输入文本...', // 设置占位符文本
  scrollingContainer: 'body', // 滚动容器，可选值：字符串、DOM 元素或选择器
  bounds: document.body, // 编辑器边界，可选值：字符串、DOM 元素或选择器
  strict: true // 是否启用严格模式，即禁止非法 HTML
};
const editor = ref();
onMounted(() => {
  editor.value = new Quill(quillEditor.value!, options);
});
const xxx = () => {
  // editor.value.root.innerHTML html字符串
  console.log(editor.value, 'editor');
  if (editor.value.isEmpty()) {
    ElMessage.error('请先输入');
    return;
  }
  // let html = ''; // 后端返回的 HTML 字符串
  // let delta = editor.value.clipboard.convert(html, 'api');
  // editor.value.setContents(delta);
};
</script>

<style lang="postcss"></style>
