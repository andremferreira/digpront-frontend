import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import Login from "../scenes/Sign/scenes/Login";
import Button from "../components/button";

// const initialState = {
//   login: {
//     logged: true
//   }
// };

// const mockStore = configureStore();
// const store = mockStore(initialState);

// const setup = props => {
//   const component = shallow(<Login store={store} {...props} />);

//   return {
//     component: component,
//     button: component.find("button"),
//     linkButton: component.find(LinkButton),
//     field: component.find("Field"),
//     form: component.find("form")
//   };
// };

const setup = (setupProps = {}) => {
  const store = configureStore()({ login: { logged: true } });
  const wrapper = shallow(<Login store={store} />);

  return {
    store,
    wrapper
  };
};

describe("<Login/>", () => {
  it("renders without crashing", () => {
    const { wrapper } = setup();
    expect(wrapper.shallow()).toMatchSnapshot();
  });
});

it("should render one Button", () => {
  const { wrapper } = setup();
  let button = wrapper.find("button");
  expect(button.at(0).length).toEqual(1);
});

it("should render one Button", () => {
  const { wrapper } = setup();
  let alert = wrapper.find("Alert");
  let field = wrapper.find("Field");

  expect(alert.at().length).toEqual(1);

  expect(field.at(1).length).toEqual(1);
});



// it('onSubmit calls preventDefault to stop form submit', () => {
//   let preventDefault = jest.fn();
//   let { wrapper } = setup();
//   let form = wrapper.shallow().shallow().find('form');
//   console.log(form.debug())
//   form.simulate('submit', { preventDefault });
//   expect(preventDefault).toHaveBeenCalled();
// });

//   it("should render one Form", () => {
//     const { form,component } = setup();
//     //let com = component.toJSON();
//    // let com = renderer.create(component).toJSON()
//     //expect(com).toMatchSnapshot();
//     console.log(form.debug())
//     expect(form.first().length).toEqual(1);
//   });
// });

// it("should render two Field", () => {
//   const { field } = setup();
//   expect(field.at(0).length).toEqual(1);
// });

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

//component.find('form').simulate('submit', { preventDefault: jest.fn() });
