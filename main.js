const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            inventories: 10,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
          if (this.inventories > 0) {
            this.cart += 1
            this.inventories -=1
            if (this.inventories == 0) this.inStock = true
          }
        },
        removeToCart() {
          if (this.cart > 0) {
            this.cart -= 1
            this.inventories +=1
            this.inStock = false
          }
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
