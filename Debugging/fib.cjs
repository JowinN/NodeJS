function fib(n) {
    let a = 0, b = 1;
    console.log(a);
    console.log(b);

    for (let i = 2; i < n; i++) {
        debugger;
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

fib(10);
