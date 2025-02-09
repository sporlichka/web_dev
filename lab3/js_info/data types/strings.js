//1
function ucFirst(str){
    if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

//2
function checkSpam(str){
    let lowstr = str.toLowercase()
    if(lowstr.includes("viagra") || lowstr.includes('xxx')){
        return false;
    }
    return true;
}
//3
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

  //4
  function extractCurrencyValue(str) {
    return +str.slice(1);
  }