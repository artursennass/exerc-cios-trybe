function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
createDaysOfTheWeek();
  
function daysOfTheMonth () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let ulDays = document.getElementById('days');

  for (let i = 0; i < dezDaysList.length; i +=1) {
    let newLiItem = document.createElement('li');

    if (dezDaysList[i] == 24 || dezDaysList[i] == 25 || dezDaysList[i] == 31) {
        newLiItem.classList.add("holiday");
    }

    if (dezDaysList[i] == '4' || dezDaysList[i] == '11' || dezDaysList[i] == '18' || dezDaysList[i] == '25') {
        newLiItem.classList.add("friday");
    }

    newLiItem.classList.add('day');
    newLiItem.innerHTML = dezDaysList[i];

    ulDays.appendChild(newLiItem);
  }
}
daysOfTheMonth()

function holidaysButton (holiday) {
    let buttonContainer = document.getElementsByClassName('buttons-container')

    let button = document.createElement('button');
    button.setAttribute('id', 'btn-holiday');
    button.innerText = holiday;

    buttonContainer[0].appendChild(button);
}
holidaysButton('Feriados')

let buttonHolidays = document.getElementById('btn-holiday');

buttonHolidays.addEventListener('click', function(event){
    let getHolidays = document.getElementsByClassName('holiday');
    
    for (let i = 0; i < getHolidays.length; i += 1) {
        if (getHolidays[i].style.color === 'red') {
            for (let i2 = 0; i2 < getHolidays.length; i2 += 1) {
                getHolidays[i2].style.color = '#777';
            }
        } else {
            for (let i3 = 0; i3 < getHolidays.length; i3 += 1) {
                getHolidays[i3].style.color = 'red';
            }
        }
    }
    
});

function fridayButton (friday) {
    let buttonContainer = document.getElementsByClassName('buttons-container')

    let button = document.createElement('button');
    button.setAttribute('id', 'btn-friday');
    button.innerText = friday;

    buttonContainer[0].appendChild(button);
}
fridayButton('Sexta-feira')

let buttonFriday = document.getElementById('btn-friday');

buttonFriday.addEventListener('click', function(event){
    let getFridays = document.getElementsByClassName('friday');
    
    for (let i = 0; i < getFridays.length; i += 1) {
        if (getFridays[i].innerText === 'Sextou!') {
            for (let i2 = 0; i2 < getFridays.length; i2 += 1) {
                getFridays[i2].innerText = getFridays[i2];
            }
        } else {
            for (let i3 = 0; i3 < getFridays.length; i3 += 1) {
                getFridays[i3].innerHTML = 'Sextou!';
            }
        }
    }
    
});
// esse noa foi ainda