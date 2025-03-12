import { act, renderHook } from "@testing-library/react";
import { expect, test } from "vitest";
import { usePressedCode } from ".";

test("initialState", () => {
  const { result } = renderHook(usePressedCode);
  expect(result.current.state).toBe("");
});

test("set", () => {
  const { result } = renderHook(usePressedCode);
  expect(result.current.state).toBe("");

  act(() => result.current.set("1"));
  expect(result.current.state).toBe("1");

  act(() => result.current.set("2"));
  expect(result.current.state).toBe("12");

  act(() => result.current.set("3"));
  expect(result.current.state).toBe("123");
});

test("reset", () => {
  const { result } = renderHook(usePressedCode);
  expect(result.current.state).toBe("");

  act(() => result.current.set("123"));
  expect(result.current.state).toBe("123");

  act(result.current.reset);
  expect(result.current.state).toBe("");
});
