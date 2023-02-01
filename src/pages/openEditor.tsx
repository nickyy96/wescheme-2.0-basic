import styles from "./index.module.css";
import { type NextPage } from "next";
import EditorBar from "../components/editor/EditorBar";

const openEditor: NextPage = () => {
  return (
    <div className="w-full">
      <EditorBar />
    </div>
  );
};

export default openEditor;
