import Linkedin from '../assets/social_icons/linkedin.png';
import Instagram from '../assets/social_icons/instagram.png';
import Discord from '../assets/social_icons/discord.png';
import SocialLink from './SocialLink';

const Footer = () => {
  const ButtonData = [
    {
      id: 1,
      alt: 'linkdin-icon',
      icon: Linkedin,
      link: 'https://www.linkedin.com/company/comunidade-frontend-fusion/',
    },
    {
      id: 2,
      alt: 'instagram-icon',
      icon: Instagram,
      link: 'https://www.instagram.com/comunidadefrontendfusion/',
    },
    {
      id: 3,
      alt: 'discord-icon',
      icon: Discord,
      link: 'https://discord.gg/yAp9UNejRa',
    },
  ];

  return (
    <footer className="bg-[#0A0B12] h-[6.25em] lg:h-[8.5em] border-t border-[#B919BC] flex flex-row items-center justify-center gap-x-5 xl:gap-x-6">
      <p className="text-[#B919BC] font-medium xl:font-extrabold font-roboto text-[10px] xl:text-[1em] cursor-default ">
        Siga as redes sociais da comunidade Frontend Fusion
      </p>
      <div className="flex flex-row items-center gap-x-2.5 mt-2 xl:mt-0 xl:gap-x-5">
        {ButtonData.map(({ id, alt, icon, link }) => (
          <SocialLink
            key={id}
            alt={alt}
            icon={icon}
            link={link}
            size="w-7 xl:w-10"
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
