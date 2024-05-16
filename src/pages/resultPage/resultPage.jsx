import React from 'react'
import './resultPage.css'
import { HeaderGlobal } from '../../components/headerGlobal/headerGlobal'


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
                </div>

    </div>
  )
}
