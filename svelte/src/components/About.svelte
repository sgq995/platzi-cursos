<script>
  import Button from './Button.svelte';

  let text = 'Frontend Svelte';
  let count = 0;
  let styles = { darkMode: false };

  function handleClick() {
    count += 1;
  }

  function toggle() {
    styles.darkMode = !styles.darkMode;
    document.body.classList.toggle('dark-mode');
  }
</script>

{#if !styles.darkMode}
  <p>{text}</p>
{:else}
  <p><span>Hello dark mode</span></p>
{/if}

<p>
  {text}
</p>

<Button text="Click" {count} on:click={handleClick} />

<Button text="DarkMode" on:click={toggle} />

<style>
  p {
    color: var(--theme-color);
  }
</style>
