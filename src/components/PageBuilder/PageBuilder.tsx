//@ts-ignore
"use client";
import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import grapesPresetWebpage from "grapesjs-preset-webpage";
import "grapesjs/dist/css/grapes.min.css";

const PageBuilder = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [grapesPresetWebpage],
      pluginsOpts: {
        grapesPresetWebpage: {},
      },
    });
    setEditor(editor);
  }, []);

  return (
    <div>
      <div id="editor"></div>
    </div>
  );
};

export default PageBuilder;
