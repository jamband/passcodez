import { act, renderHook } from "@testing-library/react";
import { expect, test } from "vitest";
import { useStep } from ".";

test("initialState", () => {
  const { result } = renderHook(useStep);
  expect(result.current.state).toBe("first");
});

test("set", () => {
  const { result } = renderHook(useStep);
  expect(result.current.state).toBe("first");

  act(() => result.current.set("try"));
  expect(result.current.state).toBe("try");

  act(() => result.current.set("finish"));
  expect(result.current.state).toBe("finish");

  act(() => result.current.set("first"));
  expect(result.current.state).toBe("first");
});
