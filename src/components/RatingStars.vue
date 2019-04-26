<template>
  <div>
    <span v-for="(star, index) in stars" :key="index" :class="[star ? 'full-star' : 'empty-star']"></span>
  </div>
</template>

<script>
export default {
  name: "RatingStars",
  props: ["rating"],
  data() {
    return {
      stars: []
    };
  },
  created() {
    this.addRatingStars(this.rating);
  },
  methods: {
    addRatingStars(ratingOutOfTen) {
      let rating = ratingOutOfTen / 2;
      rating = Math.ceil(rating);
      let total = 5;
      let counter = 0;
      //create 5 star elements placing empty stars on top
      while (counter < total) {
        counter++;
        let res;
        counter <= rating ? (res = true) : (res = false);
        this.stars.push(res);
      }
      this.stars.reverse();
    }
  }
};
</script>

<style lang="scss" scoped>
main .card div.rating {
  position: absolute;
  bottom: 33px;
  right: 25px;
  padding: 0.1rem;
  display: inline-block;
  width: 2rem;
  span {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
    display: block;
    position: relative;
    margin-bottom: 0.5rem;
    transition: 0.3s ease-in-out;
    will-change: transform;
    &:hover {
      transform: scale(1.3);
      transform-origin: center;
    }
    &.full-star {
      text-shadow: -2px -2px 5px black;
      &:before {
        color: #00d474;
        content: "\2605";
        position: absolute;
        left: 0;
        overflow: hidden;
      }
    }
    &.empty-star:before {
      color: transparent;
      content: "\2606";
      position: absolute;
      left: 0;
      overflow: hidden;
      text-shadow: 0px 0px 0px white;
    }
  }
}

@media only screen and (min-width: 900px) {
  main.large .card div.rating {
    position: absolute;
    bottom: 33px;
    right: 5px;
  }
}

@media only screen and (min-width: 500px) and (max-width: 900px) {
  main.medium .card div.rating {
    position: absolute;
    bottom: 33px;
    right: 5px;
  }
}
</style>

