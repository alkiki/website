import Draggable from 'draggable'
const pic1 = document.getElementById('pic1')
const pic2 = document.getElementById('pic2')
const pic3 = document.getElementById('pic3')
const pic4 = document.getElementById('pic4')
const pic5 = document.getElementById('pic5')
const pic6 = document.getElementById('pic6')
const pic7 = document.getElementById('pic7')
const pic8 = document.getElementById('pic8')
const pic9 = document.getElementById('pic9')
const pic10 = document.getElementById('pic10')
const songrec = document.getElementById('songrec')
const btnScrollToTop = document.getElementById('buttonScrollToTop')

btnScrollToTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})

const pics = document.getElementById('pictures')

new Draggable(pic1)
new Draggable(pic2)
new Draggable(pic3)
new Draggable(pic4)
new Draggable(pic5)
new Draggable(pic6)
new Draggable(pic7)
new Draggable(pic8)
new Draggable(pic9)
new Draggable(pic10)


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

window.onload = function(){
    randomDiv();
  }
  
  function randomDiv(){
    var variable1 = getRandomArbitrary(3, 7)
    var variable2 = getRandomArbitrary(3, 7)
    var variable3 = getRandomArbitrary(3, 7)
    var variable4= getRandomArbitrary(3, 7)
    var variable5 = getRandomArbitrary(3, 7)
    var variable6 = getRandomArbitrary(3, 7)
    var variable7 = getRandomArbitrary(3, 7)
    var variable8 = getRandomArbitrary(3, 7)
    var variable9 = getRandomArbitrary(3, 7)
    var variable10 = getRandomArbitrary(3, 7)
    var w1 = variable1 * 50 + 114;
    var h1 = variable1 * 50;
    pic1.style.width = w1 + "px";
    pic1.style.height = h1 + "px";
    pic1.style.left  = (pics.offsetWidth - w1*4) + "px";
    pic1.style.bottom = (pics.offsetHeight - h1) + "px";

    var w2 = variable2 * 30 + 114;
    var h2 = variable2 * 30;
    pic2.style.width = w2 + "px";
    pic2.style.height = h2 + "px";
    pic2.style.left  = (pics.offsetWidth - w2*5) + "px";
    pic2.style.top = (pics.offsetHeight - h2) + "px";

    var w3 = variable3 * 70 + 114;
    var h3 = variable3 * 70;
    pic3.style.width = w3 + "px";
    pic3.style.height = h3 + "px";
    pic3.style.left  = (pics.offsetWidth - w3*3) + "px";
    pic3.style.top = (pics.offsetHeight - h3) + "px";

    var w4 = variable4 * 50 + 114;
    var h4 = variable4 * 50;
    pic4.style.width = w4 + "px";
    pic4.style.height = h4 + "px";
    pic4.style.left  = (pics.offsetWidth - w4) + "px";
    pic4.style.bottom = (pics.offsetHeight - h4) + "px";

    var w5 = variable5 * 40 + 114;
    var h5 = variable5 * 40;
    pic5.style.width = w5 + "px";
    pic5.style.height = h5 + "px";
    pic5.style.left  = (pics.offsetWidth - w5*2) + "px";
    pic5.style.bottom = (pics.offsetHeight - h5) + "px";

    var w6 = variable6 * 50 + 114;
    var h6 = variable6 * 50;
    pic6.style.width = w6 + "px";
    pic6.style.height = h6 + "px";
    pic6.style.left  = (pics.offsetWidth - w6*4) + "px";
    pic6.style.top = (pics.offsetHeight - h6*2) + "px";

    var w7 = variable7 * 50;
    var h7 = variable7 * 50+150;
    pic7.style.width = w7 + "px";
    pic7.style.height = h7 + "px";
    pic7.style.left  = (pics.offsetWidth - w7*4) + "px";
    pic7.style.bottom = (pics.offsetHeight - h7+50) + "px";

    var w8 = variable8 * 50;
    var h8 = variable8 * 50+150;
    pic8.style.width = w8 + "px";
    pic8.style.height = h8 + "px";
    pic8.style.left  = (pics.offsetWidth - w8*2) + "px";
    pic8.style.top = (pics.offsetHeight - h8) + "px";

    var w9 = variable9 * 60;
    var h9 = variable9 * 60;
    pic9.style.width = w9 + "px";
    pic9.style.height = h9 + "px";
    pic9.style.left  = (pics.offsetWidth - w9*3) + "px";
    pic9.style.top = (pics.offsetHeight - h9) + "px";

    var w10 = variable10 * 40;
    var h10 = variable10 * 40;
    pic10.style.width = w10 + "px";
    pic10.style.height = h10 + "px";
    pic10.style.right  = (pics.offsetWidth - w10*2) + "px";
    pic10.style.bottom = (pics.offsetHeight - h10) + "px";

    // var w11 = variable11 * 20;
    // var h11 = variable9 * 20 + 100;
    // pic11.style.width = w11 + "px";
    // pic11.style.height = h11 + "px";
    // pic11.style.left  = (pics.offsetWidth - w11*3) + "px";
    // pic11.style.top = (pics.offsetHeight - h11) + "px";
    document.body.appendChild(pic1);
    document.body.appendChild(pic2)
    document.body.appendChild(pic3)
    document.body.appendChild(pic4)
    document.body.appendChild(pic5)
    document.body.appendChild(pic6)
    document.body.appendChild(pic7)
    document.body.appendChild(pic8)
    document.body.appendChild(pic9)
    document.body.appendChild(pic10)
    // document.body.appendChild(pic11)
  }


pic1.addEventListener('dblclick', function(){
    document.getElementById('film_photos').scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"})
})
pic2.addEventListener('dblclick', function(){
    document.getElementById('film_photos').scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"})
})
pic3.addEventListener('dblclick', function(){
    document.getElementById('film_photos').scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"})
})
pic4.addEventListener('dblclick', function(){
    document.getElementById('film_photos').scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"})
})
pic5.addEventListener('dblclick', function(){
    document.getElementById('film_photos').scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"})
})
pic6.addEventListener('dblclick', function(){
    document.getElementById('film_photos').scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"})
})



pic7.addEventListener('dblclick', function(){
    document.getElementById('films').scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"})
})

pic8.addEventListener('dblclick', function(){
    document.getElementById('films').scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"})
})
pic9.addEventListener('dblclick', function(){
    document.getElementById('music').scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"})
})

pic10.addEventListener('dblclick', function(){
    document.getElementById('music').scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"})
})



const diary = document.getElementById('diary')

async function getData(){
    try{
        const response = await fetch('https://opensheet.elk.sh/1lbg_8eszY-sclkmOIQzUy5S9pPr3ztekBy_58hCF7u8/Sheet1')
        const data = await response.json()
       data.forEach((row) =>{
        const container = document.createElement('div')
        const date = document.createElement('p')
        date.id = 'date'
        container.id = 'container'
        const title = document.createElement('p')
        container.append(date);
        container.append(title)
        diary.append(container)
        title.innerText = row.Name
        date.innerText = row.Date
       })
    }
    catch (err){
        console.log(err)
    }
}

getData()
const songrecp = document.getElementById('songrecp')
async function getRandomMusic(){
    try{
        const response = await fetch('https://opensheet.elk.sh/1UW2j9gKRQ-qkBPi9Ru4UVS6TVTs1WGLqH5-R66QYnpA/Sheet1')
        const data = await response.json()
        songrec.addEventListener('click', function(){
        songrecp.innerHTML = '';
        var number =  getRandomArbitrary(0, data.length)
        const music_container = document.createElement('div')
        var track = document.createElement('p')
        var artist = document.createElement('p')
        var genre = document.createElement('p')
        music_container.append(track)
        music_container.append(artist)
        music_container.append(genre)
        songrecp.append(music_container)
        track.innerText = 'Name: ' + data[number].Track
        artist.innerText = 'Artist: '+ data[number].Artist
        genre.innerText = 'Genres: ' + data[number].Genres
        })
    }
    catch (err){
        console.log(err)
    }
}
getRandomMusic()