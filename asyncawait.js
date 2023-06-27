function apiCong(a, b) {
    var promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve(a + b)
        }, 1000)
    });

    return promise;
};

function apiNhan(a, b) {
    var promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve(a * b)
        }, 1000)
    });

    return promise;
};

function apiChia(a, b) {
    var promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve(a / b)
        }, 1000)
    });

    return promise;
};
async function dtht(a, b, h) {
    var ab = await apiCong(a, b);
    var abh = await apiNhan(ab,h);
    var abh2 = await apiChia(abh,2);

    console.log("Dtht la: " + abh2);
};

dtht(1,2,4);
