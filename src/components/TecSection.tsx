import MiniCard from './MiniCard';
import { star, BgDesktop } from '../shared/constants/Tec_images';
import { tecData } from '@/shared/constants/TecData';

const TecSection = () => {
  return (
    <section
      className="md:h-[100vhd] flex flex-col md:bg-cover md:bg-center px-5 py-10 md:p-0"
      style={{ background: `url(${BgDesktop})` }}
    >
      <div className='flex xl:py-10 py-5 flex-col items-center justify-center bg-center bg-[url("./assets/Tecs_icons/tec_bg/bg-desktop.png")] md:bg-none '>
        <div className="flex flex-row items-center py-10 xl:py-15">
          <img src={star} alt="start-icon" className="w-12" />
          <h2 className="text-[24px] font-chakra font-bold tracking-[4%]">
            Tecnologias usadas
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center xl:scale-90 md:flex-row md:w-[90%] xl:w-[85%] flex-wrap gap-5">
          {tecData.map((item) => (
            <MiniCard
              key={item.id}
              icon={item.icon}
              alt={item.title}
              size="w-9 xl:w-8"
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TecSection;
