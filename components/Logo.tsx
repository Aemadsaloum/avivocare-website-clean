interface LogoProps {
  size?: 'md' | 'lg' | 'xl';
  color?: 'navy' | 'white';
  height?: number;
}

export default function Logo({ size = 'md', color = 'navy', height }: LogoProps) {
  const h = height ?? (size === 'xl' ? 28 : size === 'lg' ? 15 : 10);
  const filter = color === 'white' ? 'brightness(0) invert(1)' : 'none';
  return (
    <img
      src="/avivocare-logo.png"
      alt="AvivoCare"
      height={h}
      style={{ height: h, width: 'auto', display: 'block', filter }}
    />
  );
}
