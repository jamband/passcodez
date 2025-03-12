import { act, renderHook } from "@testing-library/react";
import { expect, test } from "vitest";
import { usePasscode } from ".";

test("initialState", () => {
  const { result } = renderHook(usePasscode);
  expect(result.current.state).toMatch(/^[\d]{4}$/);
});

test("reset", () => {
  const { result } = renderHook(usePasscode);
  expect(result.current.state).toMatch(/^[\d]{4}$/);

  act(result.current.reset);
  expect(result.current.state).toMatch(/^[\d]{4}$/);
});
