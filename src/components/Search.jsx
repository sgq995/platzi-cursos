import React from 'react';

import '../assets/styles/components/Search.scss';

function Search() {
  return (
    <section class="main">
      <h2 class="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" class="input" placeholder="Buscar..." />
    </section>
  );
}

export default Search;
