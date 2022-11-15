import { ReactElement, RefObject } from 'react';
import { IconButtonCustom } from './styled';

interface IIconButton {
  ref?: RefObject<HTMLElement>;
  icon: ReactElement<HTMLElement>;
  onClick: () => void;
}

export const IconButton = ({ ref, icon, onClick }: IIconButton) => {
  return (
    <IconButtonCustom
      ref={ref}
      aria-label='Settings'
      icon={icon}
      onClick={() => onClick()}
    />
  );
};
