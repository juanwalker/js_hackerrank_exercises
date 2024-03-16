
/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
function hourglassSum(arr) {
    // Write your code here
    var maxValue= 0;
    var sum = 0;
    for(let y=0; y<= 3;y++){
        for(let x=0; x<=3;x++){
            sum =arr[y][x] + arr[y][x+1] + + arr[y][x+2]
            sum += arr[y+1][x+1]
            sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
            if (sum > maxValue){
                maxValue = sum;
            }
            sum = 0;
        }
    }
    return maxValue;

}

let myArray = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0],
];
console.log("input:")
console.log(myArray)
console.log("output :" + hourglassSum(myArray))