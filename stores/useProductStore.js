import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    allProducts: [],
    categories: [],
    ads: [
      { id: 1, image: 'img/l1.jpg', title: 'Laptops', category: 'laptops' },
      { id: 2, image: 'img/m2.jpg', title: 'Mobile Accessories', category: 'mobile-accessories' },
      { id: 3, image: 'img/s3.jpg', title: "Men's Shoes", category: 'mens-shoes' },
      { id: 4, image: 'img/t4.jpg', title: "Men's Shirts", category: 'mens-shirts' }
    ],
    product: null,
    relatedProducts: [],
    loading: false,
  }),

  getters: {
    getProductsByCategory: (state) => (category) => {
      return category ? state.allProducts.filter((p) => p.category === category) : state.allProducts
    },

    getFilteredProducts: (state) => (searchQuery, category) => {
      let filtered = state.allProducts

      if (searchQuery) {
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }

      if (category) {
        filtered = filtered.filter((product) => product.category === category)
      }

      return filtered
    }
  },

  actions: {
    async fetchProducts() {
      if (this.allProducts.length > 0) return
      const response = await fetch('https://dummyjson.com/products?limit=112')
      const data = await response.json()
      this.allProducts = data.products
      this.categories = [...new Set(data.products.map((product) => product.category))]
    },

    async fetchProduct(id) {
      this.loading = true
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        this.product = data
        this.fetchRelatedProducts(data.category, id)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        this.loading = false
      }
    },

    async fetchRelatedProducts(category, productId) {
      try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=5`)
        const data = await response.json()
        this.relatedProducts = data.products.filter((p) => p.id !== productId)
      } catch (error) {
        console.error('Error fetching related products:', error)
      }
    }
  }
})