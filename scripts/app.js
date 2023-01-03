const emojiSelectorIcon=document.getElementById('emojiSelectorIcon');
const emojjiSelector = document. getElementById('emojiSelector');
const emojilist = document. getElementById( 'emojiList');
const emojiSearch = document. getElementById( 'emojiSearch');

emojiSelectorIcon. addEventListener('click', ( ) => {
    emojjiSelector.classList.toggle('active');
});

fetch('https://emoji-api.com/emojis?access_key=37f2c6d7cf98f794d5076de509b52344084dd6b8')
.then (res=> res.json())
.then (data =>loadEmoji(data))

function loadEmoji(data){
    data.forEach(emoji =>{
        let li = document. createElement('li')
        li.setAttribute( 'emoji-name', emoji.slug);
        li.textContent = emoji.character;
        emojiList.appendChild(li);
    })
}

emojiSearch.addEventListener('keyup',e=> {
    let value =e.target.value;
    console.log(value);
    let emojis=document.querySelectorAll('#emojiList li');
    emojis.forEach(emoji =>{
        if(emoji.getAttribute('emoji-name').toLowerCase().includes(value)){
            emoji.style.display = 'flex';
        }
        else{
            emoji.style.display ='none';
        }
    })
})

