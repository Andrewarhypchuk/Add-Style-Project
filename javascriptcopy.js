// Змінні=================================================================================
let table;
let ul;
let list;
// кнопка Edit============================================================================
document.getElementById('button__edit').onclick = function () {
console.log('Натиснуто кнопку # EDIt #');
document.getElementById('edit-block').classList.toggle('none');
if(document.getElementById('edit-block').classList.contains('none')){
    console.log('закриваємо поле для редагування')
}else{
    console.log('відкриваємо поле для редагування')
}
document.getElementById('edit-area').value = document.getElementById('top-block-text-only').innerHTML
if(document.getElementById('style-block').classList.contains('none')){
    console.log('все ок style не видно')
}else{
    console.log('прибираємо style')
    document.getElementById('style-block').classList.add('none')
}
}
// КНОПКА # STYLE #===========================================================================
document.getElementById('button__style').onclick = function(){
    console.log('style');
    document.getElementById('style-block').classList.remove('none');
    if(document.getElementById('edit-block').classList.contains('none')){
        console.log('все ок add не видно')
    }else{
        console.log('прибираємо add')
        document.getElementById('edit-block').classList.add('none')
    }
    }
// КНОПКА # EDIt 2.0 #======================================================
        document.getElementById('addTableOrList').onclick = function(){
        console.log('Закриваємо поле для редагування і вікдриваємо меню Table/List');
        document.getElementById('container').classList.add('none');
        document.getElementById('container2').classList.remove('none');
    }
    function tableOrList(){
if(event.target.value == 'table'){
console.log("вибрали table");
document.getElementById('table__form').classList.remove('none');
document.getElementById('list__form').classList.add('none');

}else if(event.target.value == 'list'){
    console.log("вибрали list")
    document.getElementById('list__form').classList.remove('none');
    document.getElementById('table__form').classList.add('none');
  }
}

    document.getElementById('create').onclick = create;
    function create (){
        document.getElementById('container2').classList.remove('none');
        table = document.createElement('table');
        let tbody = document.createElement('tbody');
        table.appendChild(tbody);
        let TR = document.getElementById('countTR').value;
        let TD = document.getElementById('countTD').value;
        let widthTD = document.getElementById('widthTD').value;
        let heightTD = document.getElementById('heightTD').value;
        let borderColor = document.getElementById('borderColor').value;
        let borderStyle = document.getElementById('borderStyle').value;
        let borderWidth = document.getElementById('borderWidth').value;
        let   row2 
           for(i=1;i <= TR;i++){
          row2 = document.createElement('tr');
          tbody.appendChild(row2);
               for(a = 1;a <= TD;a++){
               let row2__td = document.createElement('td');
               row2__td.style.borderColor = borderColor;
               row2__td.style.borderStyle = borderStyle;
               row2__td.style.borderWidth = borderWidth +'px';
               row2__td.innerHTML=`td${i}`;
               row2__td.width = widthTD+'px';
               row2__td.height = heightTD+'px';
               row2.appendChild(row2__td);
             }
         }
        table.style.borderSpacing = '0px';
        table.style.borderColor = borderColor;
        table.style.borderStyle = borderStyle;
        table.style.borderWidth = borderWidth +'px';

      document.getElementById('container').classList.remove('none');
      document.getElementById('container2').classList.add('none');
      let cont = document.getElementById('top-block');
            cont.appendChild(table);  
    

    }
    document.getElementById('createList').onclick = createList;

    function createList(){
        console.log('створити список');
  ul = document.createElement('ul');
  let numberOfList = document.getElementById('numberOfList').value
  console.log(numberOfList)
for(let b =1;b<numberOfList;b++){
    let li = document.createElement('li');
    li.innerHTML = `item${b}`;
    ul.style.listStyleType = `${document.getElementById("listMark").value}`;
    ul.appendChild(li);
}
document.getElementById('container').classList.remove('none');
      document.getElementById('container2').classList.add('none');
      let li = document.getElementById('top-block');
      li.appendChild(ul);
    }

     document.getElementById('save').onclick = function(){
     document.getElementById('top-block-text-only').innerHTML = document.getElementById('edit-area').value;
     document.getElementById('edit-block').classList.add('none');
     console.log('Зміни збережено/Поле для редагування закриваємо/Кнопки ховаємо');
     

    }
   function checkMark(){
       let mark = document.getElementById("listMark").value;
       console.log(mark);
   } 


    function fontSize() {
        document.getElementById('top-block-text-only').style.fontSize = event.target.value;
    }

    let ff = document.getElementById('fontFamily');
ff.onchange = function () {
    document.getElementById('top-block-text-only').style.fontFamily = event.target.value;
}
   
document.getElementById('btn-txt-color').onclick = function(){
    console.log('колір тексту');
    document.getElementById('color').classList.remove('hide');
    document.getElementById('bgcolor').classList.add('hide');
}
document.getElementById('btn-bg-color').onclick = function(){
    console.log('колір тексту');
    document.getElementById('bgcolor').classList.remove('hide');
    document.getElementById('color').classList.add('hide');
}

function changeText(){
    console.log(event.target.innerHTML)
    document.getElementById('top-block').style.color = `${event.target.innerHTML}`;
}
function changeBackground(){
    console.log(event.target.innerHTML)
    document.getElementById('top-block').style.backgroundColor = `${event.target.innerHTML}`;
}
function fontWeight() {
    if(event.target.checked) {
        document.getElementById('top-block-text-only').classList.add('bold');
    } else {
        document.getElementById('top-block-text-only').classList.remove('bold');
    }
}
function fontCursive() {
    if(event.target.checked) {
        document.getElementById('top-block-text-only').classList.add('cursive');
    } else {
        document.getElementById('top-block-text-only').classList.remove('cursive');
    }
}