app.component('list-review', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
    /*html*/
    `
      <div v-show="reviews.length" class="review-container">
        <h3>Reviews:</h3>
        <ul>
          <li v-for="(review, index) in reviews" :key="index">
            Review by {{ review.name }} rate {{ review.rating }} star
            <br>
            {{ review.review }}
            <br>
            Recommend: {{ review.recommend }}
            <button
              class="button"
              @click="removeReview(index)">
              Remove
            </button>
          </li>
        </ul>
      </div>
    `,
  methods: {
    removeReview(index) {
      this.$emit('remove-review', index)
    }
  }
})
