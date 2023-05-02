function subtractUntilLessThanThird(a, b, c) {
    while (a - b >= c) {
      a -= b;
    }
    return a;
  }
  