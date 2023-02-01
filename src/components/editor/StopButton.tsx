export default function StopButton() {
  return (
    <div className="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="text-md relative inline-flex items-center rounded-md border border-gray-300 bg-neutral-100 px-10 py-1 font-medium text-neutral-600 hover:bg-neutral-200 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        Stop
      </button>
    </div>
  );
}
