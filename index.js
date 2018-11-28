const randInt = (x=100) => Math.round( Math.random()*x + 1);

let myFirstPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const randNo = randInt();
        if (randNo%2 == 1) {
            resolve("성공");
        }
        else {
            reject("오류");
        }
    }, 100);
});

myFirstPromise
.then( message => console.log(message) )
.catch( errorMessage => console.error(errorMessage) );