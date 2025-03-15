export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()
  
  // Allow access to auth pages
  if (to.path.startsWith('/auth/')) {
    if (authStore.isAuthenticated) {
      return navigateTo('/dashboard')
    }
    return
  }

  // Protect other pages
  if (!authStore.isAuthenticated) {
    return navigateTo('/auth/login')
  }
})