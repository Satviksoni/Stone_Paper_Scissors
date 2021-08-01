function f1(yourchoice)
{
    var humanchoice,botchoice
    botchoice=f2()
    //console.log(botchoice)
    //console.log(yourchoice.id)
    humanchoice=yourchoice.id

    result=f3(humanchoice,botchoice)
    console.log(result)
    message=f4(result)
    //console.log(message)
    f5(humanchoice,botchoice,message)
      
}
function f2()
{
    var pick=Math.floor(Math.random()*3)            // computer choice
    return ['rock','paper','scissor'][pick]
}
function f3(humanchoice,botchoice)
{
   var dataset={
       'rock':{'rock':0.5,'paper':0,'scissor':1},
       'paper':{'rock':1,'paper':0.5,'scissor':0},
       'scissor':{'rock':0,'paper':1,'scissor':0.5}   // decide winner in array for
   };                                                  //[0,1]:you loss [1,0]:you won [0.5,0.5]:you tied
   var yourscore=dataset[humanchoice][botchoice];
   var computerscore=dataset[botchoice][humanchoice];
   return [yourscore,computerscore];
}
function f4 ([yourscore])
{
    if(yourscore===0)
    {
        return {'message':'You Lost','color':'red'}
    }
    else if(yourscore===1)
    {
        return {'message':'You Won','color':'green'}
    }
    else
    {
        return {'message':'Game Tie','color':'black'}
    }
}
function f5(humanimagechoice,botimagechoice,message)
{
    var imagedataset={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
        }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    document.getElementById('M').remove();
    var humandiv=document.createElement('div');
    var messagediv=document.createElement('div');
    var botdiv=document.createElement('div');
    var buttondiv=document.createElement('div');
    humandiv.innerHTML="<img src='"+imagedataset[humanimagechoice]+"'height=200 width=200>";
    messagediv.innerHTML="<h1 style='color:"+message['color']+";'>'"+message['message']+"'</h1>";
    botdiv.innerHTML="<img src='"+imagedataset[botimagechoice]+"'height=200 width=200>";
    buttondiv.innerHTML="<button type=button class=button  onclick=window.location.reload();>Playagain</button>";
    
    document.getElementById('b').appendChild(humandiv);
    document.getElementById('b').appendChild(messagediv);
    document.getElementById('b').appendChild(botdiv);
    document.getElementById('a').appendChild(buttondiv);

}


    
