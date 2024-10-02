var obj = {
    id: 123,
    firstName: "TestFirstName",
    lastName: "TestLastName",
    getInfo: function () {
        console.log(this);
    }
};

obj.getInfo();
obj.logonName = "TestLogonName";
obj.getInfo();
