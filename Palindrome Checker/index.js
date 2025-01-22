const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("") 
} 

function check() {
    const value = input.value;
    const reversed = reverseString(value);

    if (value === reversed) {
        alert("P A L I N D R O M E")
    } else {
        alert("NOT TODAY!")
    }

    input.value = "";
}