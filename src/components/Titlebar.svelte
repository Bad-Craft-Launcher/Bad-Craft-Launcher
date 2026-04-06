<script>
  import { getCurrentWindow } from '@tauri-apps/api/window'
  import Icon from '@iconify/svelte'

  const appWindow = getCurrentWindow()
</script>

<header data-tauri-drag-region class="titlebar">
  <div class="titlebar_leading">
    <span class="titlebar_title">Bad Craft Launcher</span>
  </div>
  <div class="titlebar_actions">
    <button
      type="button"
      class="titlebar_btn"
      id="titlebar-minimize"
      data-tauri-drag-region="false"
      aria-label="Minimize window"
      onclick={() => appWindow.minimize()}
    >
      <Icon icon="mdi:minimize" width="20" height="20" />
    </button>
    <button
      type="button"
      class="titlebar_btn titlebar_btn--danger"
      id="titlebar-close"
      data-tauri-drag-region="false"
      aria-label="Close window"
      onclick={() => appWindow.close()}
    >
      <Icon icon="mdi:close" width="20" height="20" />
    </button>
  </div>
</header>

<style>
  .titlebar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    padding: 0 16px;
    gap: 12px;
    margin: 0;
    flex-shrink: 0;
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--md-sys-color-surface, #ffffff);
    color: var(--md-sys-color-on-surface, #111827);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    user-select: none;
    -webkit-app-region: drag;
  }

  .titlebar_leading {
    display: flex;
    align-items: center;
    min-width: 0;
  }

  .titlebar_title {
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .titlebar_actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .titlebar_btn {
    all: unset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;
    color: var(--md-sys-color-on-surface, #111827);
    -webkit-app-region: no-drag;
  }

  .titlebar_btn:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  .titlebar_btn:focus-visible {
    outline: 2px solid rgba(0, 0, 0, 0.28);
    outline-offset: 2px;
  }

  .titlebar_btn--danger {
    color: var(--md-sys-color-error, #b00020);
  }

  .titlebar_btn--danger:hover {
    background: rgba(255, 69, 58, 0.16);
  }
</style>