function purchasecake(resolve){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("cake purchase");
        },2000);
        resolve();
        })
    }
    function curtaindec(resolve){
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                console.log("curtain down");
            },2000);
            resolve();
        })
    }
    function ballons(resolve){
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                console.log("ballon released");
            },2000);
            resolve();
        })
    }
    function cakecutting(){
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                console.log("cake cutting");
            },2000);
            resolve();
        })
    }
    // callback hell
    purchasecake(() =>{
        curtaindec(() => {
            ballons(() =>{
                cakecutting(() =>{
            });
            });
        });
    });