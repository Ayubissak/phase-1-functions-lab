function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Absolute difference between the pickup location and headquarters
  }
  
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; // Each block is 264 feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // Absolute difference between start and destination blocks
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
    } else if (distance > 2000 && distance < 2500) {
      return 25; // Flat fare of $25 for distance over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Scuber does not allow rides over 2500 feet
    }
  }
