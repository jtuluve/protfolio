function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
    let textvar = document.getElementById("myname");
    let i =0;
    let j= 0;
    let text = textvar.innerHTML;
    let temptext = text;
    let jname = "Hi. I'm Jnanesh."
    let alph = [".","A","B","C","D","E","F","G","H","I","J","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s"]
    for(i=8;i<jname.length;i++){
        for(j = 0; j<alph.length;j++){
            temptext= text + alph[j];
            textvar.innerHTML = text;
            if(alph[j]==jname[i]){
                text = temptext;
                break;
            }
            sleep(500)
            console.log(temptext)
        }
    }
