let i =0;
while(i<5)
{
    console.log("Iteration number: " + i);
    i++;
}

let sum =0;
while(sum<=10)
{
    if(sum==5)
        continue;
    sum+=sum;
    sum++;
}
console.log("Sum of the numbers are",sum);