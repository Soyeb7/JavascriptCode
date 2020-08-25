const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('stuff worked');
    } else {
        reject('Error, it broke');
    }
}) 


const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'Success')
})

promise.then(result => result + '!')
.then(result2 => {
    console.log(result2);
})
.catch (console.log)


promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error!'))
    .then(result3 => {
        console.log(result3 + '!');
    })