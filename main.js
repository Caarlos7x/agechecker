function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('textano')
  var res = document.querySelector( 'div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    if (fsex[0].checked) {
      gênero = 'masculino'
      if (idade >=0 && idade < 10) {
        // criança
      } else if (idade < 21) {
        // jovem
      } else if (idade < 50) {
        //Adulto
      } else {
        // Idoso
      }
    } else if (fsex[1].checked) {
      gênero = 'feminino'
      if (idade >=0 && idade < 10) {
        // criança
      } else if (idade < 21) {
        // jovem
      } else if (idade < 50) {
        //Adulto
      } else {
        // Idoso
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos um perfil ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}