import { defineStore } from 'pinia'
import { useNhostClient } from '@nhost/vue'
import { toast } from 'vue3-toastify'
import { useRouter } from '#app'

interface RegisterData {
  email: string
  password: string
  metadata?: {
    fullName: string
    userType: string
  }
  fullName: string
  userType: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loading: false
  }),

  actions: {
    async login(email: string, password: string) {
      const nhost = useNhostClient()
      const router = useRouter()
      this.loading = true

      try {
        const { session, error } = await nhost.signIn({
          email,
          password
        })

        if (error) {
          throw error
        }

        this.user = session?.user
        this.isAuthenticated = true
        toast.success('Connexion réussie')
        await router.push('/dashboard')
      } catch (error) {
        toast.error('Erreur lors de la connexion')
        console.error('Login error:', error)
      } finally {
        this.loading = false
      }
    },

    async register(data: RegisterData) {
      const nhost = useNhostClient()
      const router = useRouter()
      this.loading = true

      try {
        const { session, error } = await nhost.signUp({
          email: data.email,
          password: data.password,
          options: {
            displayName: data.fullName,
            metadata: {
              fullName: data.fullName,
              userType: data.userType
            }
          }
        })

        if (error) {
          throw error
        }

        this.user = session?.user
        this.isAuthenticated = true
        toast.success('Inscription réussie')
        await router.push('/dashboard')
      } catch (error) {
        toast.error('Erreur lors de l\'inscription')
        console.error('Register error:', error)
      } finally {
        this.loading = false
      }
    },

    async logout() {
      const nhost = useNhostClient()
      const router = useRouter()
      this.loading = true

      try {
        await nhost.signOut()
        this.user = null
        this.isAuthenticated = false
        toast.success('Déconnexion réussie')
        await router.push('/')
      } catch (error) {
        toast.error('Erreur lors de la déconnexion')
        console.error('Logout error:', error)
      } finally {
        this.loading = false
      }
    }
  }
})