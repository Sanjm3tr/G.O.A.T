function removeItem(a, b) {
    for (let i = b; i < a.length; i++) {
      a[i] = a[i + 1];
    }
    a.length = a.length - 1;
    return a;
  }
  
  let removeArray = removeItem([1, 2, 3, 4], 1);
  console.log(removeArray);