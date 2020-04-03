var x = 12

function scope() {
    var x = 33; // redeclaring x, if var/let is not included x will still equal 12
    if(true){
        let x = 45; // leaks to x var above,no longer 33, unless let used - local scope
        console.log(x);
    }
    console.log(x); // Local Scope - x=33 in function only (locally)
}

scope();
console.log(x); // Global Scope - x=12 globally, applies to whole file