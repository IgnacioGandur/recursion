#!/usr/bin/node

function fibs(num, arr = [0,1,])
{   
    if (num < 2)
    {
        return num;
    }
    else
    {
        for (let i = 2; i < num; i++)  
        {
            let number = (arr[i - 1]) + (arr[i - 2]);
            arr.push(number);
        }
        return arr;
    }
}

console.log(fibs(8));