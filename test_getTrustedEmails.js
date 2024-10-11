var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "<test.test@gmail.com>"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "<dmitro.porohov@yahoo.com>"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "<andrii@mail.ru>" // Нам такі не підходять
    },
];

function getTrustedEmails(arr) {
    const pattern = /@(gmail|yahoo)\.com/;
    var resultArray = [];
    for (var i = 0; i < arr.length; i++) {
        for (var key in arr[i]) {
            if (key == 'email') {
                if (pattern.test(arr[i][key])) {
                    resultArray.push(arr[i][key]);
                }
            }
        }
    }
    return resultArray;
}

console.log(getTrustedEmails(arr));
