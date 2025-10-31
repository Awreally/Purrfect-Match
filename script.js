const catImg = document.querySelector('.cats');

getcatImg();

async function getcatImg() {
        const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=25', {
        headers: {
             
        }
});
        const data = await res.json();
        const dataUrl = data.url;
        const randomImg = data[Math.floor(Math.random() * data.length)];
        
        console.log(data);
        catImg.src = randomImg.url;   
    }



