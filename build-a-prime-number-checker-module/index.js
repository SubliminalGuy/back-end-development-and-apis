function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (num <= 3) return true; // 2 and 3 are prime numbers     
  if (num % 2 === 0 || num % 3 === 0) return false; // Eliminate multiples of 2 and 3
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false; // Check for factors
  }

  return true; // If no factors found, the number is prime
}

module.exports = { isPrime };

