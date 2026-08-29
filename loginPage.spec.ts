// Abstraction
class BasePage {
    open() {
        console.log("Opening page");
    }
}

// Inheritance
class LoginPage extends BasePage {

    // Encapsulation
    #password = "12345";

    login(username) {
        console.log("Username:", username);
        console.log("Password:", this.#password);
    }

    // Polymorphism
    open() {
        console.log("Opening Login Page");
    }
}

// Object
const loginPage = new LoginPage();

loginPage.open();
loginPage.login("admin");

function login(username: string): void;
function login(username: string, password: string): void;

function login(username: string, password?: string) {
    console.log("Username:", username);

    if (password) {
        console.log("Password:", password);
    }
}

login("admin");
login("admin", "12345");

class BasePage {
    open() {
        console.log("Opening Page");
    }
}

class LoginPage extends BasePage {
    open() {
        console.log("Opening Login Page");
    }
}

const page = new LoginPage();
page.open();