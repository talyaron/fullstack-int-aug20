"use strict";

function handleFindAllUsers(e) {
  fetch('/users').then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
    writeUsersToDom(data.users);
  });
}

function handleFindUser(e) {
  e.preventDefault();
  var userID = e.target.children.userID.value;
  fetch('/users/find', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userID: userID
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.ok === false) {
      console.log("user with ID: ".concat(userID, " not found"));
    } else if (data.user === null) {
      console.log("user with ID: ".concat(userID, " not found"));
    } else {
      console.log(data.users);
      writeUsersToDom(data.users);
    }
  });
}

function handleNewUser(e) {
  e.preventDefault();
  var email = e.target.children.email.value;
  var username = e.target.children.username.value;
  var password = e.target.children.password.value;
  fetch('/users/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      username: username,
      password: password
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.ok === false) {
      console.log('User with this email or username already exist');
    } else {
      console.log("New User created--\n            email: ".concat(data.newUser.email, "\n            Username: ").concat(data.newUser.username, "\n            Password: ").concat(data.newUser.password, "\n            User ID: ").concat(data.newUser._id, " "));
    }
  });
}

function handleEditUser(e) {
  e.preventDefault();
  var userID = e.target.children.userID.value;
  var email = e.target.children.email.value;
  var username = e.target.children.username.value;
  fetch('/users/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userID: userID,
      email: email,
      username: username
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.ok === false) {
      console.log("User with ID: ".concat(userID, " not found"));
    } else {
      console.log("User id: ".concat(userID, ", Info has been updated."));
      console.log("New email: ".concat(data.newUser.email, " "));
      console.log("New Username: ".concat(data.newUser.username, " "));
      console.log(data.users);
      writeUsersToDom(data.users);
    }
  });
}

function deleteUserById(e) {
  e.preventDefault();
  var userID = e.target.children.userID.value;
  handleDeleteUser(userID);
}

function deleteUserByButton(e) {
  var userEmail = e.target.dataset.id;
  handleDeleteUser(userEmail);
}

function handleDeleteUser(user) {
  var ifNoUsers = [];
  fetch('/users/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: user
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.ok === false) {
      console.log("User with ID: ".concat(user, " not found"));
    } else if (data.users.length === 0) {
      writeUsersToDom(ifNoUsers);
    } else {
      console.log("user with id ".concat(user, " is deleted."));
      console.log(data.users);
      writeUsersToDom(data.users);
    }
  });
}

function handleDeleteAllUser(e) {
  e.preventDefault();
  fetch("/deleteAll", {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.ok === false) {
      console.log("Error no users deleted");
    } else {
      console.log("all users deleted.");
      var root = document.getElementById('root');
      root.innerHTML = '';
    }
  });
}

function handleLogin(e) {
  e.preventDefault();
  var username = e.target.children.username.value;
  var password = e.target.children.password.value;
  console.log(username, password);
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.userValid) {
      window.location.replace("/welcome.html");
    } else {
      var root = document.getElementById('root');
      root.innerHTML = 'Sorry username/email or password is incorrect.';
      console.log('not found');
    }
  });
}

function handleAdminRedirect(e) {
  fetch('/checkCookie').then(function (r) {
    return r.json();
  }).then(function (data) {
    var cookie = data.cookie.userPower;

    if (cookie === 'admin') {
      window.location.replace("/adminPage.html");
    } else {
      var root = document.getElementById('root');
      root.innerHTML = 'Sorry you have no accses to this area!';
      console.log('Sorry you cannot enter this area!');
    }
  });
}

function checkRole() {
  fetch('/checkCookie').then(function (r) {
    return r.json();
  }).then(function (data) {
    var cookie = data.cookie.userPower;

    if (cookie === 'admin') {
      console.log('CookieCheck -- valid -- admin');
    } else {
      window.location.replace("/index.html");
    }
  });
  setInterval(function () {
    fetch('/checkCookie').then(function (r) {
      return r.json();
    }).then(function (data) {
      var cookie = data.cookie.userPower;

      if (cookie === 'admin') {
        console.log('CookieCheck -- valid -- admin');
      } else {
        window.location.replace("/index.html");
      }
    });
  }, 5000);
}

function writeUsersToDom(data) {
  var html = '';
  var root = document.getElementById('root');
  data.forEach(function (user) {
    html += "<p class='userDisplay'>         \n                email: ".concat(user.email, "\n                Username: ").concat(user.username, "\n                Password: ").concat(user.password, "\n                User ID: ").concat(user._id, "\n                <button data-id='").concat(user.email, "' onclick='deleteUserByButton(event)'>Delete this user</button>\n                 </p>");
  });
  root.innerHTML = html;
}