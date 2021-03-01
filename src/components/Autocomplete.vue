<template>

<div id="autocomplete" class="autocomplete">
    <h1>
        El tiempo en Municipios de España
    </h1>
  <input class="autocomplete-input"
    placeholder="Buscar Municipio"
    aria-label="Buscar Municipio"
  >
  <ul class="autocomplete-result-list"></ul>
  <ul id="no-results" class="autocomplete-result-list" visible="false">
    <li class="autocomplete-result">
      No results found
    </li>
  </ul>
</div>

 

</template>

<script>
export default {

}
</script>

<style>
#autocomplete {
  max-width: 400px;
  margin: 0 auto;
}

#no-results {
  display: none;
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 100%;
}

.no-results #no-results {
  display: block;
}

.no-results .autocomplete-input.focused {
  border-bottom-color: transparent;
  border-radius: 8px 8px 0 0;
}

.no-results .autocomplete-input:not(.focused) ~ #no-results {
  display: none;
}
</style>