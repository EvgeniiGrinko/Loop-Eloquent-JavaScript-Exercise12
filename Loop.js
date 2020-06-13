let loop = function(value, testf, updatef, bodyf){
    for(let i =0;i<Infinity;i++){testf(value);
    while(!testf(value)){return false}
    bodyf(value)
    updatef()}

}