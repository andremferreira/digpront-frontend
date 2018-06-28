import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import Login from "../scenes/Sign/scenes/Login";
import Button from "../components/button";
import LinkButton from "../scenes/Sign/scenes/LinkButton";

const initialState = {
  login: {
    logged: true
  }
};

const mockStore = configureStore();
const store = mockStore(initialState);

const setup = props => {
  const component = shallow(<Login store={store} {...props} />);

  return {
    component: component,
    button: component.find("button"),
    linkButton: component.find(LinkButton),
    field: component.find("Field"),
    form: component.find("form")
  };
};

describe("<Login/>", () => {
  let props;
  let submitValues;
  let handleSubmit;
  beforeEach(() => {
    submitValues = jest.fn();
    handleSubmit = jest.fn();
    props = {
      submitValues: submitValues,
      logged: true,
      submitting: true,
      handleSubmit: handleSubmit
    };
  });

  it("should render one Form", () => {
    const { form } = setup();
    expect(form.first().length).toEqual(1);
  });

  it("should render one Button", () => {
    const { button } = setup();
    expect(button.at(0).length).toEqual(1);
  });

  it("should render two Field", () => {
    const { field } = setup();
    expect(field.at(0).length).toEqual(1);
  });

  // it("should submit Button", () => {
 
  //   const { button } = setup(props);
  //   console.log(button.debug());
  //   button.at(0).simulate("submit", { preventDefault: jest.fn() });
  //   expect(actions.onSubmit).toHaveBeenCalledTimes(1);
  // });

  // it("should submit Button", () => {

  //  // const props = {onSubmit:jest.fn()};
  //   const { form } = setup();

  //   form.first().simulate("submit");
  //   expect(
  //     form
  //       .find("p.error")
  //       .first()
  //       .text()
  //   ).toBe("Please enter your name.");
  // });
});

//component.find('form').simulate('submit', { preventDefault: jest.fn() });
