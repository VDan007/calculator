

function keyPress(e){
    switch(e.keyCode){

      case 8:
        document.getElementById('clear').click();
        break;
      case 77:
        document.getElementById('saveToMemory').click();
        break;
      case 82:
        document.getElementById('getFromMemory').click();
        break;
      case 13:
        document.getElementById('equal').click();
        break;
      case 88:
        document.getElementById('multiply').click();
        break;
      case 65:
        document.getElementById('add').click();
        break;
      case 83:
        document.getElementById('subtract').click();
        break;
      case 68:
        document.getElementById('devide').click();
        break;
      case 190:
        document.getElementById('.').click();
        break;
      case 48:
        document.getElementById('0').click();
        break;
      case 49:
        document.getElementById('1').click();
        break;
      case 50:
        document.getElementById('2').click();
        break;
      case 51:
        document.getElementById('3').click();
        break;
      case 52:
        document.getElementById('4').click();
        break;
      case 53:
        document.getElementById('5').click();
        break;
      case 54:
        document.getElementById('6').click();
        break;
      case 55:
        document.getElementById('7').click();
        break;
      case 56:
        document.getElementById('8').click();
        break;
      case 57:
        document.getElementById('9').click();
        break;
    }
  }

  export { keyPress };