const Monet = require('monet');

const Some = Monet.Some
const Just = Monet.Just

function getCustomMatcher(callback){
    return function(){
        if(arguments[0] && !isNaN(arguments[0])){
            const s = Some(arguments[0]);
            return callback(s);
        } else {
            return callback(Just(1));
        }
    };
};

const myMath = {
    Add: getCustomMatcher(function(v) {
        if(v.isSome()){
            return v.getOrElse() + 6;
        }
        return Error('value passed is not number or undefined');
    }),
    Subtract: getCustomMatcher(function(v) {
        if(v.isSome()){
            return v.getOrElse() - 6;
        }
        return Error('value passed is not number or undefined');
    })
};

console.log(myMath.Add(223));
console.log(myMath.Subtract(1));