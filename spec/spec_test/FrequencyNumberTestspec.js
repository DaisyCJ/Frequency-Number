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
    it ("return 'is 2\r\nhe 1' when given 'he is is'",function () {
        var result=main('he is is');
        expect(result).toEqual('is 2\r\nhe 1');
    });
    it ("a test'",function () {
        var result=main('it was the age of wisdom it was the age of foolishness it is');
        expect(result).toEqual('it 3\r\nwas 2\r\nthe 2\r\nage 2\r\nof 2\r\nwisdom 1\r\nfoolishness 1\r\nis 1');
    });


})