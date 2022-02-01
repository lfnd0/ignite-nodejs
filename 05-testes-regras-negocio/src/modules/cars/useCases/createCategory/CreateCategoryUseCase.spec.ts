describe("SumNumbers", () => {
  it("Hope that 2 + 2 is 4", () => {
    const sum = 2 + 2;
    const result = 4;

    expect(sum).toBe(result);
  });

  it("Hope that 2 + 2 is not 5", () => {
    const sum = 2 + 2;
    const result = 5;

    expect(sum).not.toBe(result);
  });
});
