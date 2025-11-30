<template>
  <header class="titlebar" data-tauri-drag-region>
    <div class="title" data-tauri-drag-region>{{ title }}</div>
    <div class="controls">
      <button @click="minimize">-</button>
      <button @click="closeWindow">✕</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'
const props = defineProps<{ title?: string }>()

const minimize = () => appWindow.minimize()
const closeWindow = () => appWindow.close()
</script>

<style scoped>
.titlebar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 32px;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--titlebar-bg, #1e293b);
  color: var(--titlebar-fg, #fff);
  padding: 0 8px;
  user-select: none;
  z-index: 9999;
}

.controls {
  display: flex;
  gap: 4px;
  -webkit-app-region: no-drag;
}

.controls button {
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  border-radius: 4px;
}

.controls button:hover {
  background: rgba(255, 255, 255, 0.15);
}

.title {
  font-size: 0.9rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
