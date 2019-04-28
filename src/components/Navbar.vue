<template>
  <div>
    <nav class="navbar">
      <img class="brand logo" src="../assets/logo.png">
      <h4 class="nav-title">Movies</h4>
    </nav>

    <header>
      <h4 class="results-title">Now Playing</h4>

      <div class="dropdown">
        <button class="filter mobile">Filters</button>
        <div class="dropdown-content">
          <button @click="filterByDate()" class="filter date active">Release Date</button>
          <button @click="filterByPopularity()" class="filter popularity">Popularity</button>
          <button @click="filterByVotes()" class="filter votes">Votes</button>
        </div>
      </div>
    </header>

    <section class="grid layout">
      <button @click="emitSmallCards()" class="small grid-size">&#9856;</button>
      <button @click="emitMediumCards()" class="medium grid-size active">&#9859;</button>
      <button @click="emitLargeCards()" class="large grid-size">&#9861;</button>
    </section>
  </div>
</template>

<script>
import EventBus from "../eventBus";
export default {
  name: "Navbar",
  methods: {
    removeActiveFilterButton() {
      let dropdown = document.querySelector(".dropdown-content");
      let dateBtn = dropdown.querySelector(".date");
      let popularBtn = dropdown.querySelector(".popularity");
      let votesBtn = dropdown.querySelector(".votes");
      let arrEle = [dateBtn, popularBtn, votesBtn];
      Array.from(arrEle).forEach(el => {
        el.classList.remove("active");
      });
    },
    removeActiveLayoutButton() {
      let large = document.querySelector("button.large.grid-size");
      let medium = document.querySelector("button.medium.grid-size");
      let small = document.querySelector("button.small.grid-size");
      let arrEle = [large, medium, small];
      Array.from(arrEle).forEach(el => {
        el.classList.remove("active");
      });
    },
    emitSmallCards() {
      EventBus.$emit("small-cards");
      this.removeActiveLayoutButton();
      let small = document.querySelector("button.small.grid-size");
      small.classList.add("active");
    },
    emitMediumCards() {
      EventBus.$emit("medium-cards");
      this.removeActiveLayoutButton();
      let medium = document.querySelector("button.medium.grid-size");
      medium.classList.add("active");
    },
    emitLargeCards() {
      EventBus.$emit("large-cards");
      this.removeActiveLayoutButton();
      let large = document.querySelector("button.large.grid-size");
      large.classList.add("active");
    },
    filterByDate() {
      this.removeActiveFilterButton();
      document.querySelector("button.filter.date").classList.add("active");
      EventBus.$emit("date-filter");
    },
    filterByPopularity() {
      this.removeActiveFilterButton();
      document
        .querySelector("button.filter.popularity")
        .classList.add("active");
      EventBus.$emit("popularity-filter");
    },
    filterByVotes() {
      this.removeActiveButton();
      document.querySelector("button.filter.votes").classList.add("active");
      EventBus.$emit("votes-filter");
    }
  }
};
</script>

<style lang="scss" scoped>
/* navbar */
nav.navbar {
  display: flex;
  height: 3.75rem;
  background-color: darkslategray;
  background: linear-gradient(grey 69%, black 92%);
  background: #222;
  img.brand.logo {
    display: inline-block;
    height: 3rem;
    margin: 0.33rem 1.5rem;
    width: 3rem;
  }
  h4.nav-title {
    width: calc(100vw - 12rem);
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
    margin-top: 0.95rem;
    font-family: "Montserrat", sans-serif, monospace;
    color: #00d474;
  }
  div.right.menu {
    width: 6rem;
    text-align: center;
  }
}

/* navbar -end */

/* header */
header {
  display: flex;
  padding: 0 4rem;
  background-color: #363636;
  background-color: #000000;
  color: white;
  font-family: "Montserrat", sans-serif, monospace;
  border-bottom: 1px solid grey;
  min-height: 4rem;

  h4.results-title {
    flex: 2;
    font-size: 1.8rem;
    margin: 0;
    margin-top: 1rem;
  }
  button.filter {
    margin: 6px;
    border-radius: 1px;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 0.9rem;
    background: linear-gradient(
      45deg,
      #00d474,
      #00d474 60%,
      #0c9a58 0,
      #0c9a58 0,
      #1c4532
    );
    color: white;
    padding: 1rem;
    text-shadow: 0px 0px 18px black;
    border: 2px solid green;
    outline: 2px solid white;
    outline-offset: -7px;
    transition: 0.1s ease-in-out;
    cursor: pointer;
    &:hover,
    &:active {
      animation: backgroundIncr 0.1s ease;
      animation-fill-mode: forwards;
    }
  }
}

@keyframes backgroundIncr {
  0% {
    background: linear-gradient(
      45deg,
      #00d474,
      #00d474 60%,
      #0c9a58 0,
      #0c9a58 0,
      #1c4532
    );
  }
  50% {
    background: linear-gradient(
      45deg,
      #00d474,
      #00d474 30%,
      #0c9a58 0,
      #0c9a58 0,
      #1c4532
    );
  }
  100% {
    background: linear-gradient(
      45deg,
      #00d474,
      #00d474 0%,
      #0c9a58 0,
      #0c9a58 0,
      #1c4532
    );
  }
}
/* header - end */

/* grid layout section */
section.grid {
  width: 100vw;
  text-align: center;
  background-color: black;
  height: 3.5rem;
  button {
    color: white;
    height: 3rem;
    margin: 0.25rem;
    width: 3rem;
    font-size: 3.95rem;
    padding: 0;
    outline: none;
    line-height: 10px;
    text-align: center;
    padding-bottom: 12px;
    background-color: black;
    border: none;
    cursor: pointer;
    &:hover {
      background: #222222;
    }
    &.large.grid-size {
      transform: rotate(90deg);
    }
    &.grid-size.active {
      background: #636161;
    }
  }
}

/* grid layout section - end */

/* media queries */
@media only screen and (max-width: 800px) {
  header {
    button.filter.mobile {
      display: block;
      margin-top: 0.5rem;
    }
    button.filter {
      margin: 6px;
      border-radius: 1px;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: 0.9rem;
      background: white;
      color: black;
      padding: 1rem;
      text-shadow: 0px 0px 0px black;
      border: 0px solid transparent;
      outline: none;
      transition: 0.1s ease-in-out;
      cursor: pointer;
      width: 100%;
      margin: auto;
    }
    .dropdown {
      position: relative;
      display: inline-block;
      &:hover .dropdown-content {
        display: block;
        visibility: visible;
        z-index: 10;
        opacity: 1;
        transform: scale(1);
      }
      .dropdown-content {
        visibility: hidden;
        z-index: -1;
        opacity: 0;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 170px;
        right: 0.05rem;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        transform: scale(0.8);
        transform-origin: top right;
        transition: 0.5s ease-in-out;
      }
    }
  }
}

@media only screen and (min-width: 800px) {
  header button.filter.mobile {
    display: none;
  }
}
@media only screen and (max-width: 900px) {
  section.grid {
    button.small {
      display: inline-block;
    }
    button.large {
      display: none;
    }
  }
}
@media only screen and (min-width: 900px) {
  section.grid {
    button.small {
      display: none;
    }
    button.large {
      display: inline-block;
    }
  }
}
@media only screen and (max-width: 500px) {
  section.grid button.medium {
    display: none;
  }
}
</style>