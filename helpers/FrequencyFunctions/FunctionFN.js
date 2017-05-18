
/**
 * Created by jing on 2017/5/18.
 */
function main(words) {
    if(words!=''){
        var wordArr=words.split(' ');
        return wordArr.map((w)=>format(w)).join('\r\n');
    }
    return '';
}

function format(w){
    return w+' 1';
}
module.exports=main;