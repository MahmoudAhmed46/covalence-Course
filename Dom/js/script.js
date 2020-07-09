const colors=['blueviolet','darkblue','salmon','seagreen','steelblue','teal','tomato','slateblue'];
let cnt=1;
let ul;
//colors.forEach(color=>console.log(Math.floor((Math.random()*8)+0)));
document.addEventListener("DOMContentLoaded",function(){
     let button=document.createElement('button');
     let btnText=document.createTextNode('Add Square');
     button.appendChild(btnText);
     button.className='btnClick';
     button.style.marginBottom='10px';
     button.style.display='block';
     button.addEventListener('click',newSquare);
    document.body.appendChild(button);
    
}); 

//Helper Function
//function to insert new item in Dom
function newSquare(){
    let div=document.createElement('div');
    div.className='box';
    div.id=cnt++;
    div.style.width='100px';
    div.style.height='100px';
    div.style.border='1px solid #333';
    div.style.color='#FFFFFF';
    div.style.backgroundColor='black';
    div.style.margin='5px';
    div.style.float='left';
    div.style.textAlign='center';
    div.style.paddingTop='40px';
    div.style.fontSize='25px';
    div.addEventListener('mouseover',function(){
        div.textContent=div.id;
    });
    div.addEventListener('mouseout',function(){
        div.textContent='';
    });
    div.addEventListener('click',function(){
        let randomColor=Math.floor(Math.random()*8+0);
        div.style.backgroundColor=colors[randomColor];
    });
    div.addEventListener('dblclick',function(){
        let boxs=document.getElementsByClassName('box');
        if(!(parseInt(div.id)&1)){
            if(div.nextSibling!==null){
                div.nextSibling.remove();
            }
            else{
                alert("There is not Square After Clicked Square");
            }
        }
        else{
            if(div.previousSibling!==null&&div.previousSibling.nodeName!=='BUTTON'){
                div.previousSibling.remove();
            }
            else{
                alert("There is not Square Before Clicked Square");
            }
        }
    });
    document.body.appendChild(div);    
}
