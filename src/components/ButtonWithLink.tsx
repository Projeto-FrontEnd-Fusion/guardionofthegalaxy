import type { ButtonPropType } from '@/shared/types/ButtonWithLink';

const ButtonWithLink = ({ link, icon, alt, size }: ButtonPropType) => {
  return (
    <a target="_blank" href={link}>
      <button>
        <img src={icon} alt={alt} className={`${size} cursor-pointer`} />
      </button>
    </a>
  );
};

export default ButtonWithLink;
