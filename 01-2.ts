// $ deno run 01-2.ts < 01-2.input
// https://adventofcode.com/2024/day/1

function problem(input: string) {
  const arr1: number[] = [];

  const occurrence = new Map<number, number>();

  for (const line of input.trim().split("\n")) {
    const [a, b] = line.split(/\s+/).map(Number);
    arr1.push(a);
    occurrence.set(b, (occurrence.get(b) ?? 0) + 1);
  }

  let sum = 0;

  for (const el of arr1) {
    sum += (occurrence.get(el) ?? 0) * el;
  }

  return sum;
}

const input = await new Response(Deno.stdin.readable).text();

console.log(problem(input));
