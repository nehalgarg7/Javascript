function reverse(str)
{
    console.log(str.split("").reduce(((acc, char) => char + acc),""));
}

setTimeout(reverse,2000,"Hello");