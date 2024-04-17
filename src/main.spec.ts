import { describe, it, expect } from "vitest"
import { sayHello } from "./main.js"

describe("Default test", () => {
  it("should work", () => {
    const ohcHello = sayHello("Pedro")

    expect(ohcHello).toEqual("¡Buenos días Pedro!")
  })
})
