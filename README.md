# 📸 PortuShot
---

O **PortuShot** é uma aplicação que permite transformar códigos escritos em **Portugol** em **snippets visuais exportáveis como PNG**.  
A ideia é facilitar a criação de anotações e materiais didáticos com uma representação visual do código.

## 🔍 Como Funciona

O PortuShot utiliza:
- **Prism.js** para realizar a _syntax highlighting_ do Portugol.
- **html-to-image** para converter o código exibido em imagem PNG.
- **React** para construir a interface interativa e modular.

O usuário escreve ou cola seu código Portugol no editor, visualiza em tempo real a prévia estilizada e pode exportar facilmente o resultado como uma imagem.

## 🎯 Funcionalidades

- Editor de código com:
    - **Numeração de linhas**.
    - **Auto-resize** do campo de texto.
- Pré-visualização em tempo real do snippet.
- Alternância entre **tema claro e escuro**.
- Opção de exibir ou ocultar a **barra de título da janela** no preview.
- Exportação rápida para **PNG**.
- Personalização do **nome do arquivo exportado**.

## ⚙️ Como Rodar Localmente

Se quiser clonar e rodar o projeto no seu computador, siga os passos:

```bash
# Clone este repositório
git clone https://github.com/enzoguinossi/portushot.git

# Entre na pasta do projeto
cd portushot

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```
Após isso, o projeto estará disponível em:
http://localhost:5173

## 🛠️ Tecnologias Usadas

- **React**: Estrutura da aplicação e gerenciamento de estado.
- **Prism.js**: Realce de sintaxe para Portugol.
- **html-to-image**: Exportação do código como imagem.
- **CSS**: Estilização da interface.
---

> 🎉 **Desenvolvido por [Enzo Guinossi](https://www.linkedin.com/in/enzo-wacker-guinossi/)** 🎉