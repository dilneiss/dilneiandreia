# 💕 Convite de Casamento Digital Interativo

Uma página web elegante e interativa para convite de casamento, desenvolvida com HTML, CSS e JavaScript.

## ✨ Características

### 🖼️ Galeria de Fotos
- Carrossel interativo com 18 fotos do casal
- Navegação por botões, indicadores, teclado (setas) e gestos de toque
- Design responsivo para todos os dispositivos
- Transições suaves entre as fotos

### 💌 Convite Personalizado
- Mensagem de convite calorosa em português
- Informação sobre código de vestimenta (roupa confortável)
- Design elegante com animações

### 📱 Confirmação de Presença (RSVP)
- Formulário simples para inserir o nome
- Integração direta com WhatsApp
- Mensagem pré-formatada automática
- Validação do nome (apenas letras e espaços)
- Confirmação visual após envio

### 🗺️ Localizações
- **Igreja**: Igreja Sagrada Família - Tubarão
- **Recepção**: NO BOSQUE Casa de Eventos
- Links diretos para Google Maps
- Ícones intuitivos para cada local

### 🎁 Lista de Presentes
- Modal informativo sobre presentes
- Mensagem carinhosa aos convidados

## 🚀 Como Usar

### 1. Personalização do WhatsApp
**IMPORTANTE**: Altere o número do WhatsApp no arquivo `script.js`:

```javascript
// Linha 104 em script.js
const whatsappNumber = '5548999999999'; // Substitua pelo número real
```

**Formato**: País + DDD + Número (sem espaços, hífens ou +)
- Exemplo: +55 48 99999-9999 → `5548999999999`

### 2. Personalização das Fotos
- Substitua as imagens na pasta `fotos/` pelas suas fotos
- Mantenha os nomes dos arquivos ou atualize as referências no HTML
- Recomendado: Fotos em formato JPG com boa resolução

### 3. Personalização do Texto
- **Nomes do casal**: Edite o título "Nosso Casamento" no `index.html` (linha 16)
- **Data limite**: Atualize "[DATA LIMITE]" no `index.html` (linha 115)
- **Mensagem**: Personalize as mensagens de convite conforme desejado

### 4. Abrir o Convite
Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

## 📁 Estrutura dos Arquivos

```
casamento2.0/
├── index.html          # Página principal
├── style.css           # Estilos e design
├── script.js           # Funcionalidades interativas
├── README.md           # Esta documentação
├── package.json        # Configuração do projeto
└── fotos/              # Pasta com 18 fotos do casal
    ├── IMG_9022-Editar.jpg
    ├── IMG_9028-Editar.jpg
    └── ...
```

## 🎨 Funcionalidades Técnicas

### Responsividade
- Design otimizado para desktop, tablet e mobile
- Breakpoints em 768px e 480px
- Gestos de toque para navegação na galeria

### Animações
- Fade in suave ao carregar
- Animação de heartbeat nos ícones de coração
- Bounce no indicador de scroll
- Transições suaves em botões e cards

### Acessibilidade
- Navegação por teclado
- Alt text em todas as imagens
- Foco visível em elementos interativos
- Cores com bom contraste

### Integração WhatsApp
A mensagem enviada terá o formato:
```
Olá! Eu gostaria de confirmar minha presença no casamento.

*Nome:* [Nome do Convidado]
*Status:* Confirmado ✅

Muito obrigado(a) pelo convite! Estou ansioso(a) para celebrar este momento especial com vocês! 💕

_Mensagem enviada através do convite digital_
```

## 🛠️ Personalização Avançada

### Cores do Tema
As cores principais estão definidas no `style.css`:
- Roxo: `#8b4f7f`
- Dourado: `#d4a574`
- Branco: `#fff`
- Cinza: `#f8f4f0`

### Auto-play da Galeria
Para ativar o auto-play, descomente a linha 22 no `script.js`:
```javascript
setInterval(nextPhoto, 5000); // Troca foto a cada 5 segundos
```

## 📱 Compatibilidade

- ✅ Chrome/Edge (Windows/Mac/Android)
- ✅ Safari (iOS/Mac)
- ✅ Firefox (Windows/Mac/Android)
- ✅ Dispositivos móveis e tablets
- ✅ Internet Explorer 11+ (limitado)

## 💡 Dicas de Uso

1. **Teste o WhatsApp**: Verifique se o número está correto antes de compartilhar
2. **Otimize as fotos**: Use imagens de até 1MB para carregamento mais rápido
3. **Backup**: Mantenha uma cópia de segurança dos arquivos originais
4. **Compartilhamento**: Pode ser hospedado gratuitamente no GitHub Pages, Netlify ou Vercel

## 🎉 Recursos Incluídos

- ✅ 18 fotos do casal em galeria interativa
- ✅ Mensagem de convite personalizada
- ✅ Confirmação por WhatsApp
- ✅ Links para igreja e recepção
- ✅ Informação sobre presentes
- ✅ Código de vestimenta
- ✅ Design responsivo
- ✅ Animações elegantes
- ✅ Navegação por toque/teclado

---

**Desenvolvido com ❤️ para tornar seu dia especial ainda mais memorável!**

Para suporte ou dúvidas sobre personalização, consulte os comentários no código ou entre em contato.