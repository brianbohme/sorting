describe('Bubble Sort', function(){

  beforeEach(function(){
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with single element', function(){
    expect( bubbleSort([3]) ).toEqual( [3] );
  });

  it('handles a normal array', function(){
    expect( bubbleSort([3,1,2,8,5,9,7,6,4]) ).toEqual( [1,2,3,4,5,6,7,8,9] );
  });

  it('handles an inorder array', function(){
    expect( bubbleSort([1,2,3,4,5,6,7,8,9]) ).toEqual( [1,2,3,4,5,6,7,8,9] );
  });

  it('handles an array with negative numbers', function(){
    expect( bubbleSort([1,2,3,4,-5,-6,-7,-8,-9]) ).toEqual( [-9,-8,-7,-6,-5,1,2,3,4] );
  });
});

/*
it('number of swaps performed', function () {
      window.bubbleSort().and.returnValue(swap.calls.count());
  });
*/
