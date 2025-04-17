
const ele = document.getElementById("menu-icon")
const ele1 = document.getElementById("navbar-responsive")
const ele2 = document.getElementById("menu-icon-responsive")

ele.addEventListener('click', () => {
    if(ele1.style.width === "0px") {
        ele1.style.width = "250px"
    } else {
        ele1.style.width = "0px"
    }
})

ele2.addEventListener('click', () => {
    ele1.style.width = "0px"
})

function onclickLink() {
    ele1.style.width = "0px"
}

function displayText(i) {
    const introline = document.getElementById("intro")
    const str = "Hi I'm Shrinivas I'm a Full Stack Developer"
    
    introline.innerHTML += str.charAt(i)
    // console.log(introline.innerText)
    i++
    setTimeout(()=> {
        if(i < str.length) {
            displayText(i)
        }
    }, 60)
}

window.addEventListener('load', () => {
    displayText(0)
})

const skillrow1 = document.getElementById("skills-row-1")
const skillrow2 = document.getElementById("skills-row-2")
const skillrow3 = document.getElementById("skills-row-3")
const skillrow4 = document.getElementById("skills-row-4")
const skilldiv = document.getElementById("skills-div")
skillrow1.innerHTML += skillrow1.innerHTML 
skillrow2.innerHTML += skillrow2.innerHTML + skillrow2.innerHTML
skillrow3.innerHTML += skillrow3.innerHTML + skillrow3.innerHTML
skillrow4.innerHTML += skillrow4.innerHTML 

// web
skillrow1.addEventListener('mouseover', ()=> {
    skillrow1.style.animationPlayState = 'paused'
})
skillrow1.addEventListener('mouseleave', () => {
    skillrow1.style.animationPlayState = 'running'
})

skillrow2.addEventListener('mouseover', ()=> {
    skillrow2.style.animationPlayState = 'paused'
})
skillrow2.addEventListener('mouseleave', () => {
    skillrow2.style.animationPlayState = 'running'
})

skillrow3.addEventListener('mouseover', ()=> {
    skillrow3.style.animationPlayState = 'paused'
})
skillrow3.addEventListener('mouseleave', () => {
    skillrow3.style.animationPlayState = 'running'
})

skillrow4.addEventListener('mouseover', ()=> {
    skillrow4.style.animationPlayState = 'paused'
})
skillrow4.addEventListener('mouseleave', () => {
    skillrow4.style.animationPlayState = 'running'
})

// mobile
skillrow1.addEventListener('touchstart', () => {
    skillrow1.style.animationPlayState = 'paused'
})
skillrow1.addEventListener('touchend', () => {
    skillrow1.style.animationPlayState = 'running'
})

skillrow2.addEventListener('touchstart', () => {
    skillrow2.style.animationPlayState = 'paused'
})
skillrow2.addEventListener('touchend', () => {
    skillrow2.style.animationPlayState = 'running'
})

skillrow3.addEventListener('touchstart', () => {
    skillrow3.style.animationPlayState = 'paused'
})
skillrow3.addEventListener('touchend', () => {
    skillrow3.style.animationPlayState = 'running'
})

skillrow4.addEventListener('touchstart', () => {
    skillrow4.style.animationPlayState = 'paused'
})
skillrow4.addEventListener('touchend', () => {
    skillrow4.style.animationPlayState = 'running'
})