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

    }
})

var newHot = new Vue({
    el: '#new_hot',
    data: {
       titleList: [
           {
               title: '这是一个链接',
               link: 'http://www.baidu.com'
           },
           {
               title: '这是一个链接',
               link: 'http://www.baidu.com'
           },
           {
               title: '这是一个链接',
               link: 'http://www.baidu.com'
           },
           {
               title: '这是一个链接',
               link: 'http://www.baidu.com'
           },
           {
               title: '这是一个链接',
               link: 'http://www.baidu.com'
           }
       ]
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
    }
})
