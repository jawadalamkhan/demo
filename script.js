
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  if (username === "sinha" && password === "1234") {
    document.body.innerHTML = `<h1 style="text-align:center; margin-top: 100px;">Welcome to Sinha's Website</h1>`;
  } else {
    message.textContent = "Invalid username or password!";
    message.style.color = "red";
  }
}
