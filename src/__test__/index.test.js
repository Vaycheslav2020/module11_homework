import { getPercents } from "../index";

describe('test getPercents function', () => {
  it("must correctly subtract percentages from the number", () => {
    expect(getPercents(30,200)).toBe(60)
  })
});