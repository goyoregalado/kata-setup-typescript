import { describe, it, expect } from "vitest"
import { sayHello } from "./main.js"

describe("Default test", () => {
  it("Say hello", () => {
    const ohcHello = sayHello("Pedro", new Date("2021-01-01T07:00:00"))

    expect(ohcHello).toEqual("¡Buenos dias Pedro!")
  })

  it("says Buenas tardes if we are between 12:00 and 20:00", () => {
    const ohcHello = sayHello("Pedro", new Date("2021-01-01T15:00:00"))

    expect(ohcHello).toEqual("¡Buenas tardes Pedro!")
  })

  it("says Buenas noches if we are between 20:00 and 6:00", () => {
    const ohcHello = sayHello("Pedro", new Date("2021-01-01T04:00:00"))

    expect(ohcHello).toEqual("¡Buenas noches Pedro!")
  })

  it("says ¡Bonita palabra! if recieves a palindrome", () => {
    const answer = palindrome("oto")

    expect(answer).toEqual("¡Bonita palabra!")
  })
})
