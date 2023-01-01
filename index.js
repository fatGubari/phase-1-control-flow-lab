function scuberGreetingForFeet(number){
  if (number===199) {
    return "This one is on me!";
  } else if(number>=400 && number<=2000){
    return 'That will be twenty bucks.';
  }else if(number<=2500){
    return 'I will gladly take your thirty bucks.';
  }else{
    return 'No can do.';
  }
  // Write your code here!
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city==="NYC") {
    return 'Ok, sounds good.';
  } else{
    return 'No go.';
  }
  // if(city==='Pittsburgh')
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip==='generous') {
    return 'Thank you so much.';
  } else if(tip==='not as generous'){
    return 'Thank you.'
  }else{
    return 'Bye.';
  }
}