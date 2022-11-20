import { calculateArray } from "../../utils/calculateArray";

describe("checking return array of calculateArray function", () => {
  it("checking the correctness of the recalculation of array numbers", () => {
    expect(calculateArray(true)).toBe(
      "это должен быть массив и он не должен быть пустым"
    );
    expect(calculateArray([])).toBe(
      "это должен быть массив и он не должен быть пустым"
    );
    expect(calculateArray([{ n: 5 }, { 5: 5 }])).toBe(
      "это должен быть массив и он не должен быть пустым"
    );
    expect(calculateArray(["string", "string", 52])).toBe(
      "это должен быть массив и он не должен быть пустым"
    );
    expect(calculateArray([52, "string", "string", 52])).toBe(
      "это должен быть массив и он не должен быть пустым"
    );
    expect(calculateArray([15, 2, 3, 5, 6])).toBe(20);
  });
});
