// $ deno run 02-1.ts < 02-1.input
// https://adventofcode.com/2024/day/2

const MIN_THRESHOLD = 1;
const MAX_THRESHOLD = 3;

function isSafe(report: number[]): boolean {
  const [first, ...rest] = report;
  const second = rest[0];

  if (first === undefined) return false;
  if (rest.length === 0) return true;
  const { min, max } = first < second
    ? { min: MIN_THRESHOLD, max: MAX_THRESHOLD }
    : { min: -MAX_THRESHOLD, max: -MIN_THRESHOLD };

  let previous = first;
  for (const item of rest) {
    const delta = item - previous;
    if (delta < min) return false;
    if (delta > max) return false;
    previous = item;
  }
  return true;
}

const input = await new Response(Deno.stdin.readable).text();

let safeReports = 0;

for (const line of input.split("\n")) {
  if (line === "") continue;
  const report = line.split(" ").map((level) => Number(level));
  if (isSafe(report)) safeReports++;
}

console.log(safeReports);
