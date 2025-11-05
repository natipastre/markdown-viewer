import React, { forwardRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownPreview = forwardRef(({ markdown }, ref) => {
  return (
    <div className="preview" ref={ref}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
});

export default MarkdownPreview;
