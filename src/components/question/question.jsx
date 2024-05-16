import React from 'react'
import { useState } from 'react';

export default function Questiontest() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

  return (
    <div>       <div className="testt">
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
                name="radio"
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
            />
            <label htmlFor="option1" className={selectedOption === 'option1' ? 'selected-label' : ''}>Слово 1</label><br />

            <input
                type="radio"
                id="option2"
                value="option2"
                name="radio"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
            />
            <label htmlFor="option2" className={selectedOption === 'option2' ? 'selected-label' : ''}>Слово 2</label><br />

            <input
                type="radio"
                id="option3"
                value="option3"
                name="radio"
                checked={selectedOption === 'option3'}
                onChange={handleOptionChange}
            />
            <label htmlFor="option3" className={selectedOption === 'option3' ? 'selected-label' : ''}>Слово 3</label><br />

            <input
                type="radio"
                id="option4"
                value="option4"
                name="radio"
                checked={selectedOption === 'option4'}
                onChange={handleOptionChange}
            />
            <label htmlFor="option4" className={selectedOption === 'option4' ? 'selected-label' : ''}>Слово 4</label><br />

        </div>
    </div>
</div></div>
  )
}
