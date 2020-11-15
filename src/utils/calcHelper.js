export function media(av){
  let total = 0;
  let prevTotal = 0;
  av.forEach( av => {
    let prova = 0;
    let aps = 0;
    let avTotal = 0;
    if(av.prova){
      prova = av.prova;
    }
    if(av.aps){
      aps = av.aps
    }
    avTotal = prova + aps;
    if(avTotal < prevTotal){
      total += 0;
    }else{
      total += avTotal;
    }
    prevTotal = avTotal;
  })
  total = total/2 
  if(!total){
    return "Calculando"
  }
  return total.toPrecision(1);
}

export function quartil(data, q){
  data=Array_Sort_Numbers(data);
  var pos = ((data.length) - 1) * q;
  var base = Math.floor(pos);
  var rest = pos - base;
  if( (data[base+1]!==undefined) ) {
    console.log(data[base] + rest * (data[base+1] - data[base]))
    return data[base] + rest * (data[base+1] - data[base]);
  } else {
    return data[base];
  }
}

function Array_Sort_Numbers(inputarray){
  return inputarray.sort(function(a, b) {
    return a - b;
  });
}

export function desvio_padrao(medias) {
  let media = 0;
  medias.forEach( m => {
    media += m;
  });
  media = media/medias.length;

  let varianca = 0;
  medias.forEach( m => {
    varianca += (media - m) * (media - m);
  })
  varianca = varianca/medias.length;
  return Math.sqrt(varianca).toPrecision(1);
}