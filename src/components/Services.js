import React from "react";
import Service2 from "./Service";

const Frame2 = () => {
  return (
    <div id="services" className="mx-auto pb-[90px] gap-8  max-w-full text-left text-3xl text-white font-cormorant-garamond">
      <div className="flex flex-col justify-center items-center max-w-[1900px] mx-auto">
        <h1 className="text-center text-17xl font-inherit mb-8">Услуги, которые мы предоставляем</h1>
        <p className=" text-center w-[660px]  pt-[33px] mx-auto pb-8 box-border min-w-[660px] max-w-full text-xl text-lightgray font-outfit mq800:min-w-full  self-stretch relative tracking-[0.4px] leading-[32px] z-[1] mq450:text-base mq450:leading-[26px] ">
          Полный юридический сервис для сферы безопасности бизнеса и должностных лиц.
        </p>
      </div>

      <div className="grid services  gap-8 px-4 ">
        <Service2
          title="Финансирование Судебных Споров"
          description="Предоставляем финансовую поддержку для клиентов в осуществлении их правовой защиты, покрывая расходы на судебные процедуры и услуги адвоката."
        />
        <Service2
          title="Выкуп Долгов"
          description="Предоставляем услугу по выкупу долгов, предлагая кредиторам возможность получить быструю ликвидацию задолженности и избежать рисков долгосрочного взыскания."
        />
        <Service2
          title="Юридический Аутсорсинг"
          description="Мы предлагаем комплексные юридические решения для бизнеса, перелагая определенные юридические функции на нашу команду экспертов."
        />
        <Service2
          title="Медиация"
          description="Мы помогаем сторонам разрешить конфликты мирным путем, обеспечивая нейтральное и эффективное решение споров без обращения в суд."
        />
        <Service2
          title="Взыскание Долгов"
          description="Мы эффективно взыскиваем задолженности с должников, используя правовые механизмы для обеспечения возврата долгов и защиты интересов наших клиентов."
        />
        <Service2
          title="Юридические Услуги"
          description="Наша компания предоставляет широкий спектр юридических услуг для защиты интересов наших клиентов в различных сферах права."
        />
      </div>
    </div>
  );
};

export default Frame2;
