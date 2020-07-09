//create array friends
let friends = ["Mahmoud", "Ahmed", "Hassan", "Khaled", "Yasser"];
let btn = document.getElementsByTagName('button')[0];
let song;
btn.addEventListener('click', function () {
    for (let name of friends) {
        let div = document.createElement('div');
        div.className = 'friend';
        document.body.appendChild(div);
        let h3 = document.createElement('h3');
        let friendName = document.createTextNode(name + ':');
        h3.appendChild(friendName);
        div.appendChild(h3);
        let p = document.createElement('p');
        for (let i = 99; i > 0; --i) {
            if (i !== 1) {
                song = document.createTextNode(i + ' lines of code in the file, ' + i + ' lines of code; John strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file');
            }
            else {
                song = document.createTextNode('1 lines of code in the file, 1 lines of code; John strikes one out, clears it all out, no more lines of code in the file');
            }
            p.appendChild(song);
            let br=document.createElement('br');
            p.appendChild(br);
            div.appendChild(p);
            
        }
    }
});
