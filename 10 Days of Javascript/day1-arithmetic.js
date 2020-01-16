module.exports.getArea = (length, width) => {
  return length * width;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
module.exports.getPerimeter = (length, width) => {
  return (length * 2) + (width * 2);
}
