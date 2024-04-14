// Define an array of objects to store quotes
const qoutess=[{
    qoute:`The way to get started is to quit talking and begin doing. `,
    author:`-Walt Disney`
},
{
    qoute:`If life were predictable it would cease to be life, and be without flavor. `,
    author:`-Eleanor Roosevelt`
},
{
    qoute:`Life is what happens when you're busy making other plans. `,
    author:`-John Lennon`

},
{
    qoute:`If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. `,
    author:`-James Cameron`
},
{
    qoute:`Don't judge each day by the harvest you reap but by the seeds that you plant.`,
    author:` -Robert Louis Stevenson`
},
{
    qoute:`When you reach the end of your rope, tie a knot in it and hang on.`,
    author:`-Franklin D. Roosevelt`
}
]


// access the elements 
const elementdisplay=document.getElementById('display');
const authorele=document.getElementById('Author');
const Btn=document.getElementById('generate');

//function to generate different quotes
// normal fuction funcname(){ }

// arrow functions:
const RandomQoute=()=>{
    // logic to genernate random qoutes
    let index=Math.floor(Math.random()*(qoutess.length))
    //to display the output of quote
    elementdisplay.innerHTML=qoutess[index].qoute
    // to display the output of author
    authorele.innerHTML='~'+qoutess[index].author
}
//btu=n fun
Btn.addEventListener('click',RandomQoute)
