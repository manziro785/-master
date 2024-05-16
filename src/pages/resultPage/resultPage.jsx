import React from 'react'
import './resultPage.css'
import { HeaderGlobal } from '../../components/headerGlobal/headerGlobal'
import Questiontest from '../../components/question/question';



function GradeTitle({ grade }) {
    let title;
    let className;
    if (grade === 2) {
      title = "Ваша оценка: 2";
      className = "grade-title-2";
    } else if (grade === 3) {
      title = "Ваша оценка: 3";
      className = "grade-title-3";
    } 
    else if (grade === 4) {
    title = "Ваша оценка: 4";
    className = "grade-title-4";
    } else  {
      title = "Ваша оценка: 5";
      className = "grade-title-5";
    }
  
    return <h1 className={className}>{title}</h1>;
  }
  

export  function ResultPage() {
    const grade = 3;

  return (
    <div>
<HeaderGlobal/>
<div className="container">
                <div className="subtitle-solve">
                    <div className="header-solve">
                        <div className="subj-name">
                            Математика
                        </div>
                        <div className="option">
                            Вариант 1 : Результаты
                        </div>
                    </div>

                    <div className="timer_solve">
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

                <div className="your_mark">
                    <div className="title_mark">
                    <GradeTitle grade={grade} />
                    </div>
                </div>
                <div className="conclution">
                Заданий с кратким ответом: 19, с развернутым ответом: 6. Максимальный балл: 19 + 12 = 31.<br/>
Сдана 10.05.2024 09:54 (МСК)
                </div>
<div className="tables">
  <div className="table-nums">
<div className="title-nums">
№
</div>
<div className="num-ans">
1
</div>
<div className="num-ans">
2
</div>
<div className="num-ans">
3
</div>
<div className="num-ans">
4
</div>
  </div>

  <div className="table-your-ans">
<div className="title-nums">
Вашы ответы
</div>
<div className="num-ans"style={{backgroundColor: '#00FF47'}}>
120
</div>
<div className="num-ans" style={{backgroundColor: '#F14F4F'}}>
ответ1
</div>
<div className="num-ans"style={{backgroundColor: '#F14F4F'}}>

</div>
<div className="num-ans"style={{backgroundColor: '#00FF47'}}>
22
</div>
  </div>

  <div className="table-corr-ans">
<div className="title-nums">
Правильные ответы
</div>
<div className="num-ans">
120
</div>
<div className="num-ans">
ответ2
</div>
<div className="num-ans">
3
</div>
<div className="num-ans">
1 000 000
</div>
  </div>
</div>

<div className="all-points">
Результат: Решено 0 из 25  заданий, набрано 0  первичных баллов.
</div>

<Questiontest/>
                </div>

    </div>
  )
}
