document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        // agar halaman tetap di posisinya tidak kembali ke top
        e.preventDefault();

        // data yang dikirimkan ke model
        const userData = {
            username: document.getElementById('username').value,
        };

        const result = userManager.saveUser(userData);
        // console.log('Data berhasil tersubmit');
        if (result.success) {
            return window.location.href = '../signin.html';
        } else {
            console.log('proses simpan data gagal');
        }
    });
});