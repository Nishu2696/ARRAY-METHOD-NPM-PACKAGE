//Sort the array

let sort = (a) => {
    let arr = a.map(item => item);
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len ; j++){
            if( arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

module.exports.sort = sort;

//reverse sort the array

let rev_sort = (a) => {
    let arr = a.map(item => item);
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len ; j++){
            if( arr[i] < arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

module.exports.rev_sort = rev_sort;

//first element in the array

let first_element = (a) => {
    return a.shift();
}

module.exports.first_element = first_element;

//last element in the array

let last_element = (a) => {
    return a.pop();
}

module.exports.last_element = last_element;

//find the middle element of the array

let middle_element = (a) => {
    let arr = a.map(item => item);
    if((arr.length)%2 === 0){
        // console.log("hello");
        let len = parseInt((arr.length-1)/2);
        return arr[len];
    }
    else{
        let len = parseInt((arr.length)/2);
        return arr[len];
    }
}

module.exports.middle_element = middle_element;

//find the length of the array

let len_array = (a) => {
    let arr = a.map(item => item);
    return arr.length;
}

module.exports.len_array = len_array;

//find the element when the index is given

let index_element = (a, b) => {
    let arr = a.map(item => item);
    if((b > 0) && (b < arr.length)){
        return arr[b];
    }
    else{
        if(b < 0){
            return "Index range is negataive"
        }
        else{
            return "Index range is more than the length of the array"
        }
    }
}

module.exports.index_element = index_element;

//join two arrays and sorting them in ascending order

let join_ascending = (arr, b) => {
    arr = arr.concat(b);
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len ; j++){
            if( arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

module.exports.join = join_ascending;

//join two arrays and sorting them in descending order

let join_descending = (arr, b) => {
    arr = arr.concat(b);
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len ; j++){
            if( arr[i] < arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

module.exports.join = join_descending;

//delete the last element from the array

let del_last = (arr) => {
    arr.pop();
    return arr;
}

module.exports.del_last = del_last;

//delete the first element from the array

let del_first = (arr) => {
    arr.shift();
    return arr;
}

module.exports.del_first = del_first;

//delete the element based on the index and return array with the deleted index element

let del_index_element = (arr, b) => {}

module.exports.del_index_element = del_index_element;