document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Validação simples
    if (username === "admin" && password === "1234") {
        messageElement.textContent = 'Login bem-sucedido!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Usuário ou senha incorretos.';
        messageElement.style.color = 'red';
    }
});