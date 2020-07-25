let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `
/*
现在我要开始画一个太极图了  
首先画一个div
**/
#div{
  trnasition:all 0.5s;
  width:200px;
  height:200px;
  border-radius:50%;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
现在画太极的两个小球
*/
#div::before{
  width: 100px;
  height: 100px;
  background:#fff;
  left:50%;
  top:0;
  transform:translate(-50%);
  border-radius: 50%;
  content:'';
  position:absolute;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
  
}
#div::after{
  width: 100px;
  height: 100px;
  background:#000;
  left:50%;
  bottom:0;
  transform:translate(-50%);
  border-radius: 50%;
  content:'';
  position:absolute;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

/*
现在来加一点动效,鼠标移上去会动的哦
*/
#div:hover{
  transform: translateX(-50%) rotate(720deg);
}

*/
`

let n = 0
let string2 = ''
let step = function () {
  setTimeout(() => {
    if (n + 1 <= string.length) {
      if (string[n] === '\n') {
        string2 += '<br>'
      } else if (string[n] === ' ') {
        string2 += '&nbsp;'
      } else {
        string2 += string[n]
      }
      style.innerHTML = string.substring(0, n)
      html.innerHTML = string2
      n++
      html.scroll(0, 999999)
      window.scroll(0, 999999)

      step()
    }
  }, 5)
}
step()
