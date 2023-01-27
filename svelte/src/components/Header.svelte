<script>
  import Icon from './Icon.svelte';
  import heartIcon from '../assets/heart-icon.svg';
  import userIcon from '../assets/user-icon.svg';
</script>

<header class="header">
  <div class="header__container">
    <div class="header__content">
      <h1>Pugstagram</h1>

      <nav class="header__navigation">
        <ul>
          <li>
            <Icon src={heartIcon} />
          </li>

          <li>
            <Icon src={userIcon} />
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>

<style>
  .header {
    background-color: white;
    border-bottom: 1px solid rgba(38, 38, 38, 0.4);
    position: sticky;
    top: 0;
    width: 100%;
  }

  .header__container {
    grid-template-columns: minmax(auto, 936px);
    display: grid;
    justify-content: center;
  }

  .header__content {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__navigation ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .header__navigation ul li {
    margin: 0 0.5em;
    display: inline-block;
  }

  h1 {
    color: black;
    background-color: white;
    font-size: 1.75rem;
    font-family: 'Pacifico', cursive;
    position: relative;
    mix-blend-mode: multiply;
  }

  h1:before {
    content: '';
    display: block;
    background: radial-gradient(circle at top left, #f09433, #bc1888);
    position: absolute;
    inset: 0;
    mix-blend-mode: screen;
  }
</style>
