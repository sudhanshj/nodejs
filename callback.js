function purchasecake(){
setTimeout(() => {
console.log("cake purchase");
},2000);
}
function curtaindec(){
    setTimeout(() => {
console.log("curtain down");
    },2000);
}
function ballons(){
    setTimeout(() => {
        console.log("bellon relised");
    },2000)
}
function cakecutting(){
    setTimeout(() =>{ 
    console.log("cake cutting")
},2000)
}

//callback hell
console.log("Happy birthday:1");
console.log("Happy birthday:2");
purchasecake();
console.log("Happy birthday:3");
console.log("Happy birthday:4");
console.log("Happy birthday:5");
curtaindec();
console.log("Happy birthday:6");
console.log("Happy birthday:7");
console.log("Happy birthday:8");
ballons();
console.log("Happy birthday:9");
console.log("Happy birthday:10");
console.log("Happy birthday:11");
console.log("Happy birthday:12");
cakecutting();