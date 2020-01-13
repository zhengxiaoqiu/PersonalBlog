var randomTags = new Vue({
    el: '#random_tags',
    data: {
        tags: ['Asd','tedfh','bnryjn','rr','sdfgb','xbdf','btjtyj','dfghstrh','Asd','tedfh','bnryjn','rr','sdfgb','xbdf','btjtyj','dfghstrh','Asd','tedfh','bnryjn','rr','sdfgb','xbdf','btjtyj','dfghstrh']
    },
    computed: {
        randomColor: function () {
            return function () {
                var r = Math.random() * 255;
                var g = Math.random() * 255;
                var b = Math.random() * 255;
                return 'rgb('+r+','+g+','+b+')';
            }
        },
        randomSize: function () {
            return function () {
                var size = (Math.random() * 20 + 12) + 'px';
                return size;
            }
        }

    },
    created: function () {
        axios({
            method: 'get',
            url: '/queryRandomTags'
        }).then(function (resp) {
            var result = [];
            for(var i=0; i< resp.data.data.length; i++) {
                result.push({text:resp.data.data[i].tag, link:'/?tag=' + resp.data.data[i].tag});
            }
            randomTags.tags = result;
        })
    }
})

var newHot = new Vue({
    el: '#new_hot',
    data: {
       titleList: []
    },
    created: function () {
        axios({
            method: 'get',
            url: '/queryHotBlog'
        }).then(function (resp) {
            var result = [];
            for(var i=0; i<resp.data.data.length; i++) {
                var temp = {};
                temp.title = resp.data.data[i].title;
                temp.link = './blog_detail.html?bid=' + resp.data.data[i].id;
                result.push(temp);
            }
            newHot.titleList = result;
        })
    }
})

var newComments = new Vue({
    el: '#new_comments',
    data:{
        commentList: [
            {name:'这里是用户名', date:'2019-3-2',comment: '这里是一段评论'},
            {name:'这里是用户名', date:'2019-3-2',comment: '这里是一段评论'},
            {name:'这里是用户名', date:'2019-3-2',comment: '这里是一段评论'},
            {name:'这里是用户名', date:'2019-3-2',comment: '这里是一段评论'},
            {name:'这里是用户名', date:'2019-3-2',comment: '这里是一段评论'},
            {name:'这里是用户名', date:'2019-3-2',comment: '这里是一段评论'},
            {name:'这里是用户名', date:'2019-3-2',comment: '这里是一段评论'},
            {name:'这里是用户名', date:'2019-3-2',comment: '这里是一段评论'},
            {name:'这里是用户名', date:'2019-3-2',comment: '这里是一段评论'}
            ]
    },
    created: function () {
        axios({
            method: 'get',
            url: '/queryNewComments'
        }).then(function (resp) {
            var result = [];
            for(var i=0; i<resp.data.data.length; i++) {
                var temp = {};
                temp.name = resp.data.data[i].user_name;
                temp.date = resp.data.data[i].ctime;
                temp.comment = resp.data.data[i].comments;
                result.push(temp);
            }
            newComments.commentList = result;
        })
    }
})
