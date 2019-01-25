function link_to(address)
{
    window.location.href=address;
}

function getPrice() {
    var js = document.createElement('script'),
    head = document.getElementsByTagName('head')[0];
    js.src = 'http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice';
    head.appendChild(js);
    
    var selected = $('div#light a.large.button');
    selected.css('background-color', '#00ffff');
}

function refreshPrice(data) {
    var p = document.getElementById('test-jsonp');
    p.innerHTML = '当前价格：' +
        data['0000001'].name +': ' + 
        data['0000001'].price + '；' +
        data['1399001'].name + ': ' +
        data['1399001'].price;
}
