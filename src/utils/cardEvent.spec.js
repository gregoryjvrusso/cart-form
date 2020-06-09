import { numberFormat } from "./cardEvent";

describe("CardEvent component", () => {
  it("verifica se o número é formatado corretamente", async () => {
    expect(numberFormat("1234 5678")).toEqual(["1234", "5678", "****", "****"]);
    expect(numberFormat("1234")).toEqual(["1234", "****", "****", "****"]);
    expect(numberFormat("1234 5678 1234 567")).toEqual([
      "1234",
      "5678",
      "1234",
      "567*",
    ]);
  });
});
