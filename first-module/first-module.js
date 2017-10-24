let tmpData ='';

exports = {
    
    put : function (d) {
        tmpData = d;
    },
    get : function () {
        return tmpData;
    },
    doIt : function(){
        console.log ('did it!');
    },
    doThat : function(){
        console.log ('did that!');
    },
    getItDone : function(){
        console.log ('got it done!');
    }

};