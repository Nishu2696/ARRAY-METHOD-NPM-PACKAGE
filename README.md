#What is this?
    This package describes some of the array method

#Installation:

#Importing:

#Available Functions:

#SORT:
Sorts the given array in ascending order.

`let arr = [15, 25, 58, 7, 2, 63];
let result = array_methods.sort(arr); //output should be [2, 7, 15, 25, 58, 63]`

#REVERSE SORT:
Reverse sorting gives the array sorted in descending order.

`let arr = [15, 25, 58, 7, 2, 63];
let result = array_methods.rev_sort(arr); //output should be [63, 58, 25, 15, 7, 2]`

FIRST ELEMENT:
Finds the first element in the array.

let arr = [15, 25, 58, 7, 2, 63];
let result = array_methods.first_element(arr); //output should be 15

LAST ELEMENT:
Finds the last element in the array.

let arr = [15, 25, 58, 7, 2, 63];
let result = array_methods.last_element(arr); //output should be 63

MIDDLE ELEMENT:
Finds the middle element in a array.

let arr = [15, 25, 58, 7, 2, 63];
let result = array_methods.middle_element(arr); //output should be 58

ARRAY LENGTH:
Finds the length of the array.

let arr = [15, 25, 58, 7, 2, 63];
let result = array_methods.len_array(arr); //output should be 6

INDEX ELEMENT:
Finds the element at a particular index.

let arr = [15, 25, 58, 7, 2, 63];
let result = array_methods.len_array(arr, 2); //output should be 58

JOIN-ASCENDING:
Joins two array and the resultant array would be sorted in ascending order.

let arr = [15, 25, 58, 7, 2, 63];
let arr1 = [84, 56, 42, 50, 35, 94];
let result = array_methods.join_ascending(arr, arr1); //output will be [2, 7, 15, 25, 35, 42, 50, 56, 58, 63, 84, 94]

JOIN-DESCENDING:
Joins two array and the resultant array would be sorted in descending order.

let arr = [15, 25, 58, 7, 2, 63];
let arr1 = [84, 56, 42, 50, 35, 94];
let result = array_methods.join_ascending(arr, arr1); //output will be [94, 84, 63, 58, 56, 50, 42, 35, 25, 15, 7, 2]

DELETE-LAST:
Removes last element from the array and returns the new array.

let arr = [15, 25, 58, 7, 2, 63];
let result = array_methods.del_last(arr); //output will be [15, 25, 58, 7, 2]

DELETE-FIRST:
Removes the first element from the array and returns the new array

let arr = [15, 25, 58, 7, 2, 63];
let result = array_methods.del_first(arr); //output will be [25, 58, 7, 2, 63]

DELETE-INDEX-ELEMENT:

let arr = [15, 25, 58, 7, 2, 63];
let result = array_methods.del_index_element(arr, 2); //output will be [15, 25, 7, 2, 63]
