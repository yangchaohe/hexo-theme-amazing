$(function () { 
    // 获取md数据
    $.get("../life/life.md", function parsMd(data){
        // 从##划分
        data=data.split("##");
        var mdObj;
        data.pop();
        data.shift();
        $.each(data, (i,e) => {
            
            var re=/.+/g;
            var rows=e.match(re);
            var time = rows[0];
            rows.splice(0,1);
            var text=rows.join('\n');
            var html = '<li class="time-axis-item">' +
                '<div class="time-axis-date">' + time + '</div>' +
                '<div class="time-axis-text">' + marked(text) + '</div>' +
                '</li>';
            $('.time-axis').append(html);

        })
    })
});