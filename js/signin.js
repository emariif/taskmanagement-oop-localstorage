document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        // agar halaman tetap di posisinya tidak kembali ke top
        e.preventDefault();

        // data yang dikirimkan ke model
        const usernameByInput = document.getElementById('username').value;

        const result = userManager.signInUser(usernameByInput);
        // console.log('Data berhasil tersubmit');
        if (result.success) {
            alert('success loggedin ' + result.usernameByInput);
            // return window.location.href = '../signin.html';
        } else {
            console.log(result.message);
        }
    });
});