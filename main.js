"use strict"

function is_auth(){

    let is_auth_conf = confirm("Желаете войти в скрытый аккаунт?");
    if(is_auth_conf){
        alert("Отлично!");
        alert("Давайте начнем");
        return 1;
    }
    else{
        alert("... О, случайно попали? Пасхалочка! Пока-пока!");
        return 0;
    }

}

function make_auth(is_need = is_auth()){

    if(is_need){

        var login = prompt("Введите логин");

        if(!login) alert("Отменено");

        else if(login == "Админ"){
            var pass = prompt("Введите пароль");

            if(pass == null) alert("Отменено");

            else{

                if(pass == "Я главный") alert("Добрый день, босс!");

                else alert("Неверный пароль")
            }
            

        }

        else alert("Кто вы? Я вас не знаю, уходите");

    }
}






var what_in_capt;


function Captcha(is_first_try = true){

    var capt_window = document.querySelector(".capt")
    capt_window.style.setProperty('--opacity', '1');
    capt_window.style.setProperty('--visibility', 'visible');

    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
            '0','1','2','3','4','5','6','7','8','9');
    var i;

    if(is_first_try)
    {

        for (i=0;i<4;i++){
            var a = alpha[Math.floor(Math.random() * alpha.length)];
            var b = alpha[Math.floor(Math.random() * alpha.length)];
            var c = alpha[Math.floor(Math.random() * alpha.length)];
            var d = alpha[Math.floor(Math.random() * alpha.length)];
            var e = alpha[Math.floor(Math.random() * alpha.length)];
        }

        var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e;

        what_in_capt = 0;
        
    }
    else{

        
        var a = Math.floor(Math.random() * 100);
        var b = Math.floor(Math.random() * 100);
        

        var code = a + ' ' + '+' + ' ' + b;

        what_in_capt = 1;

    }

    document.getElementById("mainCaptcha").innerHTML = code;
    document.getElementById("mainCaptcha").value = code;

    
}

function ValidCaptcha(){

    var capt_window = document.querySelector(".capt")

    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);


    var is_empty = isEmpty(string2)

    if(!what_in_capt)
    {

        if (string1 == string2){

            capt_window.style.setProperty('--opacity', '0');
            capt_window.style.setProperty('--visibility', 'hidden');
    
            document.querySelector('.auth_submit').disabled = false;
            return true;
        }
        else if(is_empty)
        {
            return "Вы ввели пустую строку";
        }
        else{
            Captcha(false); 
            return false;
        }
    }
    else{

        if (eval(string1) == eval(string2)){

            capt_window.style.setProperty('--opacity', '0');
            capt_window.style.setProperty('--visibility', 'hidden');


            document.querySelector('.auth_submit').disabled = false;
            return true;
        }
        else if(is_empty)
        {
            return "Вы ввели пустую строку";
        }
        else{
            Captcha(true); 
            return false;
        }
    }
   
}


function isEmpty(string)
{
    if(!string){
        return true;
    }
    else{
        return false;
    }
}

function removeSpaces(string){
    return string.split(' ').join('');
}





function cut_text(maxlength){

    var block = document.getElementById("catalog_box");

    for(let i = 0; i < block.children.length; i++){
        
        var in_block = block.children[i].children[0].children[2];
        var text_inp = in_block.innerHTML;

        text_inp = truncate(text_inp, maxlength);
        
        in_block.innerHTML = text_inp;
        in_block.value = text_inp;

    }
   
}

function truncate(text_inp, maxlength)
{
    if(text_inp.length > maxlength){

        text_inp = text_inp.substring(0, (maxlength - 1 - 3)) + '...';
        
    }

    return text_inp;
}





var count_messages = 1;

function makeNote()
{
    let new_li = document.createElement('li');
    new_li.innerHTML = "Новое уведомление!";

    var list = document.querySelector('.notifications_list');

    new_li.classList.add("notifications_item");
    list.append(new_li);
    count_messages += 1;

    if(count_messages > 6)
    {
        
        list.innerHTML = '';

        let one_li = document.createElement('li');
        one_li.innerHTML = "У вас " + count_messages + " новых сообщений!";
        one_li.classList.add("notifications_item");
        list.append(one_li);
    }
}


let increaseInterval = -1;





window.addEventListener("load",function()
{
    let links = document.querySelectorAll('a');

    for (let link of links) 
    {
        let href = link.getAttribute('href');
        if (!href) continue; // нет атрибута

        if (!href.includes('://')) continue; // нет протокола

        link.style.color = "#1240AB";
    }
    
},false);






function makeNotesListener()
{

    document.querySelector('.notifications_list').addEventListener('click', event => 
    {
        if (event.target.className === 'notifications_item') 
        {
            alert('Добро пожаловать на наш сайт! Рады вас видеть :3');
        }
    });

}




document.addEventListener('DOMContentLoaded', function() {

    let menu = document.querySelector('.menu__box');

    menu.onclick = function(event) {

        function handleLink(href) {
            let isLeaving = confirm(`Вы действительно хотети перейти на эту страницу: ${href}?`);
            if (!isLeaving) return false;
        }

        let target = event.target.closest('a');

        if (target && menu.contains(target)) {
            return handleLink(target.getAttribute('href'));
        }
    };


    imgs.onclick = function(event) {
        let curr = event.target.closest('img');
  
        if (!curr) return;
        showImg(curr.src, curr.title);
        event.preventDefault();
      }
  
      function showImg(href, title) {
        largeImg.src = href;
        largeImg.alt = title;
    }


}, false);











