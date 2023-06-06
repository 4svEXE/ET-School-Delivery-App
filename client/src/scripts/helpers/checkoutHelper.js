import Session from "react-session-api";

async function createUser(event, userForm, APIPath = "/api/createUser?") {
  event.preventDefault();

  fetch(
    APIPath +
      new URLSearchParams({
        userForm: JSON.stringify(userForm),
      })
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      Session.set("user", data.user);
      if (data.ok === "ok") {
        console.log("user created!");
      } else {
        console.log("user logined!");
      }

      return data;
    });
}

async function createCheck(event, checkForm, productsForm) {
  event.preventDefault();

  let form = await fetch(
    "/api/createCheck?" +
      new URLSearchParams({
        checkForm: JSON.stringify(checkForm),
      })
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      productsForm.checkID = data.checkID;
      console.log("==productsForm==", productsForm);
      return productsForm;
    });

  fetch(
    "/api/createSoldGoods?" +
      new URLSearchParams({
        productsForm: JSON.stringify(await form),
      })
  )
    .then((response) => {
      return response.json();
    })
    .then((data2) => {
      Session.set("checkout", true);
      console.log("data22", data2);
    });
}

async function getHistory(user) {
  if (user !== undefined) {
    fetch(
      "/api/getHistory?" +
        new URLSearchParams({
          user: JSON.stringify(user),
        })
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("user getHistory!", data);

        Session.set("CheckoutHistory", data);
      });
  }
}

export default class ProductHelper {
  constructor() {
    this.createUser = createUser;
    this.createCheck = createCheck;
    this.getHistory = getHistory;
  }
}
