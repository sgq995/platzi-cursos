<script>
  import svelteLogo from './assets/svelte.svg';
  import About from './components/About.svelte';
  import ButtonCount from './components/ButtonCount.svelte';
  import Input from './components/Input.svelte';
  import Person from './components/Person.svelte';
  import Photos from './components/Photos.svelte';
  import Skills from './components/Skills.svelte';
  import Text from './components/Text.svelte';
  import Counter from './lib/Counter.svelte';

  const data = {
    name: 'Sebas',
    lastName: 'Gonzalez',
    age: 28,
  };
</script>

<main>
  <About />
  <Text text="Hi!" />

  <ButtonCount />

  <Person {...data} />

  <Skills />

  <Input />

  <Photos />
</main>

<style>
  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #bfc2c7;
  }
</style>
