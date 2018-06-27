//Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built-
//  with the sides of given length and false in any other case.
//(In this case, all triangles must have surface greater than 0 to be accepted)

  function isTriangle(a,b,c){
    //if the value of a, b or c are equal to 0 return false
  if ( a === 0 || b === 0 || c === 0 ){
   return false;
   //if the value of a + b is less than or equal to c return false
  }else if ( a + b <= c ) {
    return false;
    //if the value of c + b is less than or equal to a return false
  }else if ( c + b <= a ) {
    return false;
    //if the value of a + c is less than or equal to b return false
  }else if ( a + c <= b ) {
    return false;
    //if all pass return true
  }
    return true;
}
