app.component('product-detail', {
  props: {
    cart: {
      type: Number,
      required: true
    }
  },
  template:
  /*html*/
  `<button
    class="button"
    :class="{ disabledButton: cart.length == 0 }"
    :disabled="cart.length == 0"
    @click="removeCart">
    Remove to Cart
   </button>`,
  methods: {
    removeCart() {
      this.$emit('remove-to-cart')
    }
  }
})
