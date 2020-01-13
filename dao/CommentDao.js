var dbutil = require('./DBUtil');

function insertComment(blogId,parent,parentName,userName,email,comments, ctime, utime, success) {
    var insertSql = "insert into comments (`blog_Id`,`parent`,`parent_name`,`user_Name`,`email`,`comments`,`ctime`,`utime`) values (?,?,?,?,?,?,?,?);";
    var params = [blogId,parent,parentName,userName,email,comments, ctime, utime];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if(error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();

}

function queryCommentsByBlogId(blogId, success) {
    var insertSql = "select * from comments where blog_id = ?;";
    var params = [blogId];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if(error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();

}

function queryCommentsCountByBlogId (blogId, success) {
    var insertSql = "select count(1) as count from comments where blog_id = ?;";
    var params = [blogId];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if(error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


function queryNewComments (size, success) {
    var insertSql = "select * from comments order by id desc limit ?;";
    var params = [size];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if(error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


module.exports.insertComment = insertComment;
module.exports.queryCommentsByBlogId = queryCommentsByBlogId;
module.exports.queryCommentsCountByBlogId = queryCommentsCountByBlogId;
module.exports.queryNewComments = queryNewComments;
