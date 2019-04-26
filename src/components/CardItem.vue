<template>
  <div class="card">
    <p class="title">{{movie.original_title}}</p>
    <div class="rating">
      <RatingStars :rating="movie.vote_average"></RatingStars>
    </div>
    <img :src="imageBaseUrl + movie.backdrop_path" class="poster">
  </div>
</template>

<script>
import RatingStars from "./RatingStars";
export default {
  name: "CardItem",
  components: {
    RatingStars
  },
  props: ["movie"],
  data() {
    return {
      imageBaseUrl: "https://image.tmdb.org/t/p/w500/"
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: inline-block;
  width: 45vw;
  margin: 2.5vw;
  box-shadow: 0px 0px 16px 10px black;
  position: relative;
  min-height: 279px;
  overflow: hidden;
  background-color: black;
  img.poster {
    width: auto;
    min-height: 100%;
    min-width: 100%;
  }
  p.title {
    position: absolute;
    margin-left: 1rem;
    font-size: 2rem;
    font-family: "Montserrat", sans-serif, monospace;
    background-color: black;
    color: white;
    padding: 3px 10px;
    max-width: 73%;
    bottom: 2px;
    left: 7px;
  }
  div.rating {
    position: absolute;
    bottom: 33px;
    right: 25px;
    padding: 0.1rem;
    display: inline-block;
    width: 2rem;
  }
}
@media only screen and (min-width: 900px) {
  main.large .card p.title {
    font-size: 1.82rem;
    left: 0;
    max-width: 73%;
  }
}
@media only screen and (min-width: 500px) and (max-width: 900px) {
  main.medium .card p.title {
    font-size: 1.82rem;
    left: 0;
    max-width: 73%;
  }
}
</style>