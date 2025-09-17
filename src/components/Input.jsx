export const Input = ({ value, onChange }) => {
  return <div>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="border p-2 flex-1 rounded w-full"
    />
  </div>
}
