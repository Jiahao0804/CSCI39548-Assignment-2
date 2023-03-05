/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.
In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
// myMap create a new array populated with the result of calling a provide function on every element in the calling array
Array.prototype.myMap = function(callbackFn) {
    const myMap_array = [];

    for (let i = 0; i < this.length; i++)
    {
      myMap_array.push(callbackFn(this[i], i, this));
    }

    return myMap_array;
  };
  
  // FILTER //
  // myFilter create a shallow copy of given array, filtered down with the elements from the given array
  Array.prototype.myFilter = function(callbackFn) {
    const myFilter_array = [];

    for (let i = 0; i < this.length; i++)
    {
      if (callbackFn(this[i], i, this))
      {
        myFilter_array.push(this[i]);
      }
    }

    return myFilter_array;
  };
  
  // SOME //
  // mySome test if the element in the array pass the condition
  // return ture if at least one element in the array return true, otherwise return false
  Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++)
    {
      if (callbackFn(this[i], i, this))
      {
        return true;
      }
    }

    return false;
  };
  
  // EVERY //
  // myEvery test whether all elements in the array pass the test implemented
  // return true if all the element in the array pass the condition, otherwise return false
  Array.prototype.myEvery = function(callbackFn) {
    for (let i = 0; i < this.length; i++)
    {
      if (!callbackFn(this[i], i , this))
      {
        return false;
      }
    }

    return true;
  };
  
  // REDUCE //
  // myReduce accumulate all the element in the array, return the total value of the accumulator
  Array.prototype.myReduce = function(callbackFn) {
    let accumulator = 0;

    for (let i = 0; i < this.length; i++)
    {
      accumulator = callbackFn(accumulator, this[i], i, this);
    }

    return accumulator;
  };
  
  // INCLUDES //
  // myIncludes determines whether an array includes a certain value among its entries
  // return true if the array contains the searchElement, otherwise return false
  Array.prototype.myIncludes = function(searchElement) {
    for (let i = 0; i < this.length; i++)
    {
      if (this[i] === searchElement)
      {
        return true;
      }
    }

    return false;
  };
  
  // INDEXOF //
  // myIndexOf returns the first index at which a given element can be found in the array, or -1 if it is not present
  // searchElement is the element that need to find in the array, num is the start index of the array
  // set num to default as 0 
  Array.prototype.myIndexOf = function(searchElement, num = 0) {
    for (let i = num; i < this.length; i++)
    {
      if (this[i] === searchElement)
      {
        return i;
      }
    }

    return -1;
  };
  
  // LASTINDEXOF //
  // myLastIndexOf returns the last index at which a given element can be found in the array, or -1 if it is not present
  // The array is searched backwards, starting at the length of the array - 1
  Array.prototype.myLastIndexOf = function(searchElement) {
    for (let i = this.length - 1; i >= 0; i--)
    {
      if (this[i] === searchElement)
      {
        return i;
      }
    }

    return -1;
  };
  
  // KEYS //
  // myKeys returns an array of a given object's own enumerable string-keyed property names
  Object.myKeys = function(object) {
    const keys = [];

    for (let key in object)
    {
      if (object.hasOwnProperty(key))
      {
        keys.push(key);
      }
    }

    return keys;
  };
  
  // VALUES //
  // myValues returns an array of a given object's own enumerable string-keyed property values
  Object.myValues = function(object) {
    const values = [];
    
    for (let key in object)
    {
      if (object.hasOwnProperty(key))
      {
        values.push(object[key]);
      }
    }

    return values;
  };
