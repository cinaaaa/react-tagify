import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ReactTagify as Tagify } from "../src/ReactTagify.component";

const testTags = ["#programmers", "#artists", "#profession"];
const testMentions = ["@JohnRomero", "@theashraf"];

const renderTagify = props =>
  render(
    <Tagify {...props}>
      <p>{`${testTags.join(" ")} , ${testMentions.join(" ")}`}</p>
    </Tagify>
  );

test("Extracts Tags And Mentions", () => {
  const { getAllByTestId } = renderTagify();

  const tags = getAllByTestId("tag");

  expect(tags.length).toBe(testTags.length + testMentions.length);
});

test("Sets Tag Color", () => {
  const props = {
    colors: "red"
  };

  const { getAllByTestId } = renderTagify(props);

  const tags = getAllByTestId("tag");

  tags.forEach(tag => expect(tag).toHaveStyle(`color: ${props.colors}`));
});

test("Handles Tag Click Event", () => {
  const props = {
    tagClicked: jest.fn()
  };

  const { getAllByTestId,debug } = renderTagify(props);

  const tags = getAllByTestId("tag");

  tags.forEach(tag => {
    fireEvent.click(tag);
    expect(props.tagClicked).toBeCalledWith(tag.innerHTML);
  });

  expect(props.tagClicked).toBeCalledTimes(testTags.length + testMentions.length);
});

test("Sets Tag Cursor To Pointer", () => {
  const props = {
    tagClicked: jest.fn()
  };

  const { getAllByTestId } = renderTagify(props);

  const tags = getAllByTestId("tag");

  tags.forEach(tag => expect(tag).toHaveStyle(`cursor: pointer`));

});
