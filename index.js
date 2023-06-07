function validateLoginForm() {
    if (emailInput.value == "" || passInput.value == "") {
      moveLoginButton();
      document.getElementById("emailInput").style.border = "1px solid red";
      document.getElementById("passInput").style.border = "1px solid red";
    } else {
      document.getElementById("emailInput").style.border = "1px solid green";
      document.getElementById("passInput").style.border = "1px solid green";
      button.style.left = "150px";
    }
  }
  buttonPositionFlag = 1;
  function moveLoginButton() {
    if (buttonPositionFlag == 1) {
      button.style.left = "210px";
      buttonPositionFlag = 2;
    } else if (buttonPositionFlag == 2) {
      button.style.left = "80px";
      buttonPositionFlag = 1;
    }
  }
  