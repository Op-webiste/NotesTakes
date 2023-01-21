let btn1 = document.getElementById("btn1");
let disabled_link = document.getElementById("disabled_link");

disabled_link.addEventListener("click",()=>{
alert("Please Sign-up Or Login First")
})


btn1.addEventListener("click",()=>{
 if(input1.value == ''){
    let empty_para = document.createElement("p");
    const empty_para_text =document.createTextNode("Empty");
    empty_para.appendChild(empty_para_text);
    document.getElementById('buttons').appendChild(empty_para);

    let dleletebtn = document.createElement("button");
    const dleletebtn_text = document.createTextNode("Delete");
    dleletebtn.appendChild(dleletebtn_text);
    dleletebtn.style.fontSize = '1.3rem';
    dleletebtn.style.padding = '5px 30px';
    dleletebtn.style.border = 'none';
    dleletebtn.style.borderRadius = '20px'
    dleletebtn.style.color = 'white';
    dleletebtn.style.backgroundColor = 'red';
    dleletebtn.style.cursor = 'pointer';
    document.getElementById("buttons").appendChild(dleletebtn);

    dleletebtn.addEventListener('click',()=>{
        empty_para.remove();
        dleletebtn.remove();
        para.remove();
        editbtn.remove();
        edit_bar.remove();
        save_btn.remove();
    })

 }else{

    let para = document.createElement("p");
    para.id = 'para1';
    const para_text = document.createTextNode(input1.value);
    para.appendChild(para_text);
    para.style.fontSize = '1.5rem';
    document.getElementById("buttons").appendChild(para);

   
    

    let dleletebtn = document.createElement("button");
    const dleletebtn_text = document.createTextNode("Delete");
    dleletebtn.appendChild(dleletebtn_text);
    dleletebtn.style.fontSize = '1.3rem';
    dleletebtn.style.padding = '5px 30px';
    dleletebtn.style.border = 'none';
    dleletebtn.style.borderRadius = '20px'
    dleletebtn.style.color = 'white';
    dleletebtn.style.backgroundColor = 'red';
    dleletebtn.style.cursor = 'pointer';
    dleletebtn.style.margin = '0px 3px'
    document.getElementById("buttons").appendChild(dleletebtn);


    let editbtn = document.createElement("button");
    const editbtn_text = document.createTextNode("Edit Note");
    editbtn.appendChild(editbtn_text);
    editbtn.style.fontSize = '1.3rem';
    editbtn.style.padding = '5px 30px';
    editbtn.style.border = 'none';
    editbtn.style.borderRadius = '20px'
    editbtn.style.color = 'white';
    editbtn.style.backgroundColor = 'green';
    editbtn.style.cursor = 'pointer';
    document.getElementById("buttons").appendChild(editbtn);

    dleletebtn.addEventListener('click',()=>{
        para.remove();
        dleletebtn.remove();
        editbtn.remove();
        edit_bar.remove();
        save_btn.remove();
    })


    editbtn.addEventListener('click',()=>{
        let edit_bar = document.createElement('input');
        edit_bar.id='input2'

        document.getElementById("buttons").appendChild(edit_bar);
        document.getElementById("input2").value = para.innerHTML;




        let save_btn = document.createElement("button");
        const save_btn_text = document.createTextNode('Save Changes');
        save_btn.appendChild(save_btn_text);
        document.getElementById("buttons").appendChild(save_btn);
        save_btn.style.fontSize = '1.3rem';
        save_btn.style.padding = '5px 30px';
        save_btn.style.border = 'none';
        save_btn.style.borderRadius = '20px'
        save_btn.style.color = 'white';
        save_btn.style.backgroundColor = 'green';
        save_btn.style.cursor = 'pointer';

      save_btn.addEventListener('click',()=>{
       document.getElementById("para1").innerHTML = edit_bar.value;
       edit_bar.remove();
       save_btn.remove();
      })

    })






 }
    













})

btn2.addEventListener('click',()=>{
    input1.value= '';
})

