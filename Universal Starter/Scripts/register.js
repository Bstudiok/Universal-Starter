document.addEventListener('DOMContentLoaded', function() {
    console.log('Register page loaded');
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const name = document.getElementById('register-name').value;
        console.log('Registering with username:', username, 'password:', password, 'and name:', name);
        // 회원가입 요청을 보내는 코드를 여기에 추가하지 않습니다.
    });
});
