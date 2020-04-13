

let boardArr = [['n','n','n','n','n','n','n'],
['n','n','n','n','n','n','n'],
['n','n','n','n','n','n','n'],
['n','n','n','n','n','n','n'],
['n','n','n','n','n','n','n'],
['n','n','n','n','n','n','n']];
let currentPlayer = "red";
let pieceID = 0;




/*---------------Checcking for victory conditions----------------------*/

//The first two functions constitutes the main checking
//checkIfWon() will move around the board to see if any wins happen
function checkIfWon()
{
  for(let i = 0; i < 6; i++)
  {
    for(let j = 0; j < 7; j++)
    {
      if(boardArr[i][j]==currentPlayer && checkIfConnect4(i,j))
      {
        alert(currentPlayer + " Won!");
      }
    }
  }
}

function checkIfConnect4(x, y)
{
  if(checkNW(x,y))
  {
    return true;
  }
  else if(checkN(x,y))
  {
    return true;
  }
  else if(checkNE(x,y))
  {
    return true;
  }
  else if(checkE(x,y))
  {
    return true;
  }
  else
  {
    return false;
  }
}



/*These next four functions are checking the NW N NE and E directions for a connect 4.
*Since checkIfWon() will check from lower left to upper right, we don't need to check for other
*directions since it will be redundant. */
/*Side Note: I've tried to define these functions recursively, but due to the immutability of
Javascript, I opted out to just use a bunch of if/then statements. I failed to realize this isn't c++.
If future me would like to define it recursively please be my guest.*/
function checkNW(x, y)
{
  x--;
  y++;
  if(x >= 0 && y <= 6 && boardArr[x][y] == currentPlayer)
  {
    x--;
    y++;
        if(x >= 0 && y <= 6 && boardArr[x][y] == currentPlayer)
        {
          x--;
          y++;
                if(x >= 0 && y <= 6 && boardArr[x][y] == currentPlayer)
                {
                  return true;
                }
                else
                {
                  return false;
                }
        }
        else
        {
          return false;
        }
  }
  else
  {
    return false;
  }
}

function checkN(x, y)
{
  y++;
  if(y <= 6 && boardArr[x][y] == currentPlayer)
  {
    y++;
        if(y <= 6 && boardArr[x][y] == currentPlayer)
        {
          y++;
                if(y <= 6 && boardArr[x][y] == currentPlayer)
                {
                  return true;
                }
                else
                {
                  return false;
                }
        }
        else
        {
          return false;
        }
  }
  else
  {
    return false;
  }
}

function checkNE(x, y)
{
  x++;
  y++;
  if(x <= 6 && y <= 6 && boardArr[x][y] == currentPlayer)
  {
    x++;
    y++;
        if(x <= 6 && y <= 6 && boardArr[x][y] == currentPlayer)
        {
          x++;
          y++;
                if(x <= 6 && y <= 6 && boardArr[x][y] == currentPlayer)
                {
                  return true;
                }
                else
                {
                  return false;
                }
        }
        else
        {
          return false;
        }
  }
  else
  {
    return false;
  }
}

function checkE(x, y)
{
  x++;
  if(x <= 6 && boardArr[x][y] == currentPlayer)
  {
    x++;
        if(x <= 6 && boardArr[x][y] == currentPlayer)
        {
          x++;
                if(x <= 6 && boardArr[x][y] == currentPlayer)
                {
                  return true;
                }
                else
                {
                  return false;
                }
        }
        else
        {
          return false;
        }
  }
  else
  {
    return false;
  }
}
/*---------------------------------------------------------------*/


//Just chages current player
function changePlayer()
{
  if(currentPlayer == "red")
  {
    currentPlayer = "yellow";
    document.getElementById("b1").style.background = "yellow";
    document.getElementById("b2").style.background = "yellow";
    document.getElementById("b3").style.background = "yellow";
    document.getElementById("b4").style.background = "yellow";
    document.getElementById("b5").style.background = "yellow";
    document.getElementById("b6").style.background = "yellow";
    document.getElementById("b7").style.background = "yellow";

  }
  else
  {
    currentPlayer = "red";
    document.getElementById("b1").style.background = "red";
    document.getElementById("b2").style.background = "red";
    document.getElementById("b3").style.background = "red";
    document.getElementById("b4").style.background = "red";
    document.getElementById("b5").style.background = "red";
    document.getElementById("b6").style.background = "red";
    document.getElementById("b7").style.background = "red";
  }
}


function addPiece(row, column)
{
  if(boardArr[5][column]=="red" || boardArr[5][column] == "yellow")
  {
    alert("Cannot place piece here!");
  }
  else if(boardArr[row][column]=="red" || boardArr[row][column] == "yellow")
  {

    row++
    //Note to self, evaluating functions inside the parameter is a big no no
    //ESPECIALLY in recursive ones, since JS evaluates the function AFTER its been called
    //causing an infinite loop, hence row++ is outside not inside the parameter
    addPiece(row, column);
  }
  else
  {
    boardArr[row][column] = currentPlayer;
    pieceID = (row*10) + column;
    checkIfWon();
    if(currentPlayer == 'red')
    {
      document.getElementById(pieceID).style.background = "red";
    }
    else if(currentPlayer == 'yellow')
    {
      document.getElementById(pieceID).style.background = "yellow";
    }
    changePlayer();

  }
}
