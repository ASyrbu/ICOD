import Frame4 from "./Services4";
import Frame3 from "./Services3";

const Frame2 = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center pt-0 px-[15px] pb-[30.300000000000185px] box-border gap-[30px_28px] min-h-[918px] max-w-full z-[1] text-left text-16xl text-white font-cormorant-garamond">
      <Frame4
        businessLaw="Финансирование Судебных Споров"
        beAwareOfNewDevelopmentsA="Предоставляем финансовую поддержку для клиентов в осуществлении их правовой защиты, покрывая расходы на судебные процедуры и услуги адвоката."
      />
      <div className="w-[430px] bg-gray-300 flex flex-col items-start justify-center pt-[55px] px-[50px] pb-[70px] box-border gap-[53.69999999999982px] max-w-full mq450:gap-[27px_53.7px] mq450:pt-9 mq450:px-5 mq450:pb-[45px] mq450:box-border">
        <div className="w-[430px] h-[429px] relative bg-gray-300 hidden max-w-full" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.3000000000001819px]">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-7 relative gap-[8px] shrink-0 z-[1]">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
            <div className="relative tracking-[0.4px] leading-[56px] z-[1] mq450:text-2xl mq450:leading-[34px] mq800:text-9xl mq800:leading-[45px]">
              Выкуп Долгов
            </div>
            <div className="self-stretch relative text-xl tracking-[0.4px] leading-[32px] font-outfit text-lightgray z-[1] mq450:text-base mq450:leading-[26px]">
              Предоставляем услугу по выкупу долгов, предлагая кредиторам возможность получить быструю ликвидацию задолженности и избежать рисков долгосрочного взыскания.
            </div>
          </div>
          <div className="self-stretch h-px relative bg-dimgray z-[1]" />
        </div>

      </div>
      <Frame3
        carAccident="Юридический Аутсорсинг"
        beingUntruthfulWillGetYou="Мы предлагаем комплексные юридические решения для бизнеса, перелагая определенные юридические функции на нашу команду экспертов."
      />
      <Frame3
        carAccident="Медиация"
        beingUntruthfulWillGetYou="Мы помогаем сторонам разрешить конфликты мирным путем, обеспечивая нейтральное и эффективное решение споров без обращения в суд."
        propGap="45.69999999999982px"
        propAlignSelf="unset"
        propWidth="316px"
        propHeight="69px"
        propHeight1="unset"
        propFlex="1"
        propMaxHeight="100%"
      />

      <div className="w-[430px] bg-gray-300 flex flex-col items-start justify-start pt-[55px] px-[50px] pb-[70px] box-border gap-[56.69999999999982px] max-w-full mq450:gap-[28px_56.7px] mq450:pt-9 mq450:px-5 mq450:pb-[45px] mq450:box-border">
        <div className="w-[430px] h-[429px] relative bg-gray-300 hidden max-w-full" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.3000000000001819px]">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-7 relative gap-[8px] z-[1]">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
            <div className="relative tracking-[0.4px] leading-[56px] z-[1] mq450:text-2xl mq450:leading-[34px] mq800:text-9xl mq800:leading-[45px]">
              Взыскание Долгов
            </div>
            <div className="w-[296px] relative text-xl tracking-[0.4px] leading-[32px] font-outfit text-lightgray inline-block z-[1] mq450:text-base mq450:leading-[26px]">
              Мы эффективно взыскиваем задолженности с должников, используя правовые механизмы для обеспечения возврата долгов и защиты интересов наших клиентов.
            </div>
          </div>
          <div className="self-stretch h-px relative bg-dimgray z-[1]" />
        </div>
      </div>
      <Frame4
        businessLaw="Юридические Услуги"
        beAwareOfNewDevelopmentsA="Наша компания предоставляет широкий спектр юридических услуг для защиты интересов наших клиентов в различных сферах права."
        propGap="47.69999999999982px"
        propWidth="321px"
        propHeight="56px"
        propPadding="9px 0px 0px"
      />
    </div>
  );
};

export default Frame2;
