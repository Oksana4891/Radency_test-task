// Початковий код
function loadGrain(levels) {
    let countGrain = 0;
    let levelLeft = levels[0];
  
    if (levels.length <= 2) {
      countGrain = 0;
    }
  
    for (let i = 1; i < levels.length - 1; i++) {
      if (levels[i] >= levelLeft) {
        levelLeft = levels[i];
      }
  
      let levelRigth = levels[levels.length - 1];
  
      for (let j = i + 1; j < levels.length; j++) {
        levelRigth = Math.max(levelRigth, levels[j]);
      }
      
      let levelsMin = Math.min(levelLeft, levelRigth);
  
      if (levelsMin < levels[i]) {
        countGrain += 0;
      } else {
        countGrain += levelsMin - levels[i];
      }
    }
  
    return countGrain;
  }
  
  // Приклади тестів
  console.log(loadGrain([4, 0, 1, 3])); // 5
  console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])); // 7
  console.log(loadGrain([2, 0, 1, 5, 2, 7])); // 6
  console.log(loadGrain([2, 4, 2])); // 0
  console.log(loadGrain([7, 4])); // 0
  console.log(loadGrain([])); // 0
  
  console.log(loadGrain([2, 4, 2, 2, 1])); // 0
  console.log(loadGrain([1, 4, 7, 2, 1])); // 0
  console.log(loadGrain([1, 5, 2, 1, 20, 2, 1])); // 7