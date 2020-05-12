//  Pattern Merge Intervals

var merge = function (intervals) {
  const merge = (a, b) => {
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
  };
  const isOverlapping = (a, b) => {
    return a[1] >= b[0];
  };
  // nLogN
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 1;
  while (i < intervals.length) {
    if (isOverlapping(intervals[i - 1], intervals[i])) {
      intervals.splice(i - 1, 2, merge(intervals[i - 1], intervals[i]));
    } else {
      i += 1;
    }
  }
  return intervals;
};

// O(nLogN)
