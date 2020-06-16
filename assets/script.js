// Nav Link
var anchor = document.querySelectorAll('#nav-link')
anchor.forEach(function(element) {
    element.addEventListener('click', function (e) {
        e.preventDefault()
        href = e.target.getAttribute('href')
        content = document.querySelector(href)
        show(href, 'nav-link', anchor)
    })
});

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1)
}

function show(href, type, arr) {
    arr.forEach(function(element) {
        var hrefs = element.getAttribute('href')
        content = document.querySelector(hrefs)
        console.log(content)
        if (hrefs == href) {
            document.title = `${capitalize(content.id)} - UNIBA MADURA`
            element.setAttribute('class', 'active')
            if (type == 'nav-link') content.setAttribute('class', 'content')
            else content.setAttribute('class', '')
            if (hrefs == '#home')  content.setAttribute('class', 'main-content')
        } else {
            element.setAttribute('class', '')
            if (type == 'nav-link') content.setAttribute('class', 'content hide')
            else content.setAttribute('class', 'hide')
            if (hrefs == '#home')  content.setAttribute('class', 'main-content hide')
        }
    }); 
}

// Jurusan Link
var jur = document.querySelectorAll('#nav-jur')
jur.forEach(function(element) {
    element.addEventListener('click', function (e) {
        e.preventDefault()
        href = e.target.getAttribute('href')
        content = document.querySelector(href)
        console.log(content)
        show(href, 'jurusan-link', jur)
    })
});
