export default function Search({
  labelName = "",
  onChange = () => {},
  value = "",
}) {
  return (
    <div className="mt-5 w-80 ml-auto">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700 text-end"
      >
        {labelName}
      </label>
      <div className="relative mt-1 flex items-center">
        <input
          type="text"
          id="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border p-2 w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}
