function sort(width, height, length, mass) {
  const volume = width * height * length;

  const bulky = volume >= 1000000 || Math.max(width, height, length) >= 150;
  const heavy = mass >= 20;

  if (bulky && heavy) return "REJECTED";
  if (bulky || heavy) return "SPECIAL";
  return "STANDARD";
}

// Test cases
console.log(sort(100,100,100,10)); // STANDARD
console.log(sort(200,50,50,10));   // SPECIAL
console.log(sort(50,50,50,25));    // SPECIAL
console.log(sort(200,200,200,25)); // REJECTED