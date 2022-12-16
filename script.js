// open folder sections


function delayAnim(){
  delayElements = document.querySelectorAll('p','img','h1','h2');
  delayElements.forEach((elem) => {
    elem.classList.add("animation-delay");
  });

}

// delayAnim();








const buttons = document.querySelectorAll('.entry ');
const contents = document.querySelectorAll('.contents');
let subHead = document.querySelector('.subhead');
let toClose;

// forEach(console.log(buttons);
// console.log(buttons.classList.contains('.explicit'));
// function openContents(let button){
//
let prompts = ["your brain is yours to explore.",
              "make sure to revisit memories, so you don't forget.",
              "christmas is coming up. remember the christmas of 2007? Who was there? (explicit-memory>semantic-memory)",
              "try reopening an old file. Is something different?",
              "it's finally sunny out. Remember that day at the beach, when you were young? Was your mom there? (explicit-memory>episodic-memory)",
              "Are you remembering everything okay?",
              "your friend, gladys, is moving into a home. remember your first apartment? (explicit-memory>episodic-memory)",
              "have memories gone missing?",
              "Was your son at christmas that year? in 2007? (explicit-memory>semantic-memory)",
              "are you feeling okay?",
              "If you're finished, and want to understand what's happening to your brain, the help button is always there->"];

let promptCounter = 0;



function nextPrompt(){
  console.log(promptCounter, prompts[promptCounter%prompts.length]);
  let prompt = document.querySelector('.prompts p');
  console.log(prompt);
  prompt.innerHTML = prompts[promptCounter%prompts.length];
  prompt.classList.add('animation');

  // let promptTxt = prompt.getElementsByTagName('p');
  // promptTxt[0].innerHTML =
  // console.log(promptTxt);
  // promptTxt.classList.add('animation');
  promptCounter++;
}

setInterval(nextPrompt2, 15000);



function nextPrompt2(){
  let prompt = document.querySelector('.prompts p');
  let promptTxt = document.createElement("p");
  promptTxt.innerHTML = prompts[promptCounter%prompts.length];
  promptCounter++;
prompt.remove();
document.querySelector('.prompts').appendChild(promptTxt);


  console.log(promptTxt);

}







function reassignGraphics(){
  let folders = document.querySelectorAll('.entry');
folders.forEach((folder) => {
  if (folder.classList[0]=="L4") {
    folder.getElementsByTagName("img")[0].src = "http://127.0.0.1:3000/images/graphics/photoIcon.svg";
  }else{
  folder.getElementsByTagName("img")[0].src = "http://127.0.0.1:3000/images/graphics/folderIcon.svg";
}
});


document.querySelector('.backBtn').getElementsByTagName("img")[0].src = "http://127.0.0.1:3000/images/graphics/backBtn.svg"
document.querySelector('.logo').getElementsByTagName("img")[0].src = "http://127.0.0.1:3000/images/graphics/brainLogo.png"








}

reassignGraphics();




function openContents(button){


  // button.classList.forEach((btnName) => {
  //   contents.forEach((item, i) => {
  //
  //   });
  //
  // });





toClose = button.classList[2];
console.log(toClose);
  contents.forEach((content) => {
// console.log(content.classList[2]);
    // button.classList.forEach((class) => {
    //   if (content.classList.contains(class)) {
    //     console.log(content);
    //   }
    // });


    if (button.classList[2]==content.classList[2]){
      // console.log(content.classList[2]);
      // alert(content.classList[2]+" contents");

       content.classList.add("visible");
       setTimeout(function(){content.classList.add("visible2")},1);
       console.log(content.classList);

}else{

if(content.classList[0]==button.classList[0]){
  content.classList.remove("visible2");
  content.classList.remove("visible");
}


    }



  });

  if (button.classList[0]!='L4'){
    console.log(button.classList[0]);
      let textInside = button.getElementsByTagName('p')[0].innerHTML;
      console.log(textInside);
      subHead.innerHTML = textInside;
  }


if (button.classList[0]!='L4') {
    button.classList.add('active');
}


  console.log(button.classList);
  contents.forEach((content, i) => {
      buttons.forEach((btn, i) => {
        if (btn.classList[2]==content.classList[2]&&content.classList[3]!='visible') {

          btn.classList.remove('active');
        }
      });


  });
}


// buttons.forEach((btn) => {
//   btn.addEventListener('click',buttonName(btn));
// });
buttons.forEach((btn) => {
  btn.addEventListener('click',function(){openContents(btn)});
});

backBtn = document.querySelector('.backBtn');
backBtn.addEventListener('click',function(){
  console.log("poop");
for (var i=contents.length-1; i > -1; i--) {
console.log(contents[i]);

  if (contents[i].classList[3]=='visible') {
    contents[i].classList.remove('visible');
    console.log(buttons[i].classList[2]);
    let textInside = buttons[i].getElementsByTagName('p')[0].innerHTML;
    console.log(textInside);
    subHead.innerHTML = textInside;

    break;
  }
}
for (var i=contents.length-1; i > -1; i--) {
console.log(contents[i]);

  if (contents[i].classList[3]=='visible') {
    let textInside = buttons[i].getElementsByTagName('p')[0].innerHTML;
    console.log(textInside);
    subHead.innerHTML = textInside;

    break;
  }else if (i==0) {
    subHead.innerHTML="your brain";
  }
}


    buttons.forEach((btn, i) => {

      btn.classList.remove('active');


    });


})


//
// let counter = 0;
//
// let files = document.querySelectorAll('.L4.entry');
// let imgTest = document.querySelector('.image')
// // console.log(files);
// files.forEach((file) => {
//   file.addEventListener('click',function(){imgTest.classList.add('imgvisible')});
// });
//
// imgTest.addEventListener('click',function(){displayNext()});






//two arrays images and counter





let fileBtn = document.querySelectorAll('.L4.entry');
let images = document.querySelectorAll('.image');
let forgotten= new Array(images.length);
let bg = document.querySelectorAll('.img-cont');

console.log(fileBtn);
console.log(images);







// console.log(images);

for (var i = 0; i < fileBtn.length; i++) {
  fileBtn[i].addEventListener('click',function(){
    for (var x = 0; x < images.length; x++) {


      if (images[x].classList[1]==this.classList[2]) {
        images[x].classList.add('imgvisible');
        bg[x].classList.add('imgvisible');
      }
    }



  });
}


for (var i = 0; i < images.length; i++) {

  images[i].addEventListener('click', function(){

hideImage(this);

  })

  bg[i].addEventListener('click', function(){

    let images = document.querySelectorAll('.image');
    let activeImg = document.querySelector('.image.imgvisible');
    images.forEach((item, i) => {

    });


    hideImage(activeImg);
  })



}





function hideImage(img){
  img.classList.remove('imgvisible');
  let bg = document.querySelector('.img-cont.imgvisible');
console.log(bg);
  bg.classList.remove('imgvisible');
  img.src=img.src.slice(0,-4);
  console.log(img.src);
console.log(img.src.slice(-4));
  if (img.src.slice(-4)!="iiii") {
    img.src+="i";

  }else{
    // fileBtn[i].visible=false;
    console.log("forgotten");
    let delBtn = document.querySelectorAll('.L4.entry');
    console.log(delBtn);
    console.log(delBtn[0].classList[2]," == ", img.classList[1]);
    for (var i = 0; i < delBtn.length; i++) {
      if (delBtn[i].classList[2]==img.classList[1]) {
        delBtn[i].classList.add('invisible');
      }
    }
  }
  console.log(img.src);
  img.src+=".png";
  console.log(img.src);
}



// console.log(source);
//
// source=source.slice(0,-4);
//
// source+=".png";
// imgTest.src=source;
// console.log(source);


// let source = imgTest.src;
//
// function displayNext(){
//
//
// imgTest.classList.remove('imgvisible');
//
//
// source=source.slice(0,-4);
// if(counter<2){
//   source+='i';
//   counter++;
// }
// source+=".png";
// imgTest.src=source;
//
//
//
// console.log(counter);
// }

// const buttonNum =9;
// console.log("All buttons:");
// for (var i = 0; i < buttons.length; i++) {
//   console.log(buttons[i]);
// }

 // console.log("button:" + buttons[buttonNum].classList[1]);
// console.log("Content to open: " + openContents(buttons[buttonNum]));
// openContents(buttons[buttonNum]);
//
// // contents.forEach(classList.remove("visible"));
// for each content section, go through each button class and ask whether its present in this content section
// // go through all contents, check if any member of this buttons class list is present in each contents class list
//
// }







// buttons.forEach(addEventListener("click", openContents(this)));


// const classNames = buttons[0].classList;
// console.log(classNames[1]);
