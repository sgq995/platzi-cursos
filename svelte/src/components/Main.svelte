<script></script>

<main class="main">
  <div class="main__container">
    <slot />
  </div>
</main>

<style>
  .main {
    display: grid;
    grid-template-columns: minmax(auto, 936px);
    justify-content: center;
  }

  .main__container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
    padding: 2rem 0;
  }
</style>
