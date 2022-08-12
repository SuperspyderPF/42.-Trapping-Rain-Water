
var trap = function(height) {
    let l = 0
    let r = height.length - 1
    let currentHeight = 0
    let totalWater = 0
    while(l < r) {
        if (height[l] < height[r]) {
          if(height[l] > currentHeight) currentHeight = height[l]
          else totalWater += currentHeight - height[l]
          l++
        } else {
          if (height[r] > currentHeight) currentHeight = height[r]
          else totalWater += currentHeight - height[r]
          r--
        }
    }
    
   return totalWater 
};

/// time O(n)
/// space O(1)