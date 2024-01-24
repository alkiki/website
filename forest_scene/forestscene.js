const heroText = document.getElementById('heroText')
const forestBack = document.getElementById('forestBack')
const forestMid = document.getElementById('forestMid')
const forestMid2 = document.getElementById('forestMid2')
const leaf1 = document.getElementById('leaf-1')
const leaf2 = document.getElementById('leaf-2')
const leaf3 = document.getElementById('leaf-3')
const leaf4 = document.getElementById('leaf-4')
const leaf5 = document.getElementById('leaf-5')
const leaf6 = document.getElementById('leaf-6')
const leaf7 = document.getElementById('leaf-7')
const leaf8 = document.getElementById('leaf-8')
const leaf9 = document.getElementById('leaf-9')
const raindrop1 = document.getElementById('raindrop-1')
const raindrop2 = document.getElementById('raindrop-2')
const raindrop3 = document.getElementById('raindrop-3')
const raindrop4 = document.getElementById('raindrop-4')
const raindrop5 = document.getElementById('raindrop-5')
const raindrop6 = document.getElementById('raindrop-6')
const raindrop7 = document.getElementById('raindrop-7')


window.addEventListener('scroll', () => {
    let val = window.scrollY;
    heroText.style.bottom = `-${val * 2.5}px`
    forestBack.style.bottom = `${val * 0.2}px`
    forestMid2.style.bottom = `-${val * 0.3}px`
    forestMid.style.bottom = `-${val * 0.2}px`
    leaf1.style.top = `${val * 0.97}px`
    leaf2.style.top = `${val * 0.7}px`
    leaf3.style.top = `${val * 0.3}px`
    leaf4.style.top = `${val * 0.76}px`
    leaf5.style.top = `${val * 0.2}px`
    leaf6.style.top = `${val * 0.4}px`
    // leaf7.style.top = `${val * 0.8}px`
    leaf8.style.top = `${val * 0.3}px`
    leaf9.style.top = `${val * 0.5}px`
    raindrop1.style.top = `${val * 0.34}px`
    raindrop2.style.top = `${val * 0.2}px`
    raindrop3.style.top = `${val * 0.74}px`
    raindrop4.style.top = `${val * 0.42}px`
    raindrop5.style.top = `${val * 0.9}px`
    raindrop6.style.top = `${val * 0.72}px`
    raindrop7.style.top = `${val * 0.8}px`
})

document.getElementById("goback").addEventListener("click", function () {
    window.location.href = "website/index.html";
  });
