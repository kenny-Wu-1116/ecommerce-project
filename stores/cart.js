import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),

  getters: {
    totalPrice: (state) =>
      state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),

    totalItems: (state) =>
      state.cart.reduce((sum, item) => sum + item.quantity, 0),

    uniqueProductsCount: (state) => state.cart.length,
  },

  actions: {
    loadCart() {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
      }
    },

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  },

  addToCart(product) {
    const existingItem = this.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        this.cart.push(product);
      }
    this.saveCart();
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter((item) => item.id !== productId);
    this.saveCart();
  },

  updateQuantity(productId, quantity) {
    const existingItem = this.cart.find((item) => item.id === productId);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
      this.saveCart();
  },

  clearCart() {
    this.cart = [];
    this.saveCart();
    },
  },
});
