// getElementById will get all HTML elements I created by a specific "id attribute"
// The goal here is to show how a function can be usec. In this case we added 1 + 2 + 3.


function displaySum() {
    let One = Number(document.getElementById('One').innerHTML)
    let Two = Number(document.getElementById('Two').innerHTML)
    let Three = Number(document.getElementById('Three').innerHTML)

    let total = One + Two + Three;
    document.getElementById("answer").innerHTML = `$(One) + $(Two) + $(Three), equal to $( )`;
}

document.getElementById('sumButton').addEventListener("click", displaySum);