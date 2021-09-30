import React from "react";
import {shallow} from "enzyme";
import Counter from "./Counter";

describe("Counter click", () => {
    test("should render", () => {
        const component = shallow(<Counter />);

        expect(component).toMatchSnapshot();
    });
});
