import * as Icons from "./Icons";

type Icons = typeof Icons;
type IconProps = {
  icon: keyof Icons;
};

export function Icon({ icon }: IconProps) {
  const Icon = Icons[icon];

  return <Icon />;
}
