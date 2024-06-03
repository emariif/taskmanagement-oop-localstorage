class User {

    constructor() {
        this.users = this.getUsers() || [];
    }

    saveUser(userData) {
        const newUser = {
            id: Date.now,
            ...userData,
        };

        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        // return window.location.href = '../signin.html';
        // console.log(userData);
        return {
            success: true,
        };
    }

    signInUser(usernameByInput) {
        // proses pemeriksaan data username pada localstorage
        const userExists = this.users.some(user => user.username.toLowerCase() == usernameByInput.toLowerCase());

        if (userExists) {
            // Proses pengembalian data ke signIn.js controller
            return {
                success: true,
                usernameByInput
            };
        } else {
            return {
                success: false,
                message: 'Data tidak ditemukan',
            };
        }
    }

    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }

}