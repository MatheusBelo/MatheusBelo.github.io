# Portfólio profissional de Matheus Belo

Site estático, responsivo e pronto para GitHub Pages. Não exige servidor, banco de dados ou hospedagem paga.

## 1. Personalize antes de publicar

Abra `data.js` e altere:

- e-mail;
- usuário do GitHub;
- LinkedIn;
- experiência profissional;
- certificações e links das credenciais;
- cursos;
- projetos e links;
- tecnologias que você realmente utiliza.

Se quiser disponibilizar o currículo, coloque um arquivo chamado `curriculo.pdf` na raiz do projeto. Caso contrário, remova o botão correspondente de `index.html`.

## 2. Teste localmente

Você pode abrir `index.html` diretamente no navegador. Para uma prévia mais confiável, no terminal dentro da pasta execute:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## 3. Publique no GitHub Pages

### Opção A: site principal

1. Crie um repositório público com o nome exato `SEU-USUARIO.github.io`.
2. Envie todos os arquivos, mantendo `index.html` na raiz.
3. Acesse **Settings > Pages**.
4. Em **Source**, selecione **Deploy from a branch**.
5. Escolha a branch **main** e a pasta **/(root)**.
6. Salve.
7. A URL será `https://SEU-USUARIO.github.io/`.

### Opção B: repositório chamado portfolio

1. Crie um repositório público chamado `portfolio`.
2. Envie os arquivos.
3. Configure **Settings > Pages > Deploy from a branch > main > /(root)**.
4. A URL será `https://SEU-USUARIO.github.io/portfolio/`.

## Solução para erro 404

- Confirme que o arquivo se chama exatamente `index.html`, em letras minúsculas.
- Confirme que `index.html` está na raiz, não dentro de outra pasta.
- Confirme que o Pages usa a branch que contém os arquivos.
- Confira a aba **Actions** para verificar a publicação.
- Use a URL com o nome do repositório quando ele não for `SEU-USUARIO.github.io`.

## Estrutura

```text
index.html   Estrutura da página e SEO
style.css    Layout, temas, responsividade e animações
data.js      Todo o conteúdo editável
script.js    Renderização, menu, tema e interações
404.html     Redirecionamento simples para a página inicial
.nojekyll    Evita processamento desnecessário pelo Jekyll
```
