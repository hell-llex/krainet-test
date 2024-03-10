function nthFibo(n) {
  let fi0 = 0, fi1 = 1, fin = 1;
  if (n == 1) return `the ${n} Fibonacci number => ${fi0}`
  if (n == 2) return `the ${n} Fibonacci number => ${fi1}`
  for (let i = 3; i <= n; i++) {
    fin = fi0 + fi1
    fi0 = fi1
    fi1 = fin
    if (i == n) return `the ${n} Fibonacci number => ${fin}`
  }
}

console.log('Для вывода числа из последовательности Фибоначчи можно напрямую в консоли вызвать функцию nthFibo, передав ей нужное число. \nНапример: nthFibo(5) => 3.');

console.log(nthFibo(5));
