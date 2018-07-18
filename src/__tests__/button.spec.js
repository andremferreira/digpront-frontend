import React from "react";
import { shallow, mount } from "enzyme";
import Button from "../components/button";

describe("<Button />", () => {
  let onClick;
  let props;

  beforeEach(() => {
    onClick = jest.fn();
    props = {
      name: "enter",
      submitting: true,
      color: "white",
      onClick: onClick
    };
  });

  it("should click Button", () => {
    const wrapper = shallow(<Button {...props} />);
    wrapper.find("button").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("should props name Button", () => {
    const wrapper = mount(<Button {...props} />);
    expect(wrapper.find("Button").prop("name")).toEqual("enter");
  });

  it("should props submiting Button", () => {
    const wrapper = mount(<Button {...props} />);
    expect(wrapper.find("Button").prop("submitting")).toEqual(true);
  });

  
});
