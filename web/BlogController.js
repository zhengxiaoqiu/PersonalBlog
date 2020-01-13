var BlogDao = require('../dao/BlogDao');
var tagsDao = require('../dao/Tags');
var tagBlogMappingDao = require('../dao/TagBlogMappingDao');
var timeUtil = require('../util/TimeUtil');
var respUtil = require('../util/RespUtil');
var url = require('url');
var path = new Map();




function queryHotBlog(request,response) {
    BlogDao.queryHotBlog(5,function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult('success','查询成功', result));
        response.end();
    })
}
path.set('/queryHotBlog',queryHotBlog);



function queryAllBlog(request,response) {
    BlogDao.queryAllBlog(function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult('success','查询成功', result));
        response.end();
    })
}
path.set('/queryAllBlog',queryAllBlog);

function queryBlogById(request,response) {
    var params = url.parse(request.url, true).query;
    BlogDao.queryBlogById(parseInt(params.bid), function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult('success','查询成功', result));
        response.end();
        BlogDao.addViews(parseInt(params.bid), function (result) {

        })
    })
}
path.set('/queryBlogById',queryBlogById);


function queryBlogCount(request,response) {
    BlogDao.queryBlogCount(function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult('success','查询成功', result));
        response.end();
    })
}
path.set('/queryBlogCount',queryBlogCount);


function queryBlogByPage(request,response) {
    var params = url.parse(request.url, true).query;
    BlogDao.queryBlogByPage(parseInt(params.page), parseInt(params.pageSize), function (result) { 
        response.writeHead(200);
        response.write(respUtil.writeResult('success','查询成功', result));
        response.end();
    })
}

path.set('/queryBlogByPage',queryBlogByPage);

function editBlog(request,response) {
    var params = url.parse(request.url, true).query;
    var tags = params.tags.replace(/ /g, '').replace('，',',');
    request.on('data', function (data) {
        BlogDao.insertBlog(params.title,data.toString(),tags,0,timeUtil.getNow(),timeUtil.getNow(),function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult('success','添加成功', null));
            response.end();
            var blogId = result.insertId;
            var tagList = tags.split(',');
            for(var i=0; i<tagList.length; i++) {
                if(tagList[i] == '') {
                    continue;
                }
                queryTag(tagList[i], blogId);
            }
        })
    })
}

path.set('/editBlog', editBlog)


function queryTag(tag, blogId) {
    tagsDao.queryTag(tag, function (result) {
        if(result == null || result.length == 0) {
            insertTag(tag, blogId);
        } else {
            tagBlogMappingDao.insertTagBlogMapping(result[0].id, blogId,timeUtil.getNow(),timeUtil.getNow(),function (result) {

            });
        }
    })
}


function insertTag(tag, blogId) {
    tagsDao.insertTag(tag, timeUtil.getNow(), timeUtil.getNow(), function (result) {
        insertTagBlogMapping(result.insertId, blogId);
    })

}

function insertTagBlogMapping(tagId, blogId) {
    tagBlogMappingDao.insertTagBlogMapping(tagId, blogId, timeUtil.getNow(), timeUtil.getNow(), function (result) {

    })
}

module.exports.path = path;
