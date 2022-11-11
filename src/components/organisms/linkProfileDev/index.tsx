import { Avatar, LinkBox, LinkOverlay, Tag, TagLabel } from '@chakra-ui/react';

interface ILinkProfileDev {
  name: string;
  profile: string;
  img: string;
}

export const LinkProfileDev = ({ name, profile, img }: ILinkProfileDev) => {
  return (
    <LinkBox padding={2}>
      <LinkOverlay
        href={profile}
        display='flex'
        flexDirection='row'
        alignItems='center'
        target='_blank'
      >
        <Tag size='lg' colorScheme='green' borderRadius='full'>
          <Avatar src={img} size='xs' name={name} ml={-1} mr={2} />
          <TagLabel>{name}</TagLabel>
        </Tag>
      </LinkOverlay>
    </LinkBox>
  );
};
