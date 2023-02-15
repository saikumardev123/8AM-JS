function f1() {

    var a = 10; // local variable
    if (a < 20) {
        let a = 200; // block scoped variable
        console.log(a); //  200
    }
    console.log(a); // 10
}

f1();