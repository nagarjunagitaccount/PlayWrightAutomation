class UiUtils
{
    constructor()
    {

    }
    
     generateRandomNumber(max=10000,min=100){
    
        return Math.floor(Math.random() * (max - min) + min) ;
          
    }
     generateRandomEmail(){
      
    return 'firstname'+'.'+'lastname'+this.generateRandomNumber()+'@'+'gmail.com';
    }
     generateRandomPassword()
    {
        return 'FireEXWorks'+'@'+this.generateRandomNumber()+'!';
    
    }
}

module.exports={UiUtils};