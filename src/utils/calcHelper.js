export function media(av){
  let total = 0;
  let prevTotal = 0;

  let av1 = av.AV1 + av.APS_1;
  let av2 = av.AV2 + av.APS_2;
  let av3 = av.AV3;

  let avs = [av1, av2, av3];
  avs.forEach( av => {
    let avTotal = 0;

    avTotal = av;
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