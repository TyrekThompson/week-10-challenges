var search = function(num,arr){
    for (let i= 0; i <= arr.length; i++){
        if (num === arr[i]){
            return arr.indexOf(num);
        }
        else{
            console.log(-1);
        }
    }
}