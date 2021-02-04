const moreInfoIcons = document.querySelectorAll('.pointer');
const paragraphs = document.querySelectorAll('.paragraph');

for (let i = 0; i < moreInfoIcons.length; i++) {

    const icon = moreInfoIcons[i];

    icon.addEventListener('click', () => {
        paragraphs[i].classList.toggle('desactived')
        if (icon.innerHTML == '-') {
            icon.innerHTML = '+'
        } else {
            icon.innerHTML = '-'
        }
    })
    
}

const nombre = document.getElementById('name');
const gender = document.getElementById('gender');
const img = document.getElementById('img');
const episodesList = document.getElementById('episodesList');

fetch('https://rickandmortyapi.com/api/character/2')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {

        nombre.innerHTML = `${res.name}`;
        gender.innerHTML = `${res.gender}`;
        img.setAttribute('src', `${res.image}`);

        for (let i = 0; i < 5; i++) {
            const episode = document.createElement('LI');
            episode.setAttribute('class', 'episode');
            episode.textContent = res.episode[i];
            episodesList.appendChild(episode);
        }
    })
    .catch(err => console.log(err));



