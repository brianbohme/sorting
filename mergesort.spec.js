describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,2,3,4,5,6]) ).toEqual( [[1,2,3],[4,5,6]] );
  });

  it('handles an array with two elements', function() {
    expect( split([1,2]) ).toEqual( [[1],[2]] );
  });

  it('splits an array with odd length', function() {
    expect( split([1,2,3,4,5]) ).toEqual( [[1,2],[3,4,5]] );
  });

});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([1,2,3],[4,5,6]) ).toEqual( [1,2,3,4,5,6] );
  });

  it('is able to merge two sorted arrays into one sorted array with interleaved values', function(){
    expect( merge([1,3,5],[2,4,6]) ).toEqual( [1,2,3,4,5,6] );
  });

  it('is able to merge two sorted arrays into one sorted array with negative values', function(){
    expect( merge([-3,-1,5],[-2,4,6]) ).toEqual( [-3,-2,-1,4,5,6] );
  });

});

describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles an array with single element', function(){
    expect( mergeSort([3]) ).toEqual( [3] );
  });

  it('handles a normal array', function(){
    expect( mergeSort([3,1,2,8,5,9,7,6,4]) ).toEqual( [1,2,3,4,5,6,7,8,9] );
  });

  it('handles an inorder array', function(){
    expect( mergeSort([1,2,3,4,5,6,7,8,9]) ).toEqual( [1,2,3,4,5,6,7,8,9] );
  });

  it('handles an array with negative numbers', function(){
    expect( mergeSort([1,2,3,4,-5,-6,-7,-8,-9]) ).toEqual( [-9,-8,-7,-6,-5,1,2,3,4] );
  });

});




