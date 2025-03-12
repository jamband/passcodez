import { act, renderHook } from "@testing-library/react";
import { expect, test } from "vitest";
import { useScore } from ".";

test("initialState", () => {
  const { result } = renderHook(useScore);
  expect(result.current.state).toBe(0);
});

test("increase", () => {
  const { result } = renderHook(useScore);
  expect(result.current.state).toBe(0);

  act(result.current.increase);
  expect(result.current.state).toBe(1);

  act(result.current.increase);
  expect(result.current.state).toBe(2);
});

test("reset", () => {
  const { result } = renderHook(useScore);
  expect(result.current.state).toBe(0);

  act(result.current.increase);
  act(result.current.increase);
  expect(result.current.state).toBe(2);

  act(result.current.reset);
  expect(result.current.state).toBe(0);
});
