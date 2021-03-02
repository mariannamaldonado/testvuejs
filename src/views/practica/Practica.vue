<template>
  <h1>Temas</h1>
  <div v-for="tema in temas" :key="tema.id" class="tema">
      <router-link :to="{name: 'JobDetails', params: {id: tema.id }}">
          <h2>{{ tema.title }}</h2>
      </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return{
            temas:[
                { title: 'Introduccion', id: 1, details: 'lorem'},
                { title: 'Methods, v-model y evento click', id: 2, details: 'lorem'},
                { title: 'Keyup, v-model y computed', id: 3, details: 'lorem'},
            ]
        }
    }
}
</script>

<style>
 .tema h2{
    background: ·f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .tema h2:hover {
    background: #ddd;
  }
  .tema a{
    text-decoration: none;
  }
</style>