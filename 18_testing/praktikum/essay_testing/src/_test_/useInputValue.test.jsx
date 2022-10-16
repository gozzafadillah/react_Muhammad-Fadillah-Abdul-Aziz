import { renderHook } from "@testing-library/react";
import { useInputValue } from "../components/useInputValue";

describe("Using Input Value", () => {
  it("return current initial value, onchange", () => {
    const { result } = renderHook(() => useInputValue("Test string"));

    expect(result.current.value).toEqual("Test string");
  });
});
