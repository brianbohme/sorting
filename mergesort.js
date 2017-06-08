function split(arr){
  var middle = parseInt(arr.length /2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);
  return [left, right]
}

function merge(firstArr, secondArr){
  var result = [], k = 0, i = 0, j = 0;

  while(firstArr.length > i && secondArr.length > j){
    if(firstArr[i] < secondArr[j]){
      result[k++] = firstArr[i++];
    }else{
      result[k++] = secondArr[j++];
    }
  }

  while(firstArr.length > i){
    result[k++] = firstArr[i++];
  }

  while(secondArr.length > j){
   result[k++] = secondArr[j++];
  }

  return result;
}

function mergeSort(arr){
  if(arr.length < 2){
    return arr
  }else{
    var twoArrays = split(arr);
    return merge(mergeSort(twoArrays[0]), mergeSort(twoArrays[1]))
  }
}

