<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
import genreStore from '@/stores/genres'
import Loading from 'vue-loading-overlay'
const genres = ref([]);
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')

const getGenreName = (id) => genres.value.find((genre) => genre.id === id).name
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true
  await genreStore.getAllGenres('tv')
  isLoading.value = false
})
const TV = ref([]);

const listTV = async (genreId) => {
  isLoading.value = true;
  const response = await api.get('discover/tv', {
    params: {
      with_genres: genreId,
      language: 'pt-BR'
    }
  });
  TV.value = response.data.results
  isLoading.value = false;
};
</script>

<template>
  <h1>Filmes</h1>
  <ul class="genre-list">
    <li
      v-for="genre in genreStore.genres"
      :key="genre.id"
      @click="listTV(genre.id)"
      class="genre-item"
    >
    
      {{ genre.name }}
      <loading v-model:active="isLoading" is-full-page />

    </li>
    <p class="TV-genres">
  <span v-for="genre_id in TV.genre_ids" :key="genre_id" @click="listTV(genre_id)">
    {{ getGenreName(genre_id) }} 
  </span>
</p>
  </ul>
<div class="TV-list">
  <div v-for="TV in TV" :key="TV.id" class="TV-card">
    
    <img :src="`https://image.tmdb.org/t/p/w500${TV.poster_path}`" :alt="TV.title" />
    <div class="TV-details">
      <p class="TV-title">{{ TV.title }}</p>
      <p class="TV-release-date">{{ formatDate(TV.release_date) }}</p>
      <p class="TV-genres">{{ TV.genre_ids }}</p>
    </div>
    
  </div>
</div>
</template>

  
  <style scoped>
  .genre-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    padding: 0;
  }
  
  .genre-item {
    background-color: #5d6424;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    align-self: center;
    color: #fff;
    display: flex;
    justify-content: center;
  }
  
  .genre-item:hover {
    cursor: pointer;
    background-color: #7d8a2e;
    box-shadow: 0 0 0.5rem #5d6424;
  }
  .TV-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
}

.TV-genres span {
  background-color: #748708;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.TV-genres span:hover {
  cursor: pointer;
  background-color: #455a08;
  box-shadow: 0 0 0.5rem #748708;
}
.TV-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  margin-bottom: 2rem;
}

.TV-item {
  background-color: #387250;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
}

.TV-item:hover {
  cursor: pointer;
  background-color: #4e9e5f;
  box-shadow: 0 0 0.5rem #387250;
}
.TV-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.TV-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.TV-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.TV-details {
  padding: 0 0.5rem;
}

.TV-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}
  </style>