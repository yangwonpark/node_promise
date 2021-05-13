const wait1seconds = new Promise((resolve, reject) => {
    console.log('시작!!!');
    setTimeout(() => {
        resolve('1초 뒤에 찍습니다');
    }, 1000)
});

wait1seconds.then((result) => {
    console.log(result + "\n프로미스 이행 완료");
});