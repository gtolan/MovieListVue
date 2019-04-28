import { mount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("Navbar Component", () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Navbar, {
    attachToDocument: true
  });

  it("renders the Nav element correct markup", () => {
    expect(wrapper.html()).toContain("<nav");
  });

  it("should have a popularity filter button with text label Popularity", () => {
    const buttonPop = wrapper.find("button.filter.popularity");
    expect(buttonPop.text()).toMatch("Popularity");
  });
  it("should have a votes filter button with text label Votes", () => {
    const buttonVotes = wrapper.find("button.filter.votes");
    expect(buttonVotes.text()).toMatch("Votes");
  });
  it("should have a date filter button with text label Release Date", () => {
    const buttonDate = wrapper.find("button.filter.date");
    expect(buttonDate.text()).toMatch("Release Date");
  });

  it("Small Grid button should be active after trigger", () => {
    const buttonSmall = wrapper.find("button.small.grid-size");
    buttonSmall.trigger("click");
    expect(buttonSmall.attributes().class).toBe("small grid-size active");
  });
  it("Medium Grid button should be active after trigger", () => {
    const buttonMedium = wrapper.find("button.medium.grid-size");
    buttonMedium.trigger("click");
    expect(buttonMedium.attributes().class).toBe("medium grid-size active");
  });
  it("Large Grid button should be active after trigger", () => {
    const buttonLarge = wrapper.find("button.large.grid-size");
    buttonLarge.trigger("click");
    expect(buttonLarge.attributes().class).toBe("large grid-size active");
  });
});
