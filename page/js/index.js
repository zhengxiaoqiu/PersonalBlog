var everyDay = new Vue({
    el: '#every_day',
    data: {
        content: 'asdasddasdas'
    },
    computed: {
        getcontent: function () {
            return this.content;
        }
    },
    created: function () {
        //请求数据，给data赋值
        axios({
            method: 'get',
            url: '/queryEveryDay'
        }).then(function (resp) {
            everyDay.content = resp.data.data[0].content;

        }).catch(function (resp) {
            console.log('请求失败');
        })
    }
})

var articleList = new Vue({
    el: '#article_list',
    data: {
        articleList: [
            {
                title: '这个是标题',
                content: '啊士大夫嘎嘎微软嘎尔人噶额我热染发膏吧二分部阿道夫吧阿尔法国啊额发表v啊广发温热给啊呃好吧是各地热播是国防部啊额投放货币阿尔法吧发吧发吧啊发吧法国va乳房古巴二分',
                date:'2018-10-10',
                views: '1023',
                tags: 'test1 test2',
                id: '1',
                link: ''
            },
            {
                title: '这个是标题',
                content: '啊士大夫嘎嘎微软嘎尔人噶额我热染发膏吧二分部阿道夫吧阿尔法国啊额发表v啊广发温热给啊呃好吧是各地热播是国防部啊额投放货币阿尔法吧发吧发吧啊发吧法国va乳房古巴二分',
                date:'2018-10-10',
                views: '1023',
                tags: 'test1 test2',
                id: '1',
                link: ''
            },
            {
                title: '这个是标题',
                content: '啊士大夫嘎嘎微软嘎尔人噶额我热染发膏吧二分部阿道夫吧阿尔法国啊额发表v啊广发温热给啊呃好吧是各地热播是国防部啊额投放货币阿尔法吧发吧发吧啊发吧法国va乳房古巴二分',
                date:'2018-10-10',
                views: '1023',
                tags: 'test1 test2',
                id: '1',
                link: ''
            }
        ]
    },
    computed: {

    },
    created: function () {

    }
})




