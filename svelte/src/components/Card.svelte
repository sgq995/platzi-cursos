<script lang="ts">
  import bookmarkIcon from '../assets/bookmark-icon.svg';
  import ellipsisHorizontalIcon from '../assets/ellipsis-horizontal-icon.svg';
  import heartIcon from '../assets/heart-icon.svg';
  import shareIcon from '../assets/share-icon.svg';
  import Comments from './Comments.svelte';
  import Icon from './Icon.svelte';
</script>

<article class="card">
  <header class="card__header">
    <div class="card__user">
      <div class="card__avatar">
        <img src="" alt="" />
      </div>
      <h2>Elmo.pug <span>Manizales, Colombia</span></h2>
    </div>

    <div class="settings">
      <Icon src={ellipsisHorizontalIcon} />
    </div>
  </header>

  <figure class="card__photo">
    <img src="" alt="" />
  </figure>

  <div class="card__actions">
    <div class="card__reactions">
      <Icon src={heartIcon} />
      <Icon src={shareIcon} />
    </div>

    <Icon src={bookmarkIcon} />
  </div>

  <div class="card__description">
    <h3>elmo.pug</h3>
    <span>Hola!</span>
  </div>

  <Comments />
</article>
