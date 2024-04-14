// accessing the html elements
const containerele=document.querySelector('.contain-fluid')
// Function to display the card on the webpage
//Fetch data from the API
function product(){
    fetch('https://fakestoreapi.com/products/')
      // Parse response data as JSON
    .then(res=>res.json())
    .then(item=>{
        console.log(item)
        item.map((data)=>{
            containerele.innerHTML+=` 
            <div class="card" style="width: 18rem;">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">${data.description}</p>
              <p class="price">$${data.price}</p>
              <a href="#" class="btn btn-primary">ADD TO CART</a>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>`
        })
    
    }    
    )
    

}
product();