const alert = require("alert");
const express = require("express");
const app = express();
const session = require("express-session");
const { User} = require("./models");

app.use(express.json());
app.use(
  session({
    secret: "albert",
    name: "uniqueSessionID",
    resave: true,
    saveUninitialized: false,
  })
);

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.set("view engine", "ejs");

app.get("/profile", (req,res) =>{
    res.render("profile");
})

app.get("/love", (req,res) =>{
    res.render("love");
})

app.get("/chat", (req,res) =>{
    res.render("chat");
})

app.get("/profile", (req,res) =>{
    res.render("profile");
})


app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/member", (req,res) => {
    res.render("member");
})

app.get("/verif", (req, res) => {
  res.render("verification");
});

app.post("/login", (req, res) => {
  const Username = req.body.username;
  const Password = req.body.password;

  User.findAll({
    where: {
      Username: Username,
      Password: Password,
    },
  }).then((user) => {
    if (user.length === 0) {
      return res.redirect(301, "/login");
    }
    req.session.loggedIn = true;
    return res.render("profile", { user });
  });
});

app.get("/home", (req, res) => {
  if (req.session.loggedIn) {
    User.findAll().then((user) => {
      return res.render("home", { user });
    });
  } else {
    res.redirect("/login");
  }
});

app.get("/love", (req, res) => {
    if (req.session.loggedIn) {
      User.findAll().then((user) => {
        return res.render("love", { user });
      });
    } else {
      res.redirect("/login");
    }
  });
  

app.get("/user/forget", (req, res) => {
  res.render("Forget");
});

app.post("/user/forget", (req, res) => {
  const email = req.body.email;
  User.findAll({
    where: {
      Email: email,
    },
  }).then((user) => {
    if (user.length === 0) {
      return res.redirect(301, "/user/forget");
    }
    req.session.loggedIn = true;
    alert("Reset password berhasil terkirim");
    res.redirect("/login");
  });
});

app.get("/user/add", (req, res) => {
  res.render("Register");
});
app.post("/user/save", (req, res) => {
  User.create({
    Username: req.body.username,
    Email: req.body.email,
    FullName: req.body.fullname,
    Password: req.body.password,
    Confirm: req.body.cpassword,
    PhoneNum: req.body.num,
  }).then((user) => res.redirect(301, "/verif"));
});

app.post("/user/save/verif", (req, res) => {
  User.create({
    Photo: req.body.photo,
    NoIden: req.body.iden,
    DataMed: req.body.med,
  }).then((user) => res.redirect(301, "/home"));
});

app.get("/user/update", (req, res) => {
  const user_ID = req.params.id;
  User.findOne({
    where: {
      id: user_ID,
    },
  }).then((user) => {
    res.render("Update", { user });
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
