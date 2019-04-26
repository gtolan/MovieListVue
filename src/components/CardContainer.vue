<template>
  <main :class="[cardSize]">
    <CardItem v-for="item in moviesList" :key="item.id" :movie="item"></CardItem>
  </main>
</template>

<script>
import axios from "axios";
import CardItem from "./CardItem";
import EventBus from "../eventBus";
const baseUrl =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=32550221f8c9bddd62cef24aa22975b1&language=en-US&page=1";

export default {
  name: "CardContainer",
  components: {
    CardItem
  },
  data() {
    return {
      moviesList: [],
      cardSize: "",
      cardOrder: "date"
    };
  },
  created() {
    axios
      .get(baseUrl)
      .then(response => {
        let result = response.data.results;
        this.moviesList = result;
        return;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  mounted() {
    EventBus.$on("large-cards", () => {
      this.cardSize = "large";
    });
    EventBus.$on("medium-cards", () => {
      this.cardSize = "medium";
    });
    EventBus.$on("small-cards", () => {
      this.cardSize = "";
    });
    EventBus.$on("small-cards", () => {
      this.cardSize = "";
    });
    EventBus.$on("date-filter", () => {
      this.filterMoviesByDateClick();
    });
    EventBus.$on("popularity-filter", () => {
      this.filterMoviesByPopularityClick();
    });
    EventBus.$on("votes-filter", () => {
      this.filterMoviesByVotesClick();
    });
  },
  methods: {
    reverseCardsOrder() {
      this.moviesList.reverse();
    },
    removeActiveButton() {
      let dropdown = document.querySelector(".dropdown-content");
      let dateBtn = dropdown.querySelector(".date");
      let popularBtn = dropdown.querySelector(".popularity");
      let votesBtn = dropdown.querySelector(".votes");
      let arrEle = [dateBtn, popularBtn, votesBtn];
      Array.from(arrEle).forEach(el => {
        el.classList.remove("active");
      });
    },
    sortByAverageVote(a, b) {
      return a.vote_average > b.vote_average
        ? 1
        : b.vote_average > a.vote_average
        ? -1
        : 0;
    },
    sortByPopularity(a, b) {
      return a.popularity - b.popularity;
    },
    sortByDate(a, b) {
      return a.dateKey - b.dateKey;
    },
    filterMoviesByDateClick() {
      let type = "date";
      this.cardOrder === type
        ? this.reverseCardsOrder()
        : this.dateFilter(type);
    },
    dateFilter(type) {
      this.removeActiveButton();
      document.querySelector("button.filter.date").classList.add("active");
      this.moviesList = this.moviesList.sort(this.sortByDate);
      this.cardOrder = type;
    },
    filterMoviesByPopularityClick() {
      let type = "popularity";
      this.cardOrder === type
        ? this.reverseCardsOrder()
        : this.popularityFilter(type);
    },
    popularityFilter(type) {
      this.removeActiveButton();
      document
        .querySelector("button.filter.popularity")
        .classList.add("active");
      this.moviesList = this.moviesList.sort(this.sortByPopularity);
      this.cardOrder = type;
    },
    filterMoviesByVotesClick() {
      let type = "votes";
      this.cardOrder === type
        ? this.reverseCardsOrder()
        : this.votesFilter(type);
    },
    votesFilter(type) {
      this.removeActiveButton();
      document.querySelector("button.filter.votes").classList.add("active");
      this.moviesList = this.moviesList.sort(this.sortByAverageVote);
      this.cardOrder = type;
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  min-height: 80vh;
  width: 100vw;
  background-color: #181818;
}
@media only screen and (max-width: 900px) {
  main .card {
    display: inline-block;
    width: 66vw;
    margin: 2rem 17vw;
  }
}
@media only screen and (min-width: 900px) {
  main.large .card {
    width: 30vw;
    margin: 1.5vw;
    transition: 0.05 ease-in-out;
  }
}
@media only screen and (min-width: 500px) and (max-width: 900px) {
  main.medium .card {
    width: 44vw;
    margin: 2rem 3vw;
    transition: 0.05 ease-in-out;
  }
}
@media only screen and (max-width: 500px) {
  main .card {
    display: inline-block;
    width: 80vw;
    margin: 2rem 10vw;
  }
}
</style>