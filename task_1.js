function countAngles(N, K) {
    let triangleAngles = N * 3; // кількість кутів у N трикутниках
    let rhombusAngles = K * 4; // кількість кутів у K ромбах
    let totalAngles = triangleAngles + rhombusAngles; // сумарна кількість кутів
    return totalAngles; // повертаємо результат
  }
  