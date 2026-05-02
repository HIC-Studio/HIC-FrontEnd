export function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="px-3 py-2 font-medium focus:outline-none"
    />
  );
}

export function InputStyled({ type, placeholder, value, onChange, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={ className ? className : `"borderborder-none outline-none bg-[var(--purple)] rounded-md px-3 py-2 hover:bg-[var(--purple2)] active:scale-110 focus:outline-none transition duration-180 ease-in`}
    />
  );
}