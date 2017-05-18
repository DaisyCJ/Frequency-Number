/**
 * Created by jing on 2017/5/18.
 */
var main= require('../../helpers/FrequencyFunctions/FunctionFN.js');
describe("Frequency Number",function(){
    it ("return an empty string given empty string",function () {
        var result=main('');
        expect(result).toEqual('');
    });
    it ("return 'he 1' given 'he'",function () {
        var result=main('he');
        expect(result).toEqual('he 1');
    });
    it ("return 'he 1\r\nis 1' when given 'he is'",function () {
        var result=main('he is');
        expect(result).toEqual('he 1\r\nis 1');
    });
    it ("return 'he 2\r\nis 1' when given 'he he is'",function () {
        var result=main('he he is');
        expect(result).toEqual('he 2\r\nis 1');
    });


})