<?php

  $sum = 0;
  for($i = 0; $i < 1000; $i++) {
    if($i % 3 == 0 || $i % 5 == 0) {
      $sum += $i;
    }
  }
  echo $sum; // output is: 233168

?>


<!-- Breakdown -->


<!-- 


- First we defined variable called $sum and asign value of 0

- We created for loop
      - in for loop we use $i variable also known as iteration variable and asign value to 0
      - then we said (used comparison) if $i is less than 1000
      - if $i is less than 1000 then keep adding $i variable to itself, 
        we do that like this ($i++) or we can do ($i += $i) or ($i = $i + $i)

- In for loop we used if statement
      - in if statement we say if $i is perfectly divisible by 3 OR 5 (with no decimal number also known floating number)
        we used % for that, this is also known as module.
      - then we use comparison operators || (double pipe) which means OR
        || will check if first statement is true or if second statment is true
        this if statement will pass the test if one or the other statment is TRUE.

- In above if statement, if left or right side is true $sum will keep adding $i number to itself

- And finally will echo or print result of $sum which is final number of all multiples of 3 and 5 bellow 1000 added together

- Final output result of $sum is 233168 


-->
