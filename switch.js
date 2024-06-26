function categorizeSeason(x) {

  switch(x){
    case (3 ,4, 5):
      return 'summer';
      
      case (6, 7, 8):
        return 'spring';
    
        default:
          console.log('invalid season');
        break;
  }
  
}

console.log(categorizeSeason(9));