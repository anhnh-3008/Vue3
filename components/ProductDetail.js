app.component('product-detail', {
  props: {
    is_detail: {
      type: Boolean,
      required: true
    }
  },
  template:
  /*html*/
  `<p v-show="is_detail">{{detailDescription}}</p>`,
  computed: {
    detailDescription() {
      if (this.is_detail) {
        return "this is a description of product detail"
      }
      return ""
    }
  }
})
