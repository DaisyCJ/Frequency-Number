
/**
 * Created by jing on 2017/5/18.
 */
function main(words) {
    if(words!=''){
        var wordArr=words.split(' ');
        var groupedArr=group(wordArr);
        groupedArr.sort((x,y)=>y.count-x.count);
        return groupedArr.map((w)=>format(w.word,w.count)).join('\r\n');
    }
    return '';
}

function group(wordArr) {
    return wordArr.reduce((array,word)=>{
        var entry=array.find((e)=>e.word===word);
        if(entry){
            entry.count++;
        }
        else{
            array.push({word:word,count:1});
        }
        return array;
        },[]);
}

function format(word,count){
    return word+' '+count;
}
module.exports=main;