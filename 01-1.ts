// $ deno run 01-1.ts < 01-1.input
// https://adventofcode.com/2024/day/1

function problem(input: string) {
  let arr1: number[] = [];
  let arr2: number[] = [];

  for (const line of input.trim().split("\n")) {
    const [a, b] = line.split(/\s+/).map(Number);
    arr1.push(a);
    arr2.push(b);
  }

  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    sum += Math.abs(arr1[i] - arr2[i]);
  }

  return sum;
}

const input = await new Response(Deno.stdin.readable).text();

console.log(problem(input));
