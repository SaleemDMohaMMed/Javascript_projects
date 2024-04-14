//Define variables to store form,input,error,post
const form=document.getElementById('form')
const input=document.getElementById('input')
const error=document.getElementById('error')
const post=document.getElementById('post')
//Event listener for buttons clicks
form.addEventListener('click',(e)=>{
    e.preventDefault()
    formValidation()
})
const formValidation=()=>{
    if(input.value===''){
        console.log('error')
        error.innerHTML='please enter some text'
    }
    else{
        console.log('success')
        error.innerHTML=''
        acceptData()
        showData()
    }
}
//Initialize to store todo items
let data={}
// Function to accept a data 
const acceptData=()=>{
    data['name']=input.value
    console.log(data)
}
// Function to show the data items
const showData=()=>{
    post.innerHTML+=
    `<div id="namepost">
    <p>Name</p>
    <p>${data.name}</p>
    <span class="actions">
        <p>Action</p>
        <i onClick='deleteData(this)' class="fa-sharp fa-solid fa-trash-can"></i>
        <i onClick='editData(this)' class="fa-solid fa-user-pen"></i>
    </span>
</div>`
input.value=''
}
// Function to delete a todo item
const deleteData=(e)=>{
    e.parentElement.parentElement.remove()
   }   
//Function to edit a todo item
const editData=(e)=>{
      input.value=e.parentElement.previousElementSibling.innerHTML
      e.parentElement.parentElement.remove()
}