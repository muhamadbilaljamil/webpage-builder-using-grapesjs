//@ts-ignore
"use client";
import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import plugin from 'grapesjs-blocks-basic';
import "grapesjs/dist/css/grapes.min.css";
import { LeftSideMenu, ContentSection } from "..";

const PageBuilder = () => {
  const [editor, setEditor] = useState();

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      storageManager: false,
      plugins: ['gjs-blocks-basic'],
      pluginsOpts: {
        'gjs-blocks-basic': {}
      },
      blockManager: {
        appendTo: "#blocks"
      },
      layerManager: {
        appendTo: '#layer-container'
      },
      styleManager: {
        appendTo: '#style-view'
      },
      panels: {
        defaults: {

        }

      }
    });
    setEditor(editor);
  }, []);

  return (
    <div className="grid grid-cols-12 h-[100vh]">
      <LeftSideMenu />
      <ContentSection />
    </div>
  );
};

export default PageBuilder;
