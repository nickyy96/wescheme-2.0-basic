import styles from "./index.module.css";
import { type NextPage } from "next";
import EditorBar from "../components/editor/EditorBar";
import CodeMirrorWrapper from "../components/CodeMirrorWrapper"

const openEditor: NextPage = () => {
  return (
    <div className="w-full">
      <EditorBar />
      <CodeMirrorWrapper></CodeMirrorWrapper>
    </div>
  );
};

export default openEditor;
