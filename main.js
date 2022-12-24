const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            users: [
              { id: 1, name: "user A" },
              { id: 2, name: "user B" },
              { id: 3, name: "user C" }
            ],
            sizes: ['Size S', 'Size L', 'Size XL', 'Size XXL']
        }
    }
})
