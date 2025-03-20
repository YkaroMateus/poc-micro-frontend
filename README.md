# Micro Frontend POC com Vite e Module Federation

Esta POC demonstra a implementação de uma arquitetura de micro frontend usando Vite e Module Federation. O projeto consiste em duas aplicações:

- **Host**: Aplicação principal que consome componentes remotos
- **Remote**: Aplicação que expõe componentes para serem consumidos

## Estrutura do Projeto

```
poc-micro-frontend/
├── host/                 # Aplicação host
│   ├── src/
│   │   ├── App.tsx      # Componente principal
│   │   ├── load-mfe.tsx # Utilitário para carregamento de componentes remotos
│   │   └── main.tsx     # Ponto de entrada
│   ├── package.json
│   └── vite.config.ts   # Configuração do Vite com Module Federation
│
└── remote/              # Aplicação remota
    ├── src/
    │   ├── components/
    │   │   └── Button/  # Componente remoto de exemplo
    │   └── main.tsx     # Ponto de entrada
    ├── package.json
    └── vite.config.ts   # Configuração do Vite com exposição de componentes
```

## Tecnologias Utilizadas

- React 18
- TypeScript
- Vite
- Module Federation (@originjs/vite-plugin-federation)

## Como Executar

### 1. Instalação das Dependências

Primeiro, instale as dependências em ambos os projetos:

```bash
# Instalar dependências do Remote
cd remote
yarn install

# Instalar dependências do Host
cd ../host
yarn install
```

### 2. Executando o Remote

```bash
cd remote
yarn build
yarn preview
```

O remote estará disponível em: `http://localhost:4173/remote`

### 3. Executando o Host

Em outro terminal:
```bash
cd host
yarn dev
```

O host estará disponível em: `http://localhost:4174`

## Como Funciona

1. **Aplicação Remote**:
   - Expõe um componente Button através do Module Federation
   - Configurado com base path `/remote`
   - Usa TypeScript para tipagem segura
   - O componente é exposto em `./Button`

2. **Aplicação Host**:
   - Importa o componente Button do remote
   - Usa lazy loading para carregamento eficiente
   - Implementa Suspense para melhor UX durante o carregamento
   - Configurado para consumir o remote de `http://localhost:4173/remote`

3. **Integração**:
   - O Module Federation permite compartilhar dependências (react, react-dom)
   - CORS está configurado para permitir a comunicação entre as aplicações
   - TypeScript garante tipagem segura entre as aplicações

## Pontos Importantes

1. **Ordem de Execução**:
   - O remote deve estar rodando antes do host
   - O remote precisa ser buildado e executado em preview
   - O host pode ser executado diretamente em modo de desenvolvimento

2. **URLs e Portas**:
   - Remote: http://localhost:4173/remote
   - Host: http://localhost:4174
   - O arquivo remoteEntry.js deve estar acessível em: http://localhost:4173/remote/assets/remoteEntry.js

3. **Desenvolvimento**:
   - Host: Use `yarn dev` para desenvolvimento
   - Remote: Use `yarn build` e `yarn preview`

## Solução de Problemas

Se encontrar problemas de conexão:

1. Verifique se o remote está rodando e acessível
2. Confirme se o arquivo remoteEntry.js está acessível
3. Verifique os logs do console do navegador
4. Certifique-se de que as portas 4173 e 4174 estão disponíveis
