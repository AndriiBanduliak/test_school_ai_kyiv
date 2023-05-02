function findNumber(arr, n) {
    for (let i = 1; i < n - 1; i++) {
      if (arr[i - 1] === 0 && arr[i + 1] === 0 && arr[i] !== 0) {
        return i;
      }
    }
    return -1;
  }
  
  // Приклад виклику функції:
  console.log(findNumber([0, 4, 0, 8], 4)); // повинно вивести 1
  