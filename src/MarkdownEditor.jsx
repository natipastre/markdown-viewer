export default function MarkdownEditor({ markdown, setMarkdown }) {
  // Funções para inserir Markdown rapidamente
  const addMarkdown = (syntax) => {
    setMarkdown(markdown + syntax);
  };

  return (
    <div className="editor-container">
      <div className="buttons">
        <button onClick={() => addMarkdown("**negrito**")}>B</button>
        <button onClick={() => addMarkdown("_itálico_")}>I</button>
        <button onClick={() => addMarkdown("# Título")}>H1</button>
        <button onClick={() => addMarkdown("[Link](url)")}>Link</button>
        <button onClick={() => addMarkdown("`Código`")}>Código</button>
      </div>
      <textarea
        className="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Digite seu Markdown aqui..."
      />
    </div>
  );
}
