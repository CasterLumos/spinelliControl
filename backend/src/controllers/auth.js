const User = require("../models/user");
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var { expressjwt: jwte } = require("express-jwt");

//protected routes
exports.isSignedIn = jwte({
    secret: process.env.SECRET,
    userProperty: "auth",
    algorithms: ["RS256"],
});

//Register
exports.signup = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg,
        });
    }

    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: "NOT able to save user in DB",
            });
        }
        res.json({
            name: user.name,
            email: user.email,
            id: user._id,
        });
    });
};

//Login
exports.signin = (req, res) => {
    const errors = validationResult(req);
    const { email, password } = req.body;

    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg,
        });
    }

    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "USER email does not exists",
            });
        }

        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email and password do not match",
            });
        }

        //create token
        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        //put token in cookie
        res.cookie("token", token, { expire: new Date() + 9999 });

        //send response to front end
        const { _id, name, email, role } = user;
        return res.json({ token, user: { _id, name, email, role } });
    });
};

//Loggout
exports.signout = (req, res) => {
    res.clearCookie("token");
    res.json({
        message: "User signout successfully",
    });
};

exports.logged = (req, res) => {
    return res.status(200).send("ok");
};

//custom middlewares
exports.isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ error: "No token Provided" });
    }
    const parts = authHeader.split(" ");
    if (!parts.length === 2) {
        return res.status(401).send({ error: "Token Error" });
    }
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: "Token malformatted" });
    }
    jwt.verify(token, process.env.SECRET, (error, decode) => {
        if (error) {
            return res.status(401).send({ error: "Token invalid" });
        }
        req.userId = decode.id;
        return next();
    });
};
exports.isAdmin = (req, res, next) => {
    if (req.profile.role === 0) {
        return res.status(403).json({
            error: "You are not ADMIN, Access denied",
        });
    }
    next();
};
