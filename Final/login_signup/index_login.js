const forms = document.querySelector(".forms"),
  links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
  });
});

const forgotlink = document.querySelectorAll(".forgot_pass");

forgotlink.forEach((forgot_pass) => {
  forgot_pass.addEventListener("click", (e) => {
    e.preventDefault(); //preventing form submit
    window.open("index_forgot.html");
    window.close("index_login.html");
  });
});

const UrlApi = "https://62d4116c5112e98e484a08f4.mockapi.io/api/users";
let email = document.getElementById("email"),
  password = document.getElementById("password");
function solve_login() {
  fetch(UrlApi)
    .then((result) => result.json())
    .then((res) => {
      let ok = false;
      for (let i = 0; i < res.length; i++) {
        if (
          res[i].username == email.value &&
          res[i].password == password.value
        ) {
          ok = true;
          break;
        }
      }
      if (ok) {
        alert("AC");
        email.value = "";
        password.value = "";
      } else {
        alert("Fail");
        email.value = "";
        password.value = "";
      }
    })
    .catch((error) => {
      console.log("Noo");
    });
}

let loginbtn = document.getElementById("loginbtn");
loginbtn.onclick = solve_login;

const add = async (data) => {
  const res = await fetch(UrlApi, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  // console.log(await res.json());
};
let email_reg = document.getElementById("email_reg");
let password_reg = document.getElementById("password_reg");
let cfpassword_reg = document.getElementById("cfpassword_reg");
function solve_reg() {
  if (password_reg.value != cfpassword_reg.value) {
    alert("Fail");
    email_reg.value = "";
    password_reg.value = "";
    cfpassword_reg.value = "";
  } else {
    fetch(UrlApi)
      .then((result) => result.json())
      .then((res) => {
        let ok = false;
        for (let i = 0; i < res.length; i++) {
          console.log(i, res[i].username, email_reg.value);
          if (res[i].username == email_reg.value) {
            ok = true;
            break;
          }
        }
        if (ok) {
          alert("Email ???? t???n t???i");
          email_reg.value = "";
          password_reg.value = "";
          cfpassword_reg.value = "";
        } else {
          alert("AC");
          add({ username: email_reg.value, password: password_reg.value });
          email_reg.value = "";
          password_reg.value = "";
          cfpassword_reg.value = "";
        }
      })
      .catch((error) => {
        console.log("Noo");
      });
  }
}
let regbtn = document.getElementById("regbtn");
regbtn.onclick = solve_reg;
