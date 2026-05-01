export function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export function InputStyled({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="border border-none bg-[var(--purple)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}