import axios from 'axios'

// Use proxy in development (when running on same port), or fallback to direct URL
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 15000 // 15 second timeout
})

// Request interceptor to add auth token and log requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    // Debug logging in development
    if (import.meta.env.DEV) {
      console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`)
      if (config.data) {
        console.log('📦 Request Data:', config.data)
      }
    }
    return config
  },
  (error) => {
    console.error('❌ Request Error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    // Debug logging in development
    if (import.meta.env.DEV) {
      console.log(`✅ API Response: ${response.status}`, response.data)
    }
    return response
  },
  async (error) => {
    // Log errors in development
    if (import.meta.env.DEV) {
      console.error('❌ API Error:', error.response?.status, error.response?.data || error.message)
    }
    
    if (error.response?.status === 401) {
      // Token expired or invalid - logout user
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      // Only redirect if not already on login page to avoid infinite loop
      const currentPath = window.location.pathname
      if (!currentPath.includes('/login')) {
        window.location.href = '/admin/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api
