import { mount } from "@vue/test-utils";
import RatingStars from "@/components/RatingStars.vue";

describe("Ratings stars", () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(RatingStars);

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain('<span class="empty-star">');
  });
  wrapper.vm.addRatingStars(6);
  it("3/5 gives three true values", () => {
    expect(wrapper.vm.stars).toEqual([false, false, true, true, true]);
  });
  it("renders full stars for true values", () => {
    expect(wrapper.html()).toContain('<span class="full-star">');
  });
});
