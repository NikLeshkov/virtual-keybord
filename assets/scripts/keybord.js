export function createKeyboard(){

let keys =[['`','1','2','3','4','5','6','7','8','9','0','-','=',"Backspace"],
['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del'],
['CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter'],
['Shift','z','x','c','v','b','n','m',',','.','/','↑','Shift'],
['Ctrl','Win','Alt','SPACE','Alt','←','↓','→','Ctrl']];


let keyboard = document.createElement('div');
keyboard.className = "keyboard";

document.querySelector("main").append(keyboard);

for (let i = 0; i < keys.length; i++){
    for (let j = 0; j < keys[i].length; j++){
   
       
        let button = document.createElement('button');
        button.className = "keys";

        button.classList.add(keys[i][j]);

        button.innerHTML = keys[i][j];

        keyboard.append(button);
        
        document.addEventListener('keydown', function(event) {
            if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
              alert('Отменить!')
            }
          });
    }
}

}


