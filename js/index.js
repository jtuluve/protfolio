function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  /*
  async function trial2() {
    temptext = text + alph[j];
    textvar.innerHTML = temptext;
    if (alph[j] == jname[i]) {
      text = temptext;
      return;
    }
    j++;
    if (j < alph.length) {
      await sleep(50)
      trial2()
      //sleep(50).then(function(){trial2()})

  }
}
function namee(){
    let textvar = document.getElementById("myname");
    let i = 8;
    let j = 0;
    let text = textvar.innerHTML;
    let temptext = text;
    let jname = "Hi. I'm Jnanesh."
    let alph = [".", "A","B","C","D","E","F","G","H","I","J","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s"]
    trial();
    async function trial(){ 
        await sleep(500)
        await trial2();
        
        if(alph[j]==jname[i]){
        i++;
        j = 0;
        }
        if (i < jname.length) {
            trial()
        }
    }
  }
  namee();
  */
  let oldValue = 0
  let newValue = 0
  window.addEventListener('scroll', (e) => {
    newValue = window.pageYOffset;
    if (oldValue < newValue) {
      if(window.innerWidth>=555){
        document.getElementById("nav").style.top = "-50px";
      }else{
      document.getElementById("nav").style.top = "-47px";
        
      }
      console.log("Up");
    } else if (oldValue > newValue) {
      document.getElementById("nav").style.top = "0";
      console.log("Down");
    }
    oldValue = newValue;
  });
const observer  = new IntersectionObserver((entries) =>{

  entries.forEach( async (entry) =>{
    console.log (entry)
    if (entry.isIntersecting) {
    entry.target.classList.remove('hidden') ;
    entry.target.classList.add('show');
    await sleep(50);
    } else {
    //entry.target.classList.remove
    }; 
});
  });
  setTimeout(()=>{const hiddenE1ements = document.querySelectorAll( '.hidden') ;
  hiddenE1ements.forEach( (el) => observer.observe(el));}, 500)
