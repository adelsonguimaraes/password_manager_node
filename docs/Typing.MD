## Configurações de tipagem
Nesse projeto estamos utilizando `typescript` para fortalecer a tipagem deixando o código seguro, para isso foi preciso adicionar alguns recursos no projeto.

* Typescript
    ```sh
    npm install typescript -D
    ```
* Node types
    ```sh
    npm install @types/node -D
    ```
* Inicializar a configuração do typescript
    ```sh
    npx tsc --init
    ```

    * Algumas configurações dentro do tsconfig.json para permitir o suporte ao typescript.
    ```json
    {
        "compilerOptions": {
            "target": "ES2022",
            "lib": [
            "ES2023"
            ], 
            "module": "node16", 
            "esModuleInterop": true, 
            "forceConsistentCasingInFileNames": true, 
            "strict": true, 
            "skipLibCheck": true
        }
    }
    ```

* Configuração do debug em package.json
    ```json
    "scripts": {
        "dev": "tsx watch server.ts"
    },
    ```

    * Voltar para o [Início](Documentation.MD)
* Ir para o próximo: [Models](Models.MD)