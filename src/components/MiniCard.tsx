import type { CardPropType } from '@/shared/types/MiniCardtype';

const MiniCard = ({ icon, alt, size, title, text }: CardPropType) => {
  return (
    <article className="flex flex-col border p-5.5 xl:p-5  border-[#B919BC] cursor-default bg-[#140C28] w-81.25 h-55.75 shadow-miniCard rounded-xl xl:w-[254px] xl:h-[223px]">
      <div className="flex flex-col items-center gap-7 justify-center">
        <div className="bg-[#B919BC] w-10 h-10 rounded-[10px] mt-1.5 p-[0.2em]">
          <img src={icon} alt={`icon-${alt}`} className={size} />
        </div>
        <h3 className="text-white font-chakra font-semibold relative -top-1.5">
          {title}
        </h3>
      </div>
      <p className="text-[#80D4DF] text-[14px] font-inter font-semibold pt-1 px-1 xl:px-2 tracking-wide w-59 xl:w-47">
        {text}
      </p>
    </article>
  );
};

export default MiniCard;
