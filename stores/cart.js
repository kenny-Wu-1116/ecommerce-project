import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [], // 購物車內容
  }),

  getters: {
    // 總價格
    totalPrice: (state) =>
      state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),

    // 總數量
    totalItems: (state) =>
      state.cart.reduce((sum, item) => sum + item.quantity, 0),

    // 獨立商品數量
    uniqueProductsCount: (state) => state.cart.length,
  },

  actions: {
    // 載入購物車（初始化）
    loadCart() {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
      }
    },

    // 保存購物車到 localStorage
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },

    // cart.js
addToCart(product) {
  const existingItem = this.cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += product.quantity; // 增加商品數量
  } else {
    this.cart.push(product); // 添加新商品
  }
  this.saveCart();
},


    // 移除商品
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
      this.saveCart();
    },

    // 更新商品數量
    updateQuantity(productId, quantity) {
      const existingItem = this.cart.find((item) => item.id === productId);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
      this.saveCart();
    },

    // 清空購物車
    clearCart() {
      this.cart = [];
      this.saveCart();
    },
  },
});
