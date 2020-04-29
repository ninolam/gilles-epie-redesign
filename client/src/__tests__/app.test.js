import React from "react";
import renderer from "react-test-renderer";

import App from "../Components/App";

test("test the render", () => {
  const app = renderer.create(<App />);
  let tree = app.toJSON();
  expect(tree).toMatchSnapshot();
});
