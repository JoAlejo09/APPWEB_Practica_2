const obtenerMemes = async () => {
    const request = await fetch("https://api.imgflip.com/get_memes"); 
    const response = await request.json()
    console.log(response)

    const memesContainers = document.getElementById('list-memes');
    const memeTemplate = document.getElementById('meme'); 
    
    response.data.memes.slice(0,8).forEach(meme=>{
        const newMemeCard = memeTemplate.cloneNode(true)
        const img = newMemeCard.querySelector("img")
        img.src = meme.url
        memesContainers.appendChild(newMemeCard)
    })
    memeTemplate.remove()
}
const obtenerGif = async() =>{
    const request = await fetch("https://api.giphy.com/v1/stickers/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=cr7&limit=2")
    const response = await request.json()
    console.log(response.data[0].images.original.url)
    const gifTemplate= document.getElementById('gif');
    gifTemplate.src= response.data[0].images.original.url;
    
}

obtenerMemes();
obtenerGif();