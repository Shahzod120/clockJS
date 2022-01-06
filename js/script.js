let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')

let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')

// let x = 0

// function rec() {

//   x++
//   console.log(x);

//   let y = setTimeout(() => {
//     rec()
//   }, 100);

//   if (x == 10) {
//     clearTimeout(y)
//   }

// }

// rec()

function clock() {
  
  const time = new Date()
  
  let hourArrow = time.getHours()
  let minArrow = time.getMinutes()
  let secArrow = time.getSeconds()
  
  h.style.transform = `rotate(${hourArrow * 30}deg)`
  m.style.transform = `rotate(${minArrow * 6}deg)`
  s.style.transform = `rotate(${secArrow * 6}deg)`
  
  setTimeout(() => {
    clock()
  }, 1000);
  
  hours.innerHTML = hourArrow < 10 ? "0" + hourArrow : hourArrow
  minutes.innerHTML = minArrow < 10 ? "0" + minArrow : minArrow
  
}

clock()

let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener('click', () => {
    
    for (let k = 0; k < tabsItem.length; k++) {
      tabsItem[k].classList.remove('active')
      tabsContentItem[k].classList.remove('active')
    }
    
    tabsItem[i].classList.add('active')
    tabsContentItem[i].classList.add('active')
    
    // if (tabsItem[i].classList.contains("active")) {
      // console.log('bor');
      // tabsItem[i].classList.add("qwer")
      // tabsItem[i].classList.remove("active")
      // tabsItem[i].classList.toggle("active")
    // } else {
      // console.log(`yo'q`);
    // }
    
  })
}

let stopwatchHours = document.querySelector('.stopwatch__hours')
let stopwatchMinutes = document.querySelector('.stopwatch__minutes')
let stopwatchSeconds = document.querySelector('.stopwatch__seconds')
let stopwatchBtn = document.querySelector('.stopwatch__btn')
let tabsLinkSpan = document.querySelector('.tabsLink__span')
let x;

stopwatchBtn.addEventListener('click', () => {

if (stopwatchBtn.innerHTML == 'start') {
  stopwatchBtn.innerHTML = 'stop'
  tabsLinkSpan.classList.add('active')
  watch()
} else if (stopwatchBtn.innerHTML == 'stop') {

  stopwatchBtn.innerHTML = 'clear'
  tabsLinkSpan.classList.remove('active')
  tabsLinkSpan.classList.add('active_clear')
  clearTimeout(x)
} else {
  stopwatchBtn.innerHTML = 'start'
  tabsLinkSpan.classList.remove('active_clear')
  stopwatchHours.innerHTML = 0
  stopwatchMinutes.innerHTML = 0
  stopwatchSeconds.innerHTML = 0
}

})

function watch() {
  stopwatchSeconds.innerHTML++

  if(stopwatchSeconds.innerHTML > 59) {
    stopwatchSeconds.innerHTML = 0
    stopwatchMinutes.innerHTML++
    if(stopwatchMinutes.innerHTML > 5) {
      stopwatchMinutes.innerHTML = 0
      stopwatchHours.innerHTML++
    }
  }

x = setTimeout(() => {
  watch()
}, 1000)

}