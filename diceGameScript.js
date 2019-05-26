

// I, Max Blamauer, 000760618 certify that this material is my original work. 
// No other person's work has been used without due acknowledgement. 
function NotifyPlayerTurn()
        {
            // Hide both messages
            player1Message.style.display = "none";
            player2Message.style.display = "none";

            var name1 = document.getElementById("name1").value;
            var name2 = document.getElementById("name2").value;

            if (isFirstPlayer == true)
            {
                // display player 1's message
                player1Message.innerHTML = name1 + " it's your turn!";
                player1Message.style.display = "block";
            }
            else
            {
                // hide player one message
                
                // display player 2's message 
                player2Message.innerHTML = name2 + " it's your turn!";
                player2Message.style.display = "block";
            }
        }

function writeNames()
        {
            // gets the element Id from the html and stores it into javascript variable
            var name1 = document.getElementById("name1").value;
            var name2 = document.getElementById("name2").value;
            
            // Verify inputs using Regex
            var name1Verified = name1.match(/^[a-zA-Z]+$/);
            var name2Verified = name2.match(/^[a-zA-Z]+$/);

            // if name is valid show all of the game material
            if (name1Verified != null && name2Verified != null)
            {

                // unhide roll section
                var unhide = document.getElementById("sectionToHide");
                unhide = unhide.style.display = "block";

                var hide = document.getElementById("hideWhenValid");
                hide = hide.style.display = "none";

                // remove error message if its the user's second time trying
                var errorMessage = document.getElementById("errorMessage"); 
                errorMessage = errorMessage.style.display = "none";

                // stores the names into the output variable and print
                document.getElementById("output1").innerHTML = name1;
                document.getElementById("output2").innerHTML = name2;
            }

            else
            {
                // prompt error message and focus on player 1
                document.getElementById("name1").focus();
                var errorMessage = document.getElementById("errorMessage");
                errorMessage = errorMessage.style.display = "block";
            }


            NotifyPlayerTurn();

        }

        // global variables
        var count = 0;
        var isFirstPlayer = true;
        var gameOver = false;
        function rolldice()
        {  

            // gets the element Id from the html and stores it into javascript variable
            var die1 = document.getElementById("die1");
            var die2 = document.getElementById("die2");
            var die3 = document.getElementById("die3");
            var status = document.getElementById("status");

            // decides whose turn it is and stores it into the appropriate variable
            var playerScore1 = (isFirstPlayer) ? player1Score1 : player2Score1;
            var playerScore2 = (isFirstPlayer) ? player1Score2 : player2Score2;
            var playerScore3 = (isFirstPlayer) ? player1Score3 : player2Score3;
            var playerTotal  = (isFirstPlayer) ? player1Total : player2Total;

            // clear the previous data
            die1.innerHTML = 0;
            die2.innerHTML = 0;
            die3.innerHTML = 0;

            // ensures no decimal number when rolling the dice
            var rolls = [];
            for (var i = count; i < 3; i++) 
            {
                rolls.push(Math.floor(Math.random() * 6) + 1);
            }
            
            // determines biggest number in the array
            var biggestNum = 0
            for (var i = 0; i < rolls.length; i++)
            {
                if (rolls[i] > biggestNum)
                {
                    biggestNum = rolls[i]; // stores it as biggestNum
                }    
            }

            // determines how many dice the player rolls with
            for (var i = 0; i < rolls.length; i++)
            {
                if (i == 0)
                {
                    die1.innerHTML = rolls[i];
                }

                if (i == 1)
                {
                    die2.innerHTML = rolls[i];
                }

                if (i == 2)
                {
                    die3.innerHTML = rolls[i];
                }
            
            }

            // message printing what the player scores
            status.innerHTML = "Your Highest Roll Is: " + biggestNum;
            count++; // increments count
 
            // Stores the variables each roll, using count variable
            if (count == 1)
            {
                playerScore1.innerHTML = biggestNum;
            }
            if (count == 2)
            {
                playerScore2.innerHTML = biggestNum;
            }
            if (count == 3)
            {
                playerScore3.innerHTML = biggestNum;

                // parses html elements to an int
                var firstRoll = parseInt(playerScore1.innerHTML);
                var secondRoll = parseInt(playerScore2.innerHTML);
                var thirdRoll = parseInt(playerScore3.innerHTML); 
                // adds all the rolls to the players total score
                var total = firstRoll + secondRoll + thirdRoll

                // prints the players total score
                playerTotal.innerHTML = "Total: " + total;

                if (isFirstPlayer == false)
                {
                    
                    var player1FinalScore = parseInt(player1Total.innerHTML.substring(7, player1Total.length));
                    var player2FinalScore = parseInt(player2Total.innerHTML.substring(7, player2Total.length));
                    
                    

                    if (player1FinalScore > player2FinalScore)
                    {
                        var name1 = document.getElementById("name1").value;
                        status.innerHTML = "Congratulations " + name1 + " you are the winner";
                    }
                    else if (player1FinalScore == player2FinalScore)
                    {
                        status.innerHTML = "ITS A TIE!";
                    }
                    else
                    {
                        var name2 = document.getElementById("name2").value;
                        status.innerHTML = "Congratulations " + name2 + " you are the winner";
                    }

                    gameOver = true;
                    
                    document.getElementById("rollButton").disabled = true;
                }

                isFirstPlayer = !isFirstPlayer;
                NotifyPlayerTurn();

                count = 0;
            }
        } 

        var helpCount = 0; // sets global variable to 0
        function helpButton()
        {
            if (helpCount % 2 == 0) // if the count is 
            {
                var help = document.getElementById("help"); // gets the html varibale help
                help = help.style.display = "block"; // shows the information within
            }
            else
            {
                var help = document.getElementById("help"); // gets the html vriable help
                help = help.style.display = "none"; // hides information
            }
            helpCount++; // incriments helpCount
        }

        function clearValues()
        {

            count = 0;
            isFirstPlayer = true;
            gameOver = false;

            // gets the element Id from the html and stores it into javascript variable
            var die1 = document.getElementById("die1");
            var die2 = document.getElementById("die2");
            var die3 = document.getElementById("die3");
            var status = document.getElementById("status");
            
            // clear the dice data
            die1.innerHTML = 0;
            die2.innerHTML = 0;
            die3.innerHTML = 0;

            // clears first player data
            player1Score1.innerHTML = '';
            player1Score2.innerHTML = '';
            player1Score3.innerHTML = '';
            player1Total.innerHTML = '';

            // clears second player data
            player2Score1.innerHTML = '';
            player2Score2.innerHTML = '';
            player2Score3.innerHTML = '';
            player2Total.innerHTML = '';

            // disables roll button
            document.getElementById("rollButton").disabled = false;

            // update status
            status.innerHTML = "The game has been Restarted.";
        }
