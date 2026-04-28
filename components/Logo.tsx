interface LogoProps {
  size?: 'md' | 'lg';
  color?: 'navy' | 'white';
}

export default function Logo({ size = 'md', color = 'navy' }: LogoProps) {
  const h = size === 'lg' ? 38 : 22;
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
