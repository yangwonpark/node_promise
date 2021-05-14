const p1 = new Promise( (resolve, reject) => {
    setTimeout( ()=> {
        resolve({ p1_text : "p1의 텍스트" });
    }, 1000); 
});

const p2 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve({ p2_text : "p2의 텍스트 "});
    }, 3000)
});

p1.then( (result1) => {
    console.log("p1 = " + result1.p1_text);
    return p2;              // return으로 promise 객체를 넘겨주고 뒤에 then()을 붙이면 자연스럽게 이어서 promise를 실행가능
}).then( (result2) => {
    console.log("p2 = " + result2.p2_text);
});


// 한 번에 다 처리
// Promise.all( [프로미스 객체]).then(callback) =>  분기점으로 나누어 처리되는데, 이 때 시간이 더 오래 걸리는 promise 객체 기준으로 실행됌
Promise.all( [p1, p2]).then( (result) => {
    console.log("p1 = " + result[0].p1_text);
    console.log("p2 = " + result[1].p2_text);
});