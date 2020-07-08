// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Solution 2

function findLongestWordLength(s) {   //1
  return s.split(' ')                 //2
    .reduce(function(x, y) {          //3
      //console.log(x)                //3.1
      return Math.max(x, y.length)    //4
    }, 0);                            //5
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))


/*/

/ Notes

    //1 Initializes function that takes in a string as an argument

    //2 The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to    make each split. source - [https://devdocs.io/javascript/global_objects/string/split]

    In this case the split method is instructed to split the entire string by word as it uses a space in between the quotes. If no space is used the string will be split by letter/character. It is also worth noting that the split method will split the contents of the string into an  array as mentioned on Devdocs

    //3 The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value. 

        The reducer function is fed four parameters:

        Accumulator (acc)
        Current Value (cur)
        Current Index (idx)
        Source Array (src)

        Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.

        source - [https://devdocs.io/javascript/global_objects/array/reduce]

        This reducer function will run through each word (Note this is a method for an array and the string has become an array via the split method which is a method used on strings)

        The "x" in this case represents the Accumulator (acc)
        The "y" in this case represents the Current Value (cur)

        The console.log(x) will output:
        0
        3
        5
        5
        5
        6
        6
        6
        6

        This means (as per line 5) that x will start at 0 and when it gets to "The" it will count 3 characters, after "The", "quick" will be 5 characters and "brown" as well. 

        When it gets to "fox" it will not include it as it not greater than 5 characters and does not meet the Math.max criteria.

        When it gets to "jumped" the Math.max criteria is met and every word after "jumped" no longer meets the criteria. Therefore count stays on 6 characters until the last(9th)[8th Index] word

    //4 This line simply says, when the reducer function has iterated through all 9 words then return the x or word with the longest character count

        
        FCC Note

    //5 In case you’re wondering about that 0 after the callback function, it is used to give an initial value to the x, so that Math.max will know where to start.
        Source - [https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-find-the-longest-word-in-a-string/16015]

   
                                
                                
                                
                                */