

let start = document.getElementById('start');




start.innerText = 'Hello Jellyfish!';

start.setAttribute('class','specialButton scaleDown')

start.addEventListener('click',() => {
    let pic = document.createElement('img');
    pic.src = 'https://static.scientificamerican.com/sciam/cache/file/B7E980C5-B182-4A2E-80369F2AC535EB35_source.jpg?w=1200';
    pic.setAttribute('class','scaleDown')
    document.body.append(pic)
})
