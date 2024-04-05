// criando uma função que será carregada quando a janela carregar
const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login-submit');
    // testando o retorno
    //console.log(inputEmail, inputPassword, submitButton);

    if(submitButton){
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            fetch('https://reqres.in/api/login',  {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value
                })
            })

            .then((response) => {
                return response.json(); // Chama a response como uma função
            })

            .then((data) => {
                console.log(data);
            })

            .catch((error) => {
                console.error("Error:", error);
            }); // Tratamento de erro
        })
    }
};
window.onload = init;