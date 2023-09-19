#!/usr/bin/node

function fibonacciRecursive(num)
{
    // return (num < 2) ? num : fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
    if (num < 2)
    {
        return num;
    }
    else
    {
        return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
    }
}

console.log(fibonacciRecursive(7));