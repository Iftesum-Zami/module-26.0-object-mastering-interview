function doSomething(){
    console.log(3333);
}

console.log(1111);

setTimeout(doSomething, 5000); // 2nd parameter is millisecond. 1000ms = 1sec

console.log(4444);

setTimeout(function(){
    console.log('lazy and waiting');
}, 4000);

console.log(4444);

setTimeout(() => {
    console.log('see you later');
}, 6000);

console.log(5555);

setInterval(function(){
    console.log('repeating it')
}, 3000);

console.log(6666);