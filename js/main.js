
function randomText(){
    var userNames = ["--Nelson Mandela" , "--Epictetus" ,"--Wayne Gretzy" , "--Elbert Hubbard" , "--Frank Sinatra"]

    var text = [ "Resentment is like drinking poison and waiting for your enemies to die." , "It's not what happens to you, but how you react to it that matters." , "You miss 100% of the shots you don't take." , "Do not take life too seriously. You will not get out alive." , "The best revenge is massive success."] 

    var num = Math.floor( Math.random() * userNames.length )
    
    console.log(num)
    
    document.getElementById("nameOfUser") .innerHTML = userNames[num] 

    document.getElementById("quote") .innerHTML = text[num] 

}
randomText()