function tabuada () {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
  if (num.value == 0) {
      window.alert ('Digite um número')
  } else {
    var n = Number(num.value)
    var c = 1
    tab.innerHTML = '' // necessário para substituir o novo resultado
    while (c <=10) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
      }  
    
   
  }
}