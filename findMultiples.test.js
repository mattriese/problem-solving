describe("#findMultiples", function() {
  // TODO: write tests!
  it("should return array of multiples", function() {
    expect(findMultiples([5,6,7,5,6,5], 1)).toEqual([5,6,7]);
    expect(findMultiples([5,6,7,5,6,5], 2)).toEqual([5,6]);
    expect(findMultiples([5,6,7,5,6,5], 3)).toEqual([5]);
  });

  it("should return empty array if no multiples appear minimumCount number of times", function() {
    expect(findMultiples([5,6,7,5,6,5], 4)).toEqual([]);
  });

  it("should return empty array if passed empty array", function() {
    expect(findMultiples([], 1)).toEqual([]);
  });

  it("should return error message if second argument not provided", function() {
    expect(findMultiples([5,6,7,5,6,5])).toEqual("error: Usage - findMultiples(array, minimumCount)");
  });

});
