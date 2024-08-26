import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  /*it("El 4 deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true); // act assert
  });*/

  it("El 5 no deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(5)).toEqual(false);
  });
  it("El año 2000 es bisiesto, (entonces es divisible por 400) ", () => {
    expect(esBisiesto(2000)).toEqual(true);
  });
  it("El año 1700 no es bisiesto, (entonces es divisible por 100 y no por 400) ", () => {
    expect(esBisiesto(1700)).toEqual(false);
  });
  it("El año 2100 no es bisiesto, (entonces es divisible por 100 y no por 400) ", () => {
    expect(esBisiesto(2100)).toEqual(false);
  });

});