$(".wrapper").hide();
$(".head__content").hide();
$(".quiz__footer").hide();

$(document).ready(function(){
	$(".start-a").click(function(){
		$("#start").hide()
		
		$("#ded").animate({width: "180%", height: "210%", marginTop: "-7%",marginLeft: "-80%"}, 1000, function()
		{});
		setTimeout(function(){
			$(".wrapper").show();
			$(".head__content").show();
			$(".quiz__footer").show();
		  }, 1100);

		
	});
	
})

$(document).ready(function(){
	$("#home").click(function(){
			
		$(".wrapper").hide();
		$(".head__content").hide();
		$(".quiz__footer").hide();

		$("#ded").animate({width: "100%", height: "100%", marginTop: "0",marginLeft: "0"}, 1000, function()
		{});
		setTimeout(function(){
			$("#start").show();
			window.location.reload()
		  }, 1100);

		
	});
	
})



const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");


//Класс, который представляет сам тест
class Quiz
{
	constructor(type, questions, results)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		
		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

//Класс, представляющий вопрос
class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

//Класс, представляющий ответ
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

//Класс, представляющий результат
class Result 
{
	constructor(text, value, imadge)
	{
		this.text = text;
		this.value = value;
		this.imadge = imadge;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

//Массив с результатами
const results = 
[
	new Result("Вы прошли бесполезный опрос и сейчас недовольны)", 12, "дед.jpg"),
	new Result("Поешьте", 2, "поешь.jpg"),
	new Result("Вы мжет быть хороший человек, но это не точно", 16, "не.jpg"),
	new Result("Погладь грусного котика и тебе станет хорошо", 22, "кот.jpg")
];

//Массив с вопросами
const mass_questions = 
[
	new Question("Вас порой очень глубоко трогают музыка и другие произведения искусства?", 
	[
		new Answer("Носок", ),
		new Answer("Рюкзак", 2),
		new Answer("Диван", 3),
		new Answer("Картошка", 1)
	]),

	new Question("Можете ли вы сказать, что у вас богатый, сложный внутренний мир?", 
	[
		new Answer("да", 3),
		new Answer("еда", 1),
		new Answer("не знаю", 2),
		new Answer("возможно", 4)
	]),

	new Question("Какие успехи у тебя были в школе?", 
	[
		new Answer("фу", 2),
		new Answer("есть хочу", 1),
		new Answer("што такое школа", 3),
		new Answer("отвертка", 4)
	]),

	new Question("На вечеринках ты обычно: ", 
	[
		new Answer("меня нет", 2),
		new Answer("ем", 1),
		new Answer("пою Меладзе", 4),
		new Answer("учусь", 3)
	]),

	new Question("С чего начинаешь свое утро?", 
	[
		new Answer("с кофе", 3),
		new Answer("с охоты крепкой", 2),
		new Answer("с обеда", 1),
		new Answer("утро? я житель ночи", 4)
	]),
	new Question("В людях тебе больше всего наплевать на:", 
	[
		new Answer("на все", 1),
		new Answer("на не все", 1),
		new Answer("на шкаф", 2),
		new Answer("не плюю на людей", 3)
	]),
	new Question("Что думаешь о пиве?", 
	[
		new Answer("напиток богов", 1),
		new Answer("фуу буээ", 2),
		new Answer("ну можно иногда", 3),
		new Answer("сойдет", 4)
	]),
	new Question("Где бы покушать?", 
	[
		new Answer("макдоналдс", 1),
		new Answer("дома", 1),
		new Answer("в приличном месте", 1),
		new Answer("геральд миллер", 1)
	]),
	new Question("Едите ли вы на ночь?", 
	[
		new Answer("я ночь", 1),
		new Answer("иногда", 1),
		new Answer("всегда", 1),
		new Answer("конечно нет", 3)
	]),
	new Question("Какая мысль пугает вас более всего?", 
	[
		new Answer("все умрут", 3),
		new Answer("закончится еда", 1),
		new Answer("меня ничего не пугает", 2),
		new Answer("мур", 4)
	]),
	new Question("Когда вам грустно, вы:", 
	[
		new Answer("я ем", 1),
		new Answer("грущу", 2),
		new Answer("неважно", 2),
		new Answer("глажу котят", 3)
	]),
	new Question("В трудной ситуации вы:", 
	[
		new Answer("я ем", 1),
		new Answer("кушаю", 1),
		new Answer("питаюсь", 1),
		new Answer("поглощаю пищу", 1)
	]),
	

	
];


mass_questions.sort(() => Math.random() - 0.5)
let questions = []
for(var i = 0; i < 10; i++){
	questions.push(mass_questions[i]);
}


//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update()
{
	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		//Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
	}
	else
	{
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		$("#img").append('<img style="margin-left: auto; margin-right: auto; width:250px; height:250px;" src="' + quiz.results[quiz.result].imadge + '"; />'); 
		$(".quiz__footer").hide();
		
	}
}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "button button_correct";
	}

	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
}