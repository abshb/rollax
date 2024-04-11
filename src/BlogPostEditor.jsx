import React, { useEffect, useRef } from "react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

const BlogPostEditor = () => {
  const editorRef = useRef();
  const editorContainerRef = useRef();

  useEffect(() => {
    if (editorContainerRef.current) {
      DecoupledEditor.create(editorContainerRef.current)
        .then((editor) => {
          editorRef.current = editor;
          document
            .querySelector("#toolbar-container")
            .appendChild(editor.ui.view.toolbar.element);
        })
        .catch((error) => {
          console.error("There was a problem initializing the editor:", error);
        });
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy().catch((error) => {
          console.error("There was a problem destroying the editor:", error);
        });
      }
    };
  }, []);

  return (
    <div>
      <h2>My Blog Post Editor</h2>
      <div id="toolbar-container"></div>
      <div ref={editorContainerRef}></div>
    </div>
  );
};

export default BlogPostEditor;
