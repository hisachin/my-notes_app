'use client';
import React, { useEffect, useState,useMemo } from 'react';
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import styles from './richTextEditor.module.css';

const RichTextEditor = ({ initialContent, onContentChange }) => {
  const [editorHtml, setEditorHtml] = useState(initialContent || '');
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);

  const handleEditorChange = (html) => {
    setEditorHtml(html);
    onContentChange(html);
  };


  useEffect(() => {
    handleEditorChange(initialContent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[initialContent]);


  return (
    <ReactQuill
    className={styles.qlContainer}
      value={editorHtml}
      onChange={handleEditorChange}
      modules={RichTextEditor.modules}
      formats={RichTextEditor.formats}
      placeholder="Write something..."
    />
  );
};

RichTextEditor.modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6,false] }],
    [{ 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline', 'strike','blockquote','code-block'],
    ['link', 'image']
  ],
};

RichTextEditor.formats = [
  'header', 'font',
  'bold', 'italic', 'underline', 'strike', 'blockquote','code-block',
  'list', 'bullet', 'link', 'image'
];

export default RichTextEditor;
