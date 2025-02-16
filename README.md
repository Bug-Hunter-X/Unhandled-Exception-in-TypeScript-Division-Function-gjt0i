# Unhandled Exception in TypeScript Division Function

This repository demonstrates a common error in TypeScript: forgetting to handle potential errors such as division by zero. The initial code lacks error handling, while the solution incorporates a `try...catch` block to gracefully handle exceptions.

## Bug

The `division` function doesn't handle the case where the divisor (`b`) is zero, resulting in a runtime error.  The `bug.ts` file shows this problematic code.

## Solution

The `bugSolution.ts` file demonstrates a solution using a `try...catch` block to handle the potential `Error` thrown when division by zero is attempted. This prevents the program from crashing and allows for more robust error handling.