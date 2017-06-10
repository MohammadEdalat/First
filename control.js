var _num = 0;
var _Calculation=false;
var _sum = 0;
var _OprandSelected=false;
document.write("<h1>سلام عزیزم خوبی</h1>");


const Opration={
    Plus : 'Plus',
    Minus : 'Minus',
    Multiplication : 'Multipl',
    Divide:'Divide' ,
    Equal : 'Equal'
}

var _opration;

function printName(name) {
    alert(name);
}

function GetSqrt(num)
{
    return num * num;
}


function CalculateAmount(opration)
{

    if (typeof opration !== 'undefined')
    {
        if (opration!=Opration.Equal)
        {
            _opration = opration;
            _OprandSelected=true;

            ChangeOperandColor(opration);
        }
        else {
          ClearOperandsColor();
        }
    }

    var sum=_sum;


    if (!_Calculation) return;

    var screen = document.getElementById("output");
    var num = Number(screen.innerText);


    switch (_opration) {
        case undefined:
            return;
        case Opration.Plus:
            sum = sum + num;
            break;
        case Opration.Minus:
            sum = sum - num;
            break;
        case Opration.Multiplication:
            sum = sum * num;
            break;
        case Opration.Divide:
            sum = sum / num;
            break;
    }
    
    if (opration!=Opration.Equal)
      _sum = sum;
    else
      _sum=0;

    screen.innerText = sum;
    _Calculation=false;
}



function ChangeOperandColor(opration)
{
  ClearOperandsColor();
  var operbutton=document.getElementsByClassName(opration);
  operbutton[0].style.color="red";
}

function ClearOperandsColor()
{
  var operbuttons = document.getElementsByClassName('oper');
  for (var i = 0; i < operbuttons.length; i++) {
    operbuttons[i].style.color="white";
  }
}


function AddToScreen(number) {

    if (_OprandSelected)
    {
        var screen = document.getElementById("output");
        _num = Number(screen.innerText);
        screen.innerText = "";
        if (_sum==0)
            _sum=_num;
        _Calculation=true;
        _OprandSelected=false;
    }
    var screen = document.getElementById("output");
    screen.innerText += number;
}


function  ClearScreen()
{
    var screen = document.getElementById("output");
    screen.innerText = "";

    _num = 0;
    _Calculation=false;
    _OprandSelected=false;
    _sum=0;
}
