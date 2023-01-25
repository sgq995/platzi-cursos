<script>
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

<button on:click={handleClick}>Click {count === 0 ? '' : count}</button>

<button on:click={toggle}>DarkMode</button>

<style>
  p {
    color: var(--theme-color);
  }
</style>
