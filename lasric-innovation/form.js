var select = document.querySelector('#select-option')

select.addEventListener('input', function (e) {
    var target = e.target.parentElement;
    var value = e.target.value;

    if(value === 'yes') {
        var div = document.createElement('div');
        div.innerHTML = '<input style=" width:100%; margin: 10px 0; background-color: bisque;" type="file">'

        target.appendChild(div)

    } else {
        target.querySelector('div').remove();
    }
})