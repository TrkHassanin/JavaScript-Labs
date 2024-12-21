// Function(1) to sort 3 numbers
function sort_3_nums(num_1, num_2, num_3){
    var num_1 = parseFloat(prompt("Enter first number: "));
    var num_2 = parseFloat(prompt("Enter second number: "));
    var num_3 = parseFloat(prompt("Enter third number: "));
    
    if(num_1 >= num_2 && num_1 >= num_3)
        (num_2 >= num_3) ? alert("Result: " + num_1 + "," + num_2 + "," + num_3) : alert("Result: " + num_1 + "," + num_3 + "," + num_2);

    else if(num_2 >= num_1 && num_2 >= num_3)
        (num_1 >= num_3) ? alert("Result: " + num_2 + "," + num_1 + "," + num_3) : alert("Result: " + num_2 + "," + num_3 + "," + num_1);

    else 
        (num_1 >= num_2) ? alert("Result: " + num_3 + "," + num_1 + "," + num_2) : alert("Result: " + num_3 + "," + num_2 + "," + num_1);
}


// function(2) to print multibles of 3 and 5
function FizzBuzz(){
    for(var i = 0; i < 100; i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
            console.log("FizzBuzz");
        else if (i % 3 == 0)
            console.log("Fizz");
        else if (i % 5 == 0)
            console.log("Buzz");
        else 
            console.log(i);
    }
}

// Function(3) to sum multibles of 3 and 5 
function sum_multibles(){
    var result = 0;
    for(var i = 0; i < 1000; i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
            result+=i; 
    }
    console.log(result);
}


// Function(4)
function guess_number(){
    var random_num = Math.floor(Math.random((10 - 1)) + 1);
    var user_guess;
    var count_guess = 0;
    while(count_guess < 3){
        user_guess = parseInt(prompt("Enter an intger between 1 and 10: "));
        
        if(random_num == user_guess)
        {
            console.log("Good Work");
            return;
        }

        else
        {
            count_guess++;
            if(count_guess < 3)
            {
                var usr_confirm = confirm("Wrong guess, Want to try again?");
                if(usr_confirm == false)
                    return;
            }    
        }
    }

    console.log("GameOver!");
}


sort_3_nums();
FizzBuzz();
sum_multibles();
guess_number();