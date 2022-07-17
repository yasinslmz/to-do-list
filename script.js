//items

const input=document.querySelector('#add');
const btn=document.querySelector('#btn');
const delete_button=document.querySelector('#delete-button1');
const list=document.querySelector('#list')

//addEventlistener

btn.addEventListener('click',btnClick);
list.addEventListener('click',listClick);
input.addEventListener("keydown",function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        btnClick(e);
    }
});

//functions




function btnClick(){
    var text=input.value;

    if(text==''){
        alert('Bir ürün yazmalısınız');
    }
    else{
        li=document.createElement('li');
        var button = document.createElement('button');
        var i = document.createElement('i');
        li.classList.add('element-group-list-item');
        button.className='btn';
        i.className="fa fa-close";
        button.appendChild(i);
        var text2=button;
        console.log(text2);
        li.innerHTML=text;
        li.appendChild(button);

        console.log(li);
        list.insertBefore(li, list.childNodes[0]);
        input.value='';
        button.addEventListener('click',function(){
            this.parentNode.remove();
            });

    }

}

function listClick(e){
    if(e.target.tagName=='LI'){
        e.target.classList.toggle("checked");
    }

}
