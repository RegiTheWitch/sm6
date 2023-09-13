// alert('Практическая работа №2');

// console.log('123');

// let name = prompt ('Введите название города');
// let year = prompt ('Введите год образования города');
// let population = prompt ('Введите население города');
// year=Number(year);
// let year_1= 2023- year;
// alert ('Городу ' + name + ' исполнилось ' + year_1+ ' лет с момента его образования. Население - ' + population + ' человек');


// alert('Практическая работа №3');
// let num1 = Number(prompt ('Введите стоимость товара'));
// let num2 = Number(prompt ('Введите количество денег у клиента'));
// let a = num1-num2;
// let b = num2-num1;
// let text;

// if (num1==num2){
//     text='Покупка совершена';
// }else{
//     if(num1>num2){
//         text='Для покупки не хватает '+a+' руб.';
//     }else{
//         text='Покупка совершена. Сдача '+b+' руб.';
//     }
// }


// let box ='<div class="box">'+text+'</div>';
// let for_box=document.querySelector('.for_box');
// for_box.style.border='1px solid pink';
// for_box.style.borderRadius='20px';
// for_box.style.fontSize='18px';
// for_box.style.padding='15px 30px';
// for_box.style.width='500px';

// for_box.innerHTML=box;


// let number = Number(prompt ('Введите число, которое хотите вывести'));
// let for_box=document.querySelector('.for_box')
// let box='<div class="box"></div>';


// for(let x=1; x<=number; x++){
//     let box = '<div class="box">'+x+'</div>';
//     for_box.insertAdjacentHTML('beforeend',box);
// }


// let i=0;
// while (i>0){
//     alert(i);
//     i--;
// }

// for (let i=0; i<5; i++){
//     alert (i);
// }

let array =[
    {
        id:1,
        name:'Apple представила iPhone 15 с «динамическим островом» и без Lightning',
        author:'Марина Кравцова',
        date :'13.09.2023',
        text:'Размер дисплея iPhone 15 — 6,1 дюйм, у iPhone 15 Plus — 6,7 дюйма.'
    },
    {
        id:2,
        name:'В столице РТ началась разработка концепции будущего центра ремесел в ЦУМе',
        author:'Игорь Пуля',
        date :'13.09.2023',
        text:'В Казани началась разработка концепции будущего центра народных художественных промыслов, который разместится в ЦУМе.'
    },
    {
        id:3,
        name:'Еврокомиссия смягчила запрет на ввоз россиянами личных вещей',
        author:'Владимир Путин',
        date :'13.09.2023',
        text:'Национальным органам стран ЕС следует прежде всего сосредоточиться на автомобилях въезжающих россиян при исполнении импортного эмбарго, уточнила ЕК.'
    },
    {
        id:4,
        name:'Футболист Лионель Месси купил особняк в США за 10,75 миллиона долларов',
        author:'Лилия Туполева',
        date :'13.09.2023',
        text:'Аргентинский футболист американского клуба «Интер Майами» Лионель Месси купил себе новый дом в США.'
    },
    {
        id:5,
        name:'Правительство Японии в полном составе ушло в отставку',
        author:'Вадим Львов',
        date :'13.09.2023',
        text:'Японское правительство в полном составе ушло в отставку, премьер-министр страны Фумио Кисида принял прошения министров.'
    },
   
]

let arrayPlace= document.querySelector('.for_box')


array.forEach(y => {
    arrayPlace.insertAdjacentHTML('beforeend',`
    <div class="new-cont">
				<div class="n-flex">
					<div class="name">${y.name}</div>
					<div class="date">${y.date}</div>
				</div>
				<div class="text">${y.text}</div>
				<div class="n-flex">
					<div class="author">${y.author}</div>
					<div class="id">id: ${y.id}</div>
				</div>
			</div>
    `

    )
})

