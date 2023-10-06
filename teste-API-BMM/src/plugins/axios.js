import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzMxNTYyZTZlMWZmZDk4MzVmMDZkOTc4MTAyODk1MiIsInN1YiI6IjY1MDlhYTM5M2NkMTJjMDE0ZWMwYjhiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AyIRwfPltoGRA5pjECMZlvb-Xti2QDxIecNhJWeKgOI`
  }
})

export default api