class User {

    constructor(username, email, password) {
        this.username=username;
        this.email=email;
        this.password=password;
    }

    // method

    register() {
        console.log(this.username + 'is registered')
    }

    static countUsers() {
        console.log('There are 50 users');
    }
}

let a1= new User('a1','a1@gmail.com','123');
a1.register()

User.countUsers();

class Member extends User {
    constructor(username, email,password, memberpackage) {
        super(username, email, password);
        this.memberpackage=memberpackage;
    }

    getPackage() {
        console.log('username is ', this.username,'package details are ', this.memberpackage)
    }
}

let m1= new Member('Mike', 'mike@gmail.com','123','premium package');
m1.getPackage();
m1.register();