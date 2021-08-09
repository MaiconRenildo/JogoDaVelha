var vezdequem=document.querySelector(".placar")
var posicoes=document.querySelectorAll('.pos')
var valores=[]
var vez=0;
var win=0;
    
function finalizar(){
  if( 
    (valores[0]==valores[1] && valores[1]==valores[2] && valores[1]!=null) ||
    (valores[0]==valores[3] && valores[0]==valores[6] && valores[0]!=null) ||
    (valores[0]==valores[4] && valores[0]==valores[8] && valores[0]!=null) ||

    (valores[1]==valores[4] && valores[1]==valores[7] && valores[1]!=null) ||
    (valores[3]==valores[4] && valores[3]==valores[5] && valores[3]!=null) ||

    (valores[6]==valores[7] && valores[6]==valores[8] && valores[6]!=null) ||
    (valores[6]==valores[4] && valores[6]==valores[2] && valores[6]!=null) ||

    (valores[2]==valores[5] && valores[2]==valores[8] && valores[2]!=null) 
    ){
    if((vez%2)==0){
      setTimeout(function(){ alert("Vencedor: X"); }, 100);
      win=1;
    }else{
      setTimeout(function(){ alert("Vencedor: O"); }, 100);
      win=2;
    }
  }else if(vez==8){
    setTimeout(function(){ alert("EMPATE"); }, 100);
  }
}

function Vez(){
  if(win==0 && vez<9){
    if((vez%2)==0){
    vezdequem.innerHTML='<h2>Vez do X</h2>'
    }else{
      vezdequem.innerHTML='<h2>Vez do O</h2>'
    }
  }else{
    if(win==1){
      vezdequem.innerHTML='<h2>VENCEDOR: X</h2>'
    }else if(win==2){
      vezdequem.innerHTML='<h2>VENCEDOR: O</h2>'
    }else{
      vezdequem.innerHTML='<h2>EMPATOU</h2>'
    }

  }
}
    
posicoes.forEach(element => {
  element.onclick=()=>{
    if(element.style.backgroundImage=='' && vez<10 && win==0){
      if((vez%2)==0){
        element.style.backgroundImage="url('x.jpg')"
        valores[element.id]='x'
        }else{
        element.style.backgroundImage="url('0.jpg')"
        valores[element.id]='o'
        }
        finalizar()
        vez++;
        element.style.backgroundSize='100%';
        Vez();
    }
  }
});

var botao=document.querySelector('button')
botao.onclick=function(){
  posicoes.forEach(element => {
    element.style.backgroundImage=''
  })
  vezdequem.innerHTML="<h2>Vez do X</h2>"
  valores=[];
  vez=0;
  win=0;
  Vez();
}

Vez();