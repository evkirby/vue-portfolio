import { shallowMount } from "@vue/test-utils";
import PresentationPage from "@/components/PresentationPage.vue";

describe("PresentationPage.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(PresentationPage, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
