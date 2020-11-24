var  average = arr => arr.reduce( ( t, y ) => t + y, 0 ) / arr.length;
    
const result1 = average([1, 4, 7]);
const result2 = average([10, 5]);
const result3 = average([1.5, 3, 2.5, 1]);
console.log(result1,result2,result3);
