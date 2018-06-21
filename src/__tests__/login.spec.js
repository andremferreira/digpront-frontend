import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import Login from "../scenes/Sign/scenes/Login";
import { Provider } from "react-redux";

const initialState = {};
const mockStore = configureStore();
const store = mockStore(initialState);
//handleSubmit, submitValues, submitting
const setup = props => {
  const actions = {
    onSubmit: jest.fn(),
    handleSubmit: jest.fn()
  };

  const component = mount(
    <Provider store={store}>
      <Login {...actions} {...props} />
    </Provider>
  );

  return {
    component: component,
    actions: actions,
    button: component.find("Button"),
    field: component.find("Field"),
    form: component.find("form")
  };
};

describe("<Login/>", () => {
  it("should render one Form", () => {
    const { form } = setup();
    expect(form.length).toEqual(1);
  });

  it("should render one Button", () => {
    const { button } = setup();
    expect(button.length).toEqual(1);
  });

  it("should render two Field", () => {
    const { field } = setup();
    expect(field.length).toEqual(2);
  });

  it("should submit Button", () => {
    const { button, actions } = setup();
    button.simulate("submit", { preventDefault: jest.fn() });
    expect(actions.handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("should submit Button", () => {
    const { field } = setup();
    field.at(0).simulate('change', { target: { value: 'john.doe'}})
    //expect(actions.handleSubmit).toHaveBeenCalledTimes(1);
  });
});

//component.find('form').simulate('submit', { preventDefault: jest.fn() });
