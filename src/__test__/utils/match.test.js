import { match } from "../../utils/match";

describe("tests match function", () => {
  it("returns true if these strings are case-insensitive", () => {
    expect(match("String", "striNG")).toBe(true)
    expect(match("String", "striNGs")).toBe(false)
  })
})