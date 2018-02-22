  var a = 24;
  var b = 9;
  var hour = 60;
  var quarter = 4;
  var array = [2,4,5,199,39,12,1];
  var count = 9;

  var car = {
    wheels: 4,
    passengers: 4,
    mileage: 20300,
    cost: 49928
  }

  var spaceship = {
    wheels: 18,
    rooms: 21,
    passengers: 29909394895803589193049389,
    cost: 0
  }

  var objectArray = [car, spaceship];

  //PART I

  //Function 1
  //Create a function that adds variables a and b, then divides them by 11.
  function func1(){
    var solution = a + b
    console.log(solution);
  }
  func1()

  //Function 2
  //Create a function that will console.log a value of 18.
  function func2(){
    console.log(18);
  }
  func2()
  //Function 3
  //Create a function that will console.log the last element of the array by accessing the value from the array.
  function func3(){
    var finale = array.pop()
    console.log(finale);
  }
  func3()

  //Function 4
  //Create a function that can divide hours by quarters, then add 10 to that result.
  function func4(){
    var answer = hour/4 + 10
    console.log(answer)
  }
  func4()

  //Function 5
  //Create a function that will multiply the 2nd and 3rd element from the array, then subtract 5 from that result.
  function func5(){
    var result = array[1] * array[2] - 5
    console.log(result);
  }
  func5()

  //Function 6
  //Create a function that will subtract the number of car wheels from the number of spaceship wheels.
  function func6(){
    var wheelsAnswer = spaceship.wheels - car.wheels
    console.log(wheelsAnswer);
  }
  func6()

  //PART II

  //Function 7
  //Create a function and using a for loop, iterate through the array. In this loop, increment the count of the variable count.
  function func7(){
    for (i = 0; i < array.length; i++) { 
      var daNumber = 
      console.log(daNumber);
  }
  }
  func7()

  //Function 8
  //Create a function and using a for loop, iterate through the objectArray. In this loop, increment the count of the passengers for the 1st element in the objectArray.
  function func8(){
    for (i = 0; i < objectArray[0]; i++)
    var daPassegers =
    console.log(daPassegers)
  }
  func8()

  //Function 9
  //Create a function that adds the 1st and 6th element of the array.
  function func9(){
    var finalAnswer = array[0] + array[5]
    console.log(finalAnswer);
  }
  func9()