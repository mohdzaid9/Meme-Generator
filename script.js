let btn = document.getElementById('btn')
let meme = document.getElementById('memeBody')
let memeTitle = document.getElementById('memeTitle')

//functionality

const generateMeme=()=>{
    fetch('https://meme-api.com/gimme')
    .then((res)=>res.json())
    .then((data=>(meme.src=data.url,
    memeTitle.innerHTML=data.title
)))

}

    //getting things on display

btn.addEventListener('click',()=>{ 
    console.log('btn clicked')
    generateMeme()})