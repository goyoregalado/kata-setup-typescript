export const sayHello = (name: string, date: Date) => {
  return date.getHours() > 12 && date.getHours() <= 20 ? `¡Buenas tardes ${name}!` : `¡Buenos dias ${name}!`
}

export function main() {}
