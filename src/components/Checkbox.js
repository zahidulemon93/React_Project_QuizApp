export default function Checkbox({ className, text, ...rest }) {
  return (
    <label class={className}>
      <input type="checkbox" {...rest} /> <span> {text}</span>
    </label>
  );
}
