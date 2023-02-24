export function minBy(array, cb) {
   if(array.length !== 0){
        let min = cb(array[0]);
        for (let i = 1; i < array.length; i++){
            if(cb(array[i]) < min) {
                var minArray = array[i];
                min = cb(array[i]);
            }
        }   
    }
    return minArray;    
}

export function maxBy(array, cb) {
    if(array.length !== 0){
        let max = cb(array[0]);
        for (let i = 1; i < array.length; i++){
            if(cb(array[i]) > max) {
                var maxArray = array[i];
                max = cb(array[i]);
            }
        }
    }
    return maxArray;    
}
