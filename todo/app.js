const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const todosRouter = require("./routes/todos");

const app = express();
const mysql = require("mysql");
const dbconfig = require("./dbconf");
const pool = mysql.createPool(dbconfig);

pool.getConnection(function(err, connection) {
	if (err) throw err;

	let sqlStr = "CREATE TABLE IF NOT EXISTS todos (id int(12) PRIMARY KEY AUTO_INCREMENT, status int(4), title varchar(255) );";
	connection.query(sqlStr, function(error) {
		if (error) throw error;
		connection.release();
	});
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/todos", todosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
