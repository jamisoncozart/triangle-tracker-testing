|Behavior|Input|Output|
|:-----:|:-----:|:-----:|
|Passing 3 lengths into Triangle constructor should create a triangle object with side1, side2, and side3 with equivalent lengths.|var triangle = new Triangle(2,4,5);|triangle.side1 === 2, triangle.side2 === 4, triangle.side3 === 5|
|The Triangle.checkType() method should return "not a triangle" if the 3 sides of the Triangle object don't make a possible triangle.|var notTriangle = new Triangle(3,9,22); notTriangle.checkType();| "not a triangle" |
|The Triangle.checkType() method should return "scalene triangle" if the 3 sides of the Triangle object create a scalene triangle.|var scaleneTriangle = new Triangle(4,5,7); scaleneTriangle.checkType();| "scalene triangle" |
|The Triangle.checkType() method should return "isoceles triangle" if the 3 sides of the Triangle object create an isosceles triangle.|var isoscelesTriangle = new Triangle(5,5,7); scaleneTriangle.checkType();| "isosceles triangle" |
|The Triangle.checkType() method should return "equilateral triangle" if the 3 sides of the Triangle object are exactly the same.|var equilateralTriangle = new Triangle(5,5,5); equilateralTriangle.checkType();| "equilateral triangle" |