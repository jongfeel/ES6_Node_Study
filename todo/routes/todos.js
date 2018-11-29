const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const dbconfig = require("../dbconf");
const pool = mysql.createPool(dbconfig);
const TABLE_NAME = "todos";

/* 할일 목록 */
router.get("/", function(req, res) {
	pool.getConnection(function(err, connection) {
		if (err) {
			res.status(500).send();
			throw err;
		}
	
		let sqlStr = `SELECT id, status, title FROM ${TABLE_NAME} ;`;
		console.log(sqlStr);
		connection.query(sqlStr, function(error, results) {
			connection.release();
			if (error) throw error;
			res.json(results);
		});
	});
});

/* 할일 추가 */
router.post("/", function(req, res) {
	console.log(req.body);
	pool.getConnection(function(err, connection) {
		if (err) {
			res.status(500).send();
			throw err;
		}
	
		let sqlStr = `INSERT INTO ${TABLE_NAME}(status, title) VALUES (${req.body.status}, '${req.body.title}');`;
		console.log(sqlStr);
		connection.query(sqlStr, function(error, results) {
			connection.release();
			if (error) throw error;
			res.json(results);
		});
	});
});

/* 할일 삭제 */
router.delete("/", function(req, res) {
	console.log(req.query);
	pool.getConnection(function(err, connection) {
		if (err) {
			res.status(500).send();
			throw err;
		}
	
		let sqlStr = `DELETE FROM ${TABLE_NAME} WHERE id=${req.query.todoId};`;
		console.log(sqlStr);
		connection.query(sqlStr, function(error, results) {
			connection.release();
			if (error) throw error;
			res.json(results);
		});
	});
});

/* 할일 상태 수정 */
router.put("/", function(req, res) {
	res.send("respond with a resource");
});

module.exports = router;
