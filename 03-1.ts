// $ deno run 03-1.ts < 03-1.input
// https://adventofcode.com/2024/day/3

const input = await new Response(Deno.stdin.readable).text();

const NUMBER_REGEXP = /mul\((\d{1,3}),(\d{1,3})\)/g;

function solve(line: string) {
  const matches = line.matchAll(NUMBER_REGEXP);
  let sum = 0;
  for (const [, p1, p2] of matches) {
    sum += Number(p1) * Number(p2);
  }
  return sum;
}

let sum = 0;
for (const line of input.split("\n")) {
  sum += solve(line);
}

console.log(sum);
