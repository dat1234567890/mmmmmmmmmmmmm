// Lưu thông tin đăng ký vào Local Storage
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = {
            username,
            email,
            password,
        };

        // Lưu người dùng vào Local Storage
        localStorage.setItem('user', JSON.stringify(user));
        alert('Đăng ký thành công!');
        window.location.href = 'dashboard.html'; // Chuyển đến trang chính
    });
}

// Kiểm tra thông tin đăng nhập
const loginForm = document.getElementById('login-form');
let checklogin = true;
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Lấy người dùng từ Local Storage
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.username === username && user.password === password) {
            alert('Đăng nhập thành công!');
            window.location.href = 'dashboard.html'; // Chuyển đến trang chính
            checklogin = true;
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không chính xác!');
            checklogin = false;
        }
    });
}

const login_button = document.getElementsByClassName("login-btn");
if (checklogin == true){
  login_button.innerHTML = `Đăng nhập`
}
else {
  login_button.innerHTML = `Đăng xuất`
}