export const sayHello = (name: string, date: Date) => {
  const hour = date.getHours()
  console.log(hour)
  if (hour > 6 && hour <= 12) {
    return `¡Buenos dias ${name}!`
  } else if (hour > 12 && hour <= 20) {
    return `¡Buenas tardes ${name}!`
  }
  return `¡Buenas noches ${name}!`
}

export function main() {}
