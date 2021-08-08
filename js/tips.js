$(function(){
    var tips_list = [
        '使人成熟的是经历，而不是岁月',
        '爱，就大声说出来，因为你永远都不会知道，明天和意外，哪个会先来！',
        '身体是革命的本钱！请照顾好自己',
        '如果可以，请尽量避免事半功倍的操作',
        '思而不学则罔，学而不思则殆',
        '知识是学不完的。首先要学会学习的方法，然后优先学习对自己有益的知识',
    ];
    // 定时更改提示信息
    var obj_tips = $("#dwm_tips .tips_content,#dwm_terminal .content_tips .content_text");
    obj_tips.text(tips_list[0]);
    var index = 1;
    setInterval(function () {
        obj_tips.text(tips_list[index]);
        index ++;
        if (index > tips_list.length-1) {
            index = 0;
        }
    }, 5000);
});
