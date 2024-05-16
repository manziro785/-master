import React from 'react'
import './solvingTest.css'
import { HeaderGlobal } from '../../components/headerGlobal/headerGlobal'
import { useState } from 'react';

export  function SolvingTest() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  return (
    <>
    <HeaderGlobal/>
    <div className="container">

       <div className="subtitle-solve">
        <div className="header-solve">
        <div className="subj-name">
        Математика
        </div>
        <div className="option">
        Вариант 1
        </div>
        </div>

        <div className="timer">
            <div className="time-header">
            Время
            </div>
            <div className="times">
                <div className="past-time">
            Прошло: 24:14
            </div>
<div className="have-time">
            Осталось: 5:25
            </div>
            </div>
        </div>

       </div>

       <div className="rule-of-test">
       При выполнении заданий с кратким ответом впишите в поле для ответа цифру, которая соответствует номеру правильного ответа, или число, слово, последовательность букв (слов) или цифр. Ответ следует записывать без пробелов и каких-либо дополнительных символов. Дробную часть отделяйте от целой десятичной запятой. Единицы измерений писать не нужно.
       </div>

<div className="container-tests">
<div className="testt">
    <div className="num-test">
        1
    </div>
    <div className="tasks">
        <div className="question">
        Установите соответствие между стоимостью и номерами печей.
Заполните таблицу, в бланк ответов перенесите последовательность трех цифр без пробелов, запятых и других дополнительных символов.
        </div>
        <div className="answers">
      <input
        type="radio"
        id="option1"
        value="option1"
        name= 'radio'
      />
      <label htmlFor="option1"style={{ fontWeight: selectedOption === 'option1' ? 'bold' : 'normal' }} >Слово 1</label><br />

      <input
        type="radio"
        id="option2"
        value="option2"
        name= 'radio'

      />
      <label htmlFor="option2"style={{ fontWeight: selectedOption === 'option1' ? 'bold' : 'normal' }}>Слово 2</label><br />

      <input
        type="radio"
        id="option3"
        value="option3"
        name= 'radio'

      />
      <label htmlFor="option3"style={{ fontWeight: selectedOption === 'option1' ? 'bold' : 'normal' }}>Слово 3</label><br />
      <input
        type="radio"
        id="option3"
        value="option3"
        name= 'radio'

      />
      <label htmlFor="option3"style={{ fontWeight: selectedOption === 'option1' ? 'bold' : 'normal' }}>Слово 4</label><br />
        </div>
    </div>
</div>
</div>
</div>
<div>

    </div>
    </>
  )
}
