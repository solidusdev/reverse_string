let sample_string_1 = "javascript";
let sample_string_2 = "example";

// function #1 - algorithmic
function reverse_string_1(str) {

    // empty string
    let current_reverse_string = "";

    // start from the end of the string
    for (let i = str.length - 1; i >= 0; i--) {

        // add to the string variable
        current_reverse_string += str[i];
    }

    return current_reverse_string;
}

// function #2 - One Line Arrow Function
let reverse_string_2 = str => str.split("").reverse().join("");

console.log(reverse_string_1(sample_string_1)); // tpircsavaj
console.log(reverse_string_2(sample_string_2)); // elpmaxe