"use strict";
function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    const result = fibonacci(num - 1) + fibonacci(num - 2);
    return result;
}
const fib = fibonacci(5);
//# sourceMappingURL=test.js.map