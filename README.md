# Logo do React com React-native-Skia e Gesture-handler 🎨
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
## Descrição
Neste projeto, foi realizado a criação de um desenho semelhante ao logo do React, utilizando a biblioteca React-native-skia. Foi realizado também a animação de efeito de brilho com o React-native-reanimated. Como também a manipulação do desenho pelos gestos do usuários, utilizando o react-native-gesture-handler.

## Como criar nosso Logo do React

1. Com a Versão do node v20.17.0 instalada vamos instalar as bibliotecas essenciais para o projeto:
   - `npm install @shopify/react-native-skia@1.11.2`
   - `npm install react-native-reanimated`
   - - `react-native-gesture-handler`

2. Adicione o plugin do Reanimated no Babel.config.js
   ```jsx
     module.exports = {
      presets: ['module:@react-native/babel-preset'],
      plugins: [
        'react-native-reanimated/plugin',
      ],
     };
    ```
3. Crie um diretório chamado 'src' e dentro dele o seu diretório do átomo.
    ```bash
    seu-projeto/
    ├─ src/
    │  ├─ reactLogo/
    │  │  └─ index.tsx
    ├─ index.js
    ├─ package.json
   ```

4. Importe todas as funções/componentes necessários:
    ```jsx
    import React, { useEffect } from 'react';
    import { View, StyleSheet, Dimensions } from 'react-native';
    import { Canvas, Circle, Oval, Group } from '@shopify/react-native-skia';
    import { GestureDetector, Gesture } from 'react-native-gesture-handler';
    import { View, StyleSheet, Dimensions } from 'react-native';
    import {
      useSharedValue,
      useDerivedValue,
      withRepeat,
      withTiming,
      Easing,
    } from 'react-native-reanimated';
    ```

  ## Para mais detalhes acesse meu vídeo tutorial em:
   [Tutorial em vídeo Parte 01](https://www.youtube.com/watch?v=s_TPoIVXt-g) 
 
   [Tutorial em vídeo Parte 02](https://www.youtube.com/watch?v=KiIwfFdw2ag) 

   [Tutorial em vídeo Parte 03](https://www.youtube.com/watch?v=QDDOcrbbu60) 
  
## Prévia
<p align="center">
  <img src="vidgif01.gif" width="250" />
  <img src="vidgif02.gif" width="250" />
  <img src="vidgif03.gif" width="250" />
</p>

# Instalação
## Passo 1
Clone o projeto
```bash
git clone https://github.com/paulogermanopg/RN_React_Logo.git
```
## Passo 2
Instale os pacotes necessários
```bash
#use node =>18

#usando o npm
npm install

#usando o yarn (recomendado)
yarn install
```

# Licença do MIT
Copyright (c) 2025 Paulo Germano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
