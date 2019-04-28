// Import the mount() method from the test utils
// and the component you want to test

import { mount } from "@vue/test-utils";
import CardContainer from "@/components/CardContainer.vue";

describe("CARD CONTAINER", () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(CardContainer);

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain('<main class=""></main>');
  });

  it("card size is blank on init", () => {
    expect(wrapper.vm.cardSize).toBe("");
  });

  it("init order is date", () => {
    expect(wrapper.vm.cardOrder).toBe("date");
  });

  it("api url contains theMovieDB", () => {
    expect(wrapper.vm.baseUrl).toContain(
      "https://api.themoviedb.org/3/movie/now_playing?"
    );
  });

  it("the request contains the correct url", async () => {
    const data = await wrapper.vm.fetchData();
    expect(data.config.url).toBe(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=32550221f8c9bddd62cef24aa22975b1&language=en-US&page=1"
    );
    const expected = data.data.results[0];
    expect(expected).toHaveProperty("popularity");
    expect(expected).toHaveProperty("vote_average");
    expect(expected).toHaveProperty("id");
    expect(expected).toHaveProperty("title");
    expect(data.data.results.length).toBeGreaterThan(10);
  });

  it("reverses the cards array list", function() {
    wrapper.vm.moviesList = [1, 2, 3];
    wrapper.vm.reverseCardsOrder();
    expect(wrapper.vm.moviesList).toEqual([3, 2, 1]);
  });

  it("sorts averge vote", () => {
    let data = [
      { vote_average: 2 },
      { vote_average: 4 },
      { vote_average: 1 },
      { vote_average: 20 }
    ];
    wrapper.vm.moviesList = data;
    wrapper.vm.moviesList = wrapper.vm.moviesList.sort(
      wrapper.vm.sortByAverageVote
    );
    expect(wrapper.vm.moviesList).toEqual([
      { vote_average: 1 },
      { vote_average: 2 },
      { vote_average: 4 },
      { vote_average: 20 }
    ]);
    wrapper.vm.votesFilter("votes");
    expect(wrapper.vm.cardOrder).toBe("votes");
  });
  it("changes class after date filter", () => {
    wrapper.vm.dateFilter("date");
    expect(wrapper.vm.cardOrder).toBe("date");
  });

  it("sorts popularity", () => {
    let data = [
      { popularity: 112.2 },
      { popularity: 400.1 },
      { popularity: 1.9 },
      { popularity: 200.1 }
    ];
    wrapper.vm.moviesList = data;
    wrapper.vm.moviesList = wrapper.vm.moviesList.sort(
      wrapper.vm.sortByPopularity
    );
    expect(wrapper.vm.moviesList).toEqual([
      { popularity: 1.9 },
      { popularity: 112.2 },
      { popularity: 200.1 },
      { popularity: 400.1 }
    ]);
    wrapper.vm.popularityFilter("popularity");
    expect(wrapper.vm.cardOrder).toBe("popularity");
  });
});
