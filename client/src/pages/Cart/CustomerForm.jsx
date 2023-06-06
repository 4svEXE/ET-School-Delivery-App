import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/components/button";
import Session from "react-session-api";
import CheckoutHelper from "../../scripts/helpers/checkoutHelper";

import "./LoggetUser.scss";

function CustomerForm() {
  const checkoutHelper = new CheckoutHelper();

  const [userName, setUserName] = useState({ value: "" });
  const [userEmail, setUserEmail] = useState({ value: "" });
  const [userPhone, setUserPhone] = useState({ value: "" });
  const [userAdress, setUserAdress] = useState({ value: "" });

  const [enterDataText, setEnterDataText] = useState("Enter your data");

  const [isLoggetUser, setIsLoggetUser] = useState("");
  const [rerender, setRerender] = useState(false);

  Session.onSet(function rerenderCustomerForm(data) {
    if (Session.get("user") != undefined) {
      setIsLoggetUser("logget-user");
    }
  });

  let userForm = {
    userSessionID: Session.get("userID"),
    userName: userName.value,
    userEmail: userEmail.value,
    userPhone: userPhone.value,
    userAdress: userAdress.value,
  };

  function handleUserName(event) {
    setUserName({ value: event.target.value });
    userForm.userName = event.target.value;
  }
  function handleUserEmail(event) {
    setUserEmail({ value: event.target.value });
    userForm.userName = event.target.value;
  }
  function handleUserPhone(event) {
    setUserPhone({ value: event.target.value });
    userForm.userName = event.target.value;
  }
  function handleUserAdress(event) {
    setUserAdress({ value: event.target.value });
    userForm.userName = event.target.value;
  }

  const navigate = useNavigate();

  const linkNav = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <form
      onSubmit={(event) => checkoutHelper.createUser(event, userForm)}
      className={
        "bordered-container w-full p-6 flex-col h-full " + isLoggetUser
      }
    >
      <h4 className="text-3xl">{enterDataText}</h4>
      <div className="flex flex-col mt-6 w-full">
        <h5>Name:</h5>
        <input
          type="text"
          name="user_name"
          value={userName.value}
          onChange={handleUserName}
          className="bordered-container w-full"
          required
        />
      </div>
      <div className="flex flex-col mt-6 w-full">
        <h5>Email:</h5>
        <input
          type="email"
          name="user_email"
          value={userEmail.value}
          onChange={handleUserEmail}
          className="bordered-container w-full "
          required
        />
      </div>
      <div className="flex flex-col mt-6 w-full">
        <h5>Phone:</h5>
        <input
          type="phone"
          name="user_phone"
          value={userPhone.value}
          onChange={handleUserPhone}
          placeholder="38095999999"
          className="bordered-container  w-full"
          required
        />
      </div>
      <div className="flex flex-col mt-6 w-full">
        <h5>Adress:</h5>
        <input
          type="text"
          name="user_adress"
          value={userAdress.value}
          onChange={handleUserAdress}
          className="bordered-container w-full"
          required
        />
      </div>

      <Button
        title="Save user data"
        type="submit"
        className="my-6 w-full"
        onClick={() => {
          setTimeout(() => {
            if (Session.get("user") != undefined) {
              setIsLoggetUser("logget-user");
              setEnterDataText("data entered and saved successfully!");
            }
            setRerender(!rerender);
          }, 1000);
        }}
      />

      {Session.get("user") && (
        <a
          href="/"
          className="flex items-center p-6 bg-white"
          onClick={(e) => linkNav(e, "/history")}
        >
          history
        </a>
      )}
    </form>
  );
}

export default CustomerForm;
