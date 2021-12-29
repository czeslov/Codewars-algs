function squareDigits(num){
  var strnNUM=String(num);
  var sum='';
  for(let i=0;i<strnNUM.length;i++){
    sum+=strnNUM[i]*strnNUM[i];
  }
  return Number(sum);
}