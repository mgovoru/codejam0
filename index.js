//импорт данных
import ancientsData from '/data/ancients.js';
import cardsDataGreen from '/data/MythicCards/green/index.js';
import cardsDataBlue from '/data/MythicCards/blue/index.js';
import cardsDataBrown from '/data/MythicCards/brown/index.js';

//объявление переменных
//переменные DOM
let chooseAncients = document.querySelectorAll('.game__ancient');
let gameCircles = document.querySelector('.game__circles');
let circle = document.querySelectorAll('.circle');
let gameCard = document.querySelector('.game__card');
let gameButton = document.querySelectorAll('.game__button');
let gameCardsButton = document.querySelector('.game__cards-button');
let deskCards = document.querySelector('.desk-shuffle');
//массив схемы древнего
let circleArray = [];
//количество карт древнего поцветам
let qualityGreen;
let qualityBrown;
let qualityBlue;
//массивы по цветам карт и степени трудности
let objectGreenEasy = [];
let objectBrownEasy = [];
let objectBlueEasy = [];
let objectGreenNormal = [];
let objectBrownNormal = [];
let objectBlueNormal = [];
let objectGreenHard = [];
let objectBrownHard = [];
let objectBlueHard = [];
let randomGreen = [];
let randomBrown = [];
let randomBlue = [];
let randomGreenStage;
let randomBrownStage;
let randomBlueStage;
let arrayFirstStage = [];
let arraySecondStage = [];
let arrayThirdStage = [];



//картинки в разделе древний
for (let i = 0; i < chooseAncients.length; i++) {
	chooseAncients[i].style.backgroundImage = `url(${ancientsData[i].cardFace})`;
	chooseAncients[i].id = ancientsData[i].id;
}
gameCard.src = 'assets/mythicCardBackground.png';
alert('После выбора древнего или уровня и полной выкладки колоды карт, дождитесь, пожалуйста, сброса раскладки и выбирайте новые параметры');
// количество карт разного цвета в схеме выбранного древнего
function getCards(i1) {
	circleArray = [];
	circle[0].textContent = ancientsData[i1].firstStage.greenCards;
	circleArray[0] = ancientsData[i1].firstStage.greenCards;
	circle[1].textContent = ancientsData[i1].firstStage.brownCards;
	circleArray[1] = ancientsData[i1].firstStage.brownCards;
	circle[2].textContent = ancientsData[i1].firstStage.blueCards;
	circleArray[2] = ancientsData[i1].firstStage.blueCards;
	circle[3].textContent = ancientsData[i1].secondStage.greenCards;
	circleArray[3] = ancientsData[i1].secondStage.greenCards;
	circle[4].textContent = ancientsData[i1].secondStage.brownCards;
	circleArray[4] = ancientsData[i1].secondStage.brownCards;
	circle[5].textContent = ancientsData[i1].secondStage.blueCards;
	circleArray[5] = ancientsData[i1].secondStage.blueCards;
	circle[6].textContent = ancientsData[i1].thirdStage.greenCards;
	circleArray[6] = ancientsData[i1].thirdStage.greenCards;
	circle[7].textContent = ancientsData[i1].thirdStage.brownCards;
	circleArray[7] = ancientsData[i1].thirdStage.brownCards;
	circle[8].textContent = ancientsData[i1].thirdStage.blueCards;
	circleArray[8] = ancientsData[i1].thirdStage.blueCards;
	qualityGreen = circleArray[0] + circleArray[3] + circleArray[6];
	qualityBrown = circleArray[1] + circleArray[4] + circleArray[7];
	qualityBlue = circleArray[2] + circleArray[5] + circleArray[8];
}

// формирование массивов карт по степени трудности

let t1 = 0;
let t2 = 0;
let t3 = 0;
for (let m = 0; m < cardsDataGreen.length; m++) {
	if (cardsDataGreen[m].difficulty == 'easy') {
		objectGreenEasy[t1] = cardsDataGreen[m]; t1++;
	}
	if (cardsDataGreen[m].difficulty == 'normal') {
		objectGreenNormal[t2] = cardsDataGreen[m]; t2++;
	}
	if (cardsDataGreen[m].difficulty == 'hard') {
		objectGreenHard[t3] = cardsDataGreen[m]; t3++;
	}
}
t1 = 0;
t2 = 0;
t3 = 0;
for (let m = 0; m < cardsDataBrown.length; m++) {
	if (cardsDataBrown[m].difficulty == 'easy') {
		objectBrownEasy[t1] = cardsDataBrown[m]; t1++;
	}
	if (cardsDataBrown[m].difficulty == 'normal') {
		objectBrownNormal[t2] = cardsDataBrown[m]; t2++;
	}
	if (cardsDataBrown[m].difficulty == 'hard') {
		objectBrownHard[t3] = cardsDataBrown[m]; t3++;
	}
}
t1 = 0;
t2 = 0;
t3 = 0;

for (let m = 0; m < cardsDataBlue.length; m++) {
	if (cardsDataBlue[m].difficulty == 'easy') {
		objectBlueEasy[t1] = cardsDataBlue[m]; t1++;
	}
	if (cardsDataBlue[m].difficulty == 'normal') {
		objectBlueNormal[t2] = cardsDataBlue[m]; t2++;
	}
	if (cardsDataBlue[m].difficulty == 'hard') {
		objectBlueHard[t3] = cardsDataBlue[m]; t3++;
	}
}
// формируем массивы для среднего уровня
function middleGetCards() {
	randomGreen = [];
	randomBrown = [];
	randomBlue = [];
	arrayFirstStage = [];
	arraySecondStage = [];
	arrayThirdStage = [];
	let objectSelectGreen = [];
	for (let i = 0; i < objectGreenEasy.length; i++) {
		objectSelectGreen[i] = objectGreenEasy[i];
	}
	let w2 = objectGreenEasy.length;
	for (let i = 0; i < objectGreenNormal.length; i++) {
		objectSelectGreen[w2] = objectGreenNormal[i];
		w2++;
	}
	let w3 = objectGreenNormal.length;
	for (let i = 0; i < objectGreenHard.length; i++) {
		objectSelectGreen[w3] = objectGreenHard[i];
		w3++;
	}
	let objectSelectBrown = [];
	let w4 = 0;
	for (let i = 0; i < objectBrownEasy.length; i++) {
		objectSelectBrown[w4] = objectBrownEasy[i];
		w4++;
	}
	let w5 = objectBrownEasy.length;
	for (let i = 0; i < objectBrownNormal.length; i++) {
		objectSelectBrown[w5] = objectBrownNormal[i];
		w5++;
	}
	let w6 = objectBrownNormal.length;
	for (let i = 0; i < objectBrownHard.length; i++) {
		objectSelectBrown[w6] = objectBrownHard[i];
		w6++;
	}
	let objectSelectBlue = [];
	let w7 = 0;
	for (let i = 0; i < objectBlueEasy.length; i++) {
		objectSelectBlue[w7] = objectBlueEasy[i];
		w7++;
	}
	let w8 = objectBlueEasy.length;
	for (let i = 0; i < objectBlueNormal.length; i++) {
		objectSelectBlue[w8] = objectBlueNormal[i];
		w8++;
	}
	let w9 = objectBlueNormal.length;
	for (let i = 0; i < objectBlueHard.length; i++) {
		objectSelectBlue[w9] = objectBlueNormal[i];
		w9++;
	}
	//формируем колоду для схемы древнего
	let l1 = 0;
	let lengthGreen = objectSelectGreen.length - 1;
	for (let i = 0; i < qualityGreen; i++) {
		randomGreenStage = Math.floor(Math.random() * lengthGreen);
		randomGreen[l1] = objectSelectGreen[randomGreenStage];
		objectSelectGreen.splice(randomGreenStage, 1);
		lengthGreen--;
		l1++;
	}
	let l2 = 0;
	let lengthBrown = objectSelectBrown.length - 1;
	for (let i = 0; i < qualityBrown; i++) {
		randomBrownStage = Math.floor(Math.random() * lengthBrown);
		randomBrown[l2] = objectSelectBrown[randomBrownStage];
		objectSelectBrown.splice(randomBrownStage, 1);
		lengthBrown--;
		l2++;
	}
	let l3 = 0;
	let lengthBlue = objectSelectBlue.length - 1;
	for (let i = 0; i < qualityBlue; i++) {
		randomBlueStage = Math.floor(Math.random() * lengthBlue);
		randomBlue[l3] = objectSelectBlue[randomBlueStage];
		objectSelectBlue.splice(randomBlueStage, 1);
		lengthBlue--;
		l3++;
	}

	let s1 = 0;
	let s2 = 0;
	let s3 = 0;
	let xx1 = 0;
	let xx2 = 0;
	let xx3 = 0;

	let lengthRandomGreen = randomGreen.length;
	for (let i = 0; i < circleArray[0]; i++) {
		xx1 = Math.floor(Math.random() * lengthRandomGreen);
		arrayFirstStage[s1] = randomGreen[xx1];
		lengthRandomGreen--;
		randomGreen.splice(xx1, 1);
		s1++;
	}
	let lengthRandomBrown = randomBrown.length;
	for (let i = 0; i < circleArray[1]; i++) {
		xx2 = Math.floor(Math.random() * lengthRandomBrown);
		arrayFirstStage[s1] = randomBrown[xx2];
		lengthRandomBrown--;
		randomBrown.splice(xx2, 1);
		s1++;
	}
	let lengthRandomBlue = randomBlue.length;
	for (let i = 0; i < circleArray[2]; i++) {
		xx3 = Math.floor(Math.random() * lengthRandomBlue);
		arrayFirstStage[s1] = randomBlue[xx3];
		lengthRandomBlue--;
		randomBlue.splice(xx3, 1);
		s1++;
	}


	for (let i = 0; i < circleArray[3]; i++) {
		xx1 = Math.floor(Math.random() * lengthRandomGreen);
		arraySecondStage[s2] = randomGreen[xx1];
		randomGreen.splice(xx1, 1);
		lengthRandomGreen--;
		s2++;
	}
	for (let i = 0; i < circleArray[4]; i++) {
		xx2 = Math.floor(Math.random() * lengthRandomBrown);
		arraySecondStage[s2] = randomBrown[xx2];
		randomBrown.splice(xx2, 1);
		lengthRandomBrown--;
		s2++;
	}
	for (let i = 0; i < circleArray[5]; i++) {
		xx3 = Math.floor(Math.random() * lengthRandomBlue);
		arraySecondStage[s2] = randomBlue[xx3];
		lengthRandomBlue--;
		randomBlue.splice(xx3, 1);
		s2++;
	}


	for (let i = 0; i < circleArray[6]; i++) {
		xx1 = Math.floor(Math.random() * lengthRandomGreen);
		arrayThirdStage[s3] = randomGreen[xx1];
		lengthRandomGreen--;
		randomGreen.splice(xx1, 1);
		s3++;
	}

	for (let i = 0; i < circleArray[7]; i++) {
		xx2 = Math.floor(Math.random() * lengthRandomBrown);
		arrayThirdStage[s3] = randomBrown[xx2];
		randomBrown.splice(xx2, 1);
		lengthRandomBrown--;
		s3++;
	}
	for (let i = 0; i < circleArray[8]; i++) {
		xx3 = Math.floor(Math.random() * lengthRandomBlue);
		arrayThirdStage[s3] = randomBlue[xx3];
		randomBlue.splice(xx3, 1);
		lengthRandomBlue--;
		s3++;
	}
}

// формируем массивы для легкого уровня
function easyGetCards() {
	randomGreen = [];
	randomBrown = [];
	randomBlue = [];
	arrayFirstStage = [];
	arraySecondStage = [];
	arrayThirdStage = [];
	let objectSelectEasyGreen = [];
	let w1 = 0;
	for (let i = 0; i < objectGreenEasy.length; i++) {
		objectSelectEasyGreen[w1] = objectGreenEasy[i];
		w1++;
	}
	let w2 = objectGreenEasy.length;
	for (let i = 0; i < objectGreenNormal.length; i++) {
		objectSelectEasyGreen[w2] = objectGreenNormal[i];
		w2++;
	}
	let objectSelectEasyBrown = [];
	let w3 = 0;
	for (let i = 0; i < objectBrownEasy.length; i++) {
		objectSelectEasyBrown[w3] = objectBrownEasy[i];
		w3++;
	}
	let w4 = objectBrownEasy.length;
	for (let i = 0; i < objectBrownNormal.length; i++) {
		objectSelectEasyBrown[w4] = objectBrownNormal[i];
		w4++;
	}
	let objectSelectEasyBlue = [];
	let w5 = 0;
	for (let i = 0; i < objectBlueEasy.length; i++) {
		objectSelectEasyBlue[w5] = objectBlueEasy[i];
		w5++;
	}
	let w6 = objectBlueEasy.length;
	for (let i = 0; i < objectBlueNormal.length; i++) {
		objectSelectEasyBlue[w6] = objectBlueNormal[i];
		w6++;
	}
	//формируем колоду для схемы древнего

	let l1 = 0;
	let lengthGreen = objectSelectEasyGreen.length - 1;
	for (let i = 0; i < qualityGreen; i++) {
		randomGreenStage = Math.floor(Math.random() * lengthGreen);
		randomGreen[l1] = objectSelectEasyGreen[randomGreenStage];
		objectSelectEasyGreen.splice(randomGreenStage, 1);
		lengthGreen--;
		l1++;
	}
	let l2 = 0;
	let lengthBrown = objectSelectEasyBrown.length - 1;
	for (let i = 0; i < qualityBrown; i++) {
		randomBrownStage = Math.floor(Math.random() * lengthBrown);
		randomBrown[l2] = objectSelectEasyBrown[randomBrownStage];
		objectSelectEasyBrown.splice(randomBrownStage, 1);
		lengthBrown--;
		l2++;
	}
	let l3 = 0;
	let lengthBlue = objectSelectEasyBlue.length - 1;
	for (let i = 0; i < qualityBlue; i++) {
		randomBlueStage = Math.floor(Math.random() * lengthBlue);
		randomBlue[l3] = objectSelectEasyBlue[randomBlueStage];
		objectSelectEasyBlue.splice(randomBlueStage, 1);
		lengthBlue--;
		l3++;
	}
	let s1 = 0;
	let s2 = 0;
	let s3 = 0;
	let xx1 = 0;
	let xx2 = 0;
	let xx3 = 0;
	let lengthRandomGreen = randomGreen.length;
	for (let i = 0; i < circleArray[0]; i++) {
		xx1 = Math.floor(Math.random() * lengthRandomGreen);
		arrayFirstStage[s1] = randomGreen[xx1];
		lengthRandomGreen--;
		randomGreen.splice(xx1, 1);
		s1++;
	}
	let lengthRandomBrown = randomBrown.length;
	for (let i = 0; i < circleArray[1]; i++) {
		xx2 = Math.floor(Math.random() * lengthRandomBrown);
		arrayFirstStage[s1] = randomBrown[xx2];
		lengthRandomBrown--;
		randomBrown.splice(xx2, 1);
		s1++;
	}
	let lengthRandomBlue = randomBlue.length;
	for (let i = 0; i < circleArray[2]; i++) {
		xx3 = Math.floor(Math.random() * lengthRandomBlue);
		arrayFirstStage[s1] = randomBlue[xx3];
		lengthRandomBlue--;
		randomBlue.splice(xx3, 1);
		s1++;
	}


	for (let i = 0; i < circleArray[3]; i++) {
		xx1 = Math.floor(Math.random() * lengthRandomGreen);
		arraySecondStage[s2] = randomGreen[xx1];
		randomGreen.splice(xx1, 1);
		lengthRandomGreen--;
		s2++;
	}
	for (let i = 0; i < circleArray[4]; i++) {
		xx2 = Math.floor(Math.random() * lengthRandomBrown);
		arraySecondStage[s2] = randomBrown[xx2];
		randomBrown.splice(xx2, 1);
		lengthRandomBrown--;
		s2++;
	}
	for (let i = 0; i < circleArray[5]; i++) {
		xx3 = Math.floor(Math.random() * lengthRandomBlue);
		arraySecondStage[s2] = randomBlue[xx3];
		lengthRandomBlue--;
		randomBlue.splice(xx3, 1);
		s2++;
	}


	for (let i = 0; i < circleArray[6]; i++) {
		xx1 = Math.floor(Math.random() * lengthRandomGreen);
		arrayThirdStage[s3] = randomGreen[xx1];
		lengthRandomGreen--;
		randomGreen.splice(xx1, 1);
		s3++;
	}

	for (let i = 0; i < circleArray[7]; i++) {
		xx2 = Math.floor(Math.random() * lengthRandomBrown);
		arrayThirdStage[s3] = randomBrown[xx2];
		randomBrown.splice(xx2, 1);
		lengthRandomBrown--;
		s3++;
	}
	for (let i = 0; i < circleArray[8]; i++) {
		xx3 = Math.floor(Math.random() * lengthRandomBlue);
		arrayThirdStage[s3] = randomBlue[xx3];
		console.log(arrayThirdStage[s3]);
		randomBlue.splice(xx3, 1);
		lengthRandomBlue--;
		s3++;
	}
}

//выбор метода
// количество по цветам нужных карт для колоды
// при клике на древнего появляется его схема
for (let i = 0; i < chooseAncients.length; i++) {
	chooseAncients[i].addEventListener('click', function (e) {
		let activesButton;
		let currentActiveButton;

		if (gameCardsButton.classList.contains('_active-cards-button'))
			gameCardsButton.classList.remove('_active-cards-button');

		for (let i = 0; i < 2; i++) {
			if (gameButton[i].classList.contains('_active-button'))
				gameButton[i].classList.remove('_active-button');
		}
		currentActiveButton = [];
		gameCircles.style.cssText = "opacity:1";
		let actives = document.getElementsByClassName('_active');
		let currentActive = actives[0];
		if (currentActive)
			currentActive.classList.remove('_active');
		if (currentActive !== e.target)
			e.target.classList.add('_active');
		//circleArray = [];
		getCards(i);
		let m;
		let m1;
		let m2;
		let m3;
		arrayFirstStage = [];
		arraySecondStage = [];
		arrayThirdStage = [];
		let lengthStageFirst;
		let lengthStageSecond;
		let lengthStageThird;
		for (let n = 0; n < 2; n++) {


			gameButton[n].addEventListener('click', function (e) {
				//circleArray = [];
				getCards(i);
				gameCardsButton.classList.remove('_active-cards-button');
				gameCard.src = '/assets/mythicCardBackground.png';
				for (let i = 0; i < 2; i++) {
					if (gameButton[i].classList.contains('_active-button'))
						gameButton[i].classList.remove('_active-button');
				}
				e.target.classList.add('_active-button');
				if (n == 0) {

					gameCardsButton.addEventListener('click', function (e) {
						console.log(circleArray);
						m = 0;
						m1 = 0;
						m2 = 0;
						m3 = 0;
						getCards(i);
						easyGetCards();
						console.log(arrayFirstStage);
						console.log(arraySecondStage);
						console.log(arrayThirdStage);
						console.log('легкий');
						e.target.classList.add('_active-cards-button');
						lengthStageFirst = arrayFirstStage.length;
						lengthStageSecond = arraySecondStage.length;
						lengthStageThird = arrayThirdStage.length;
						deskCards.addEventListener('click', function () {
							console.log('клик');
							if (m < lengthStageFirst) {
								gameCard.src = arrayFirstStage[m1].cardFace;
								if (arrayFirstStage[m1].color == 'green') {
									circleArray[0]--;
									circle[0].textContent = `${circleArray[0]}`;

								}
								if (arrayFirstStage[m1].color == 'brown') {
									circleArray[1]--;
									circle[1].textContent = `${circleArray[1]}`;
								}
								if (arrayFirstStage[m1].color == 'blue') {
									circleArray[2]--;
									circle[2].textContent = `${circleArray[2]}`;

								}
								m1++;

							}

							if ((m < (lengthStageSecond + lengthStageFirst)) && (m >= lengthStageFirst)) {
								gameCard.src = arraySecondStage[m2].cardFace;
								if (arraySecondStage[m2].color == 'green') {
									circleArray[3]--;
									circle[3].textContent = `${circleArray[3]}`;

								}
								if (arraySecondStage[m2].color == 'brown') {
									circleArray[4]--;
									circle[4].textContent = `${circleArray[4]}`;

								}
								if (arraySecondStage[m2].color == 'blue') {
									circleArray[5]--;
									circle[5].textContent = `${circleArray[5]}`;

								}
								m2++;

							}
							if ((m >= (lengthStageSecond + lengthStageFirst)) && (m < (lengthStageThird + lengthStageSecond + lengthStageFirst))) {
								gameCard.src = arrayThirdStage[m3].cardFace;
								if (arrayThirdStage[m3].color == 'green') {
									circleArray[6]--;
									circle[6].textContent = `${circleArray[6]}`;

								}
								if (arrayThirdStage[m3].color == 'brown') {
									circleArray[7]--;
									circle[7].textContent = `${circleArray[7]}`;

								}
								if (arrayThirdStage[m3].color == 'blue') {
									circleArray[8]--;
									circle[8].textContent = `${circleArray[8]}`;

								}
								m3++;

							}
							m++;
							console.log(m);
							console.log(lengthStageThird + lengthStageSecond + lengthStageFirst);
							if (m == lengthStageThird + lengthStageSecond + lengthStageFirst) {
								setTimeout(function () {
									location.reload();
								}, 10000);
							}
						}
						)
					})
				}
				if (n == 1) {

					gameCardsButton.addEventListener('click', function (e) {
						m = 0;
						m1 = 0;
						m2 = 0;
						m3 = 0;
						circleArray = [];
						getCards(i);
						console.log(circleArray);
						middleGetCards();
						e.target.classList.add('_active-cards-button');
						lengthStageFirst = arrayFirstStage.length;
						lengthStageSecond = arraySecondStage.length;
						lengthStageThird = arrayThirdStage.length;
						console.log(lengthStageFirst);
						console.log(lengthStageSecond);
						console.log(lengthStageThird);
						console.log('сложный');
						console.log(arrayFirstStage);

						deskCards.addEventListener('click', function () {
							// console.log(arrayFirstStage);
							// console.log(arraySecondStage);
							// console.log(arrayThirdStage);
							console.log(circleArray);
							if (m < lengthStageFirst) {
								gameCard.src = arrayFirstStage[m1].cardFace;
								if (arrayFirstStage[m1].color == 'green') {
									circleArray[0]--;
									circle[0].textContent = `${circleArray[0]}`;

								}
								if (arrayFirstStage[m1].color == 'brown') {
									circleArray[1]--;
									circle[1].textContent = `${circleArray[1]}`;
								}
								if (arrayFirstStage[m1].color == 'blue') {
									circleArray[2]--;
									circle[2].textContent = `${circleArray[2]}`;

								}
								m1++;

							}

							if ((m < (lengthStageSecond + lengthStageFirst)) && (m >= lengthStageFirst)) {
								gameCard.src = arraySecondStage[m2].cardFace;
								if (arraySecondStage[m2].color == 'green') {
									circleArray[3]--;
									circle[3].textContent = `${circleArray[3]}`;

								}
								if (arraySecondStage[m2].color == 'brown') {
									circleArray[4]--;
									circle[4].textContent = `${circleArray[4]}`;

								}
								if (arraySecondStage[m2].color == 'blue') {
									circleArray[5]--;
									circle[5].textContent = `${circleArray[5]}`;

								}
								m2++;

							}
							if ((m >= (lengthStageSecond + lengthStageFirst)) && (m < (lengthStageThird + lengthStageSecond + lengthStageFirst))) {
								gameCard.src = arrayThirdStage[m3].cardFace;
								if (arrayThirdStage[m3].color == 'green') {
									circleArray[6]--;
									circle[6].textContent = `${circleArray[6]}`;

								}
								if (arrayThirdStage[m3].color == 'brown') {
									circleArray[7]--;
									circle[7].textContent = `${circleArray[7]}`;

								}
								if (arrayThirdStage[m3].color == 'blue') {
									circleArray[8]--;
									circle[8].textContent = `${circleArray[8]}`;

								}
								m3++;

							}
							m++;
							console.log(m);
							console.log(lengthStageThird + lengthStageSecond + lengthStageFirst);
							if (m == lengthStageThird + lengthStageSecond + lengthStageFirst) {
								setTimeout(function () {
									location.reload();
								}, 10000);
							}
						}
						)
					})
				}
			})
		}
	})
}



