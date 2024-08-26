import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("El 4 deberia considerarse como año bisiesto", () => {
    const result=esBisiesto(4);
    expect(result).toEqual(true);
  });
});
