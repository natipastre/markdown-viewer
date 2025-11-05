import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Swal from "sweetalert2";
import "./App.css";

export default function App() {
  const [markdown, setMarkdown] = useState("# Bem-vindo ao Estúdio Markdown ✍️");
  const [darkMode, setDarkMode] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("Markdown Exportado:", 10, 10);
    doc.text(markdown, 10, 20);
    doc.save("markdown.pdf");

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "PDF exportado com sucesso!",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: darkMode ? "#1e1e1e" : "#fff",
      color: darkMode ? "#fff" : "#333",
      iconColor: "#00e676",
    });
  };

  const handleCopyHTML = () => {
    const html = document.querySelector(".preview").innerHTML;
    navigator.clipboard.writeText(html);

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "HTML copiado para a área de transferência!",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: darkMode ? "#1e1e1e" : "#fff",
      color: darkMode ? "#fff" : "#333",
      iconColor: "#00e676",
    });
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""} ${fadeIn ? "fade-in" : ""}`}>
      {/* Navbar */}
      <div className="navbar">
        <span>📝</span> Estúdio Markdown
      </div>

      {/* Cabeçalho */}
      <header className="app-header">
        <h1>Bem-vindo ao Estúdio Markdown</h1>
        <p>Visualizador e Editor Online</p>

        <div className="toolbar">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌞 Tema Claro" : "🌙 Tema Escuro"}
          </button>
          <button onClick={handleCopyHTML}>📋 Copiar HTML</button>
          <button onClick={handleExportPDF}>📄 Exportar PDF</button>
          <button onClick={() => setShowGuide(!showGuide)}>📘 Guia Markdown</button>
        </div>
      </header>

      {/* Editor e Preview */}
      <main className="container">
        <section className="editor">
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </section>

        <section className="preview markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </section>
      </main>

      {/* Painel lateral do Guia Markdown */}
      <div className={`markdown-guide ${showGuide ? "open" : ""}`}>
        <div className="guide-header">
          <h2>Guia Markdown</h2>
          <button onClick={() => setShowGuide(false)}>✖ Fechar</button>
        </div>
        <div className="guide-content">
          <p><strong>Títulos:</strong></p>
          <pre>
# Título 1{"\n"}
## Título 2{"\n"}
### Título 3
          </pre>

          <p><strong>Negrito / Itálico:</strong></p>
          <pre>
**negrito**{"\n"}
*itálico*
          </pre>

          <p><strong>Listas:</strong></p>
          <pre>
- Item 1{"\n"}
- Item 2{"\n"}
1. Item numerado
          </pre>

          <p><strong>Links / Imagens:</strong></p>
          <pre>
[Link](https://example.com){"\n"}
![Imagem](url-da-imagem)
          </pre>

          <p><strong>Blocos de código:</strong></p>
          <pre>
`código inline`{"\n"}
{`\\\`\\\`\\\`js
console.log("Código em bloco");
\\\`\\\`\\\``}
          </pre>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="footer">
        <span>💻 Desenvolvido por <strong>Natália Baptista Pastre</strong></span>
      </footer>
    </div>
  );
}
