// scope of the variable
// reassigment
// redeclaration
// mutablity(changes allowed)
// immutabilty(changes not allowed)
// clousers
// hosting
// it have a main function
//  for let, var, const => if there has a {} then it is local variable & if there is no paranthises then it is globle scope
// a=34
// function variable()
// {
//     {
//     var a = 50;
//     console.log(a);
//    }
//    console.log(a);
// }
// variable();
// console.log(a);
// console.log(a);
// a = 10;
// a = 20;
// console.log(a);
a = 5;
function variable(){
    let a = 5;
    let b = 10;
    console.log(a);
    console.log(b);
}
variable();
console.log(a);