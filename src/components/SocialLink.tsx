import type { LinkPropType } from '@/shared/types/SocialLink';

const SocialLink = ({ link, icon, alt, size }: LinkPropType) => {
  return (
    <a target="_blank" href={link}>
      <img src={icon} alt={alt} className={size} />
    </a>
  );
};

export default SocialLink;
