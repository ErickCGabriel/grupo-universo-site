# Site — Grupo Universo

Site institucional estático (HTML/CSS/JS puro, sem build, pronto para GitHub Pages) para o Grupo Universo — Embalagens, Limpeza, Higiene, Descartáveis e Copa e Cozinha, Americana/SP.

## Estrutura

```
index.html      → Home
sobre.html      → Sobre a empresa
produtos.html   → As 5 categorias com CTA de WhatsApp
contato.html    → Telefone, WhatsApp, e-mail, endereço e mapa
css/style.css   → Todo o design system (cores, tipografia, componentes)
js/main.js      → Menu mobile, textura animada do hero, ano do rodapé
assets/         → Logo oficial (logo.png, logo-icon.png) e favicons
CNAME           → domínio próprio (grupouniversoamericana.com), já configurado
robots.txt      → libera indexação e aponta pro sitemap
sitemap.xml     → mapa das 4 páginas para os buscadores
```

## Antes de publicar — confirmar com o cliente

Este site foi montado a partir do que encontramos publicamente (Instagram @grupouniversoamericana e diretório Solutudo). Alguns pontos **precisam ser confirmados** com o Grupo Universo antes de publicar:

- **Endereço** (Estrada da Servidão Bom Recreio, 530 — Galpão 05, Bom Recreio, Americana/SP) veio de um diretório público de 2019 — confirmar se ainda é o endereço correto.
- **"Há mais de uma década"** — usei uma frase genérica porque não encontrei a data exata de fundação. Se o cliente souber o ano certo, dá pra trocar por um número real (ex: "desde 2011").
- **Itens de exemplo em cada categoria** (produtos.html) são ilustrativos, baseados no nome da categoria — não é a lista real de produtos. Vale substituir pelos itens que o Grupo Universo realmente vende.
- **Horário de atendimento** (contato.html) está genérico ("segunda a sexta, horário comercial") — trocar pelo horário real.
- O link da loja Nuvemshop que aparecia na bio do Instagram (ainda com senha) **não foi incluído**, conforme combinado.

## Rodar localmente

Não precisa de instalação. Abra `index.html` no navegador, ou rode um servidor simples:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Publicar no GitHub Pages

Esta pasta já vem com o git inicializado e o primeiro commit pronto (`git log` mostra "Site institucional Grupo Universo"). Falta só:

1. Crie um repositório **vazio** em [github.com/new](https://github.com/new): nome `grupo-universo-site`, **Public**, sem marcar "Add a README".
2. Dentro desta pasta, no terminal:
   ```bash
   git remote add origin https://github.com/ErickCGabriel/grupo-universo-site.git
   git push -u origin main
   ```
   *(pode trocar `grupo-universo-site` pelo nome de repositório que preferir — nesse caso, ajuste a URL acima também)*
3. No GitHub: **Settings → Pages → Source** → selecione a branch `main` e a pasta `/ (root)`.
4. O site fica disponível em `https://ErickCGabriel.github.io/grupo-universo-site/` até o domínio próprio ser validado.

### Conectar o domínio grupouniversoamericana.com

O arquivo `CNAME` já está no projeto com `grupouniversoamericana.com` dentro — não precisa criar nada no GitHub, só os registros DNS:

1. No painel do registrador onde você comprou o domínio, crie estes registros:
   - **4 registros A** no domínio raiz (`grupouniversoamericana.com`) apontando para:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **1 registro CNAME** para `www.grupouniversoamericana.com` apontando para `ErickCGabriel.github.io`
2. No GitHub: **Settings → Pages → Custom domain**, digite `grupouniversoamericana.com` e salve (o GitHub valida o DNS automaticamente — pode levar de alguns minutos a algumas horas).
3. Assim que o GitHub confirmar o domínio, marque **Enforce HTTPS** em Settings → Pages para o site ficar em `https://grupouniversoamericana.com`.

> As tags `canonical` e `og:*` nas páginas e o `sitemap.xml` já estão escritos com esse domínio. Se algum dia trocar o domínio, atualize também esses arquivos, além do `CNAME`.

## Trocar o logo

O logo oficial já está em `assets/logo.png` (versão completa, fundo transparente) e `assets/logo-icon.png` (só o globo, usado no cabeçalho e rodapé). Se o cliente enviar uma versão em vetor (SVG) no futuro, é só substituir esses dois arquivos mantendo os mesmos nomes.

## WhatsApp

Todos os botões de WhatsApp apontam para `(19) 3500-7016` com mensagens pré-preenchidas diferentes por contexto (pedido geral, categoria específica, etc). Para trocar o número, busque por `551935007016` em todos os arquivos `.html`.
