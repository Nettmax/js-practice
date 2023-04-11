let arr = ['{', ')', '(', ')', ')', '}', '[', ']', '('];
let countOpen = 0;
let countClose = 0;
for (let i = 0; i < arr.length; i++){
    if(arr[i] == '{' || arr [i] == '(' || arr [i] == '[') {
        countOpen+=1;
        } else if (arr[i] == ')' || arr[i] == '}' || arr[i] == ']') {
             countClose+=1;
    }
}
if(countOpen == countClose && (countOpen - countClose) >= 0) {
    console.log (true);
} else {
    console.log(false)
}