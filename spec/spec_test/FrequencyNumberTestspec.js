/**
 * Created by jing on 2017/5/18.
 */
var main= require('../../helpers/FrequencyFunctions/FunctionFN.js');
describe("Frequency Number",function(){
    it ("return an empty string given empty string",function () {
        var result=main('');
        expect(result).toEqual('');
    });
    it ("return string given one word",function () {
        var result=main('he');
        expect(result).toEqual('he 1');
    });
})