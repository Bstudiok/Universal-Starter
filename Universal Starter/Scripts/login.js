document.addEventListener('DOMContentLoaded', function() {
    console.log('Login page loaded');
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        console.log('Logging in with username:', username, 'and password:', password);
        // 로그인 요청을 보내는 코드를 여기에 추가하지 않습니다.
    });
});
