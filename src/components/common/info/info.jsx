import React from 'react'
import './info.css'

export default function Info() {
  return (
    <>
     <div className="info">
        <div className="info-box">
            <img src="./src/assets/common/Rectangle 7 (1).svg" alt="" />
            <div className="text-info">
            Проверь свои знания с нашим пробным тестом для ОРТ. Это быстро, просто и абсолютно бесплатно. Узнай, где ты стоишь в своей подготовке и какие темы требуют дополнительного внимания. Подготовься к экзамену шаг за шагом с нашей поддержкой!
           <br/>
            <a href="/test" className='link-test'> Проверить</a>
            </div>
        </div>
    </div>
    </>
  )
}
