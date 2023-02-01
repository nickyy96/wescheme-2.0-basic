import EditorDropdown from "./EditorDropdown";
import RunButton from "./RunButton";
import StopButton from "./StopButton";

export default function EditorBar() {
  return (
    <div>
      {/* An editor bar that spans the top of the page */}
      <div className="flex h-full w-full flex-row justify-between border-b border-neutral-200 px-4 py-3">
        <EditorDropdown />
        {/* <div>test 1</div>
        <div>test 1</div>
        <EditorDropdown /> */}
        <div className="flex space-x-2 px-6">
          <RunButton />
          <StopButton />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
