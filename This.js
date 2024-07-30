function normalfunction(){
    console.log(this);
}
const Arrowfunction = () => {
console.log(this);
};
const obj = {
    normalfxnmethod:normalfunction,
    arrowfxnmethod:Arrowfunction,
}
obj.normalfxnmethod();
obj.arrowfxnmethod();

// features           regular func                      arrow
//1.This               depends on                       lexically inherited from scope
//2.new                 new context                     does not create new context
//3.constractor         can be used                     cannot be used
//4.hosting             can be hosted                   can not
//                    Note:expressional
//                    can not be hosted