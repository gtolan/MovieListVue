import { mount } from "@vue/test-utils";
import CardItem from "@/components/CardItem.vue";

describe("Card Item", () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(CardItem, {
    propsData: {
      movie: {
        original_title: "The Movie Title",
        vote_average: 7,
        backdrop_path: "MoviePoster.jpg"
      },
      original_title: "The Movie Title"
    }
  });

  it("renders the div element Card", () => {
    expect(wrapper.html()).toContain('<div class="card');
  });

  it("renders the p element Title", () => {
    expect(wrapper.html()).toContain('<p class="title"');
  });
  it("renders the img element Poster", () => {
    const image = wrapper.find("img");
    expect(image.attributes().class).toBe("poster");
  });

  it("check the image base url is correct", () => {
    expect(wrapper.vm.imageBaseUrl).toBe("https://image.tmdb.org/t/p/w500/");
  });
});
