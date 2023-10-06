<script setup>
import { ref, onMounted } from 'vue'
import api from './plugins/axios'

const moviesGenres = ref([])
const TVGenres = ref([])

onMounted(async () => {
  let response = await api.get('genre/movie/list?language=pt-BR')
  moviesGenres.value = response.data.genres
  response =  await api.get('genre/tv/list?language=pt-BR')
  TVGenres.value = response.data.genres
})
// import axios from 'axios'
// import { ref, onMounted } from 'vue'

// const moviesGenres = ref([])
// const TVGenres = ref([])

// onMounted(async () => {
//   let response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=pt-BR', {
//     headers: {
//       Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzMxNTYyZTZlMWZmZDk4MzVmMDZkOTc4MTAyODk1MiIsInN1YiI6IjY1MDlhYTM5M2NkMTJjMDE0ZWMwYjhiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AyIRwfPltoGRA5pjECMZlvb-Xti2QDxIecNhJWeKgOI`
//     }
//   })
//   moviesGenres.value = response.data.genres
//   response =  await axios.get('https://api.themoviedb.org/3/genre/tv/list?language=pt-BR', {
//     headers: {
//       Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzMxNTYyZTZlMWZmZDk4MzVmMDZkOTc4MTAyODk1MiIsInN1YiI6IjY1MDlhYTM5M2NkMTJjMDE0ZWMwYjhiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AyIRwfPltoGRA5pjECMZlvb-Xti2QDxIecNhJWeKgOI`
//     }
//   })
//   TVGenres.value = response.data.genres
// })
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Programas de TV</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  height: 3rem;
  display: flex;
  background-color: black;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #fff;
}
</style>