// QUESTION 1

/* Write a javascript program that compares the score of a student,
eg, if the score is above 75 then print out "A" and if score is between
65-74 the score should be "B" if the score is between 55 - 64 print "C"
if the score is between 45 - 54 print "D", else print "Fail" */

function grade (score){                          //declaring a 'grade' function
    if ((score >= 0) && (score <= 100)){         //Making sure the score ranges from 0 to 100
        if (score >= 75){
            console.log("A");
        }else if (65 <= score <= 74){
            console.log("B");
        }else if (55 <= score <= 64){            //if statements for the set condition     
            console.log("C");
        }else if (45 <= score <= 54){
            console.log("D");
        }else {
            console.log("FAIL");
        }
    }else {
        console.log("Invalid score. Score can only range from 0 to 100")
    }
}

// Tests to see if the grade function works
grade(24)
grade(45)
grade(101)