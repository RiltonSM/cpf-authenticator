# cpf-authenticator
> Pacote desenvolvido em JavaScript que realiza validação do CPF.

## Instalação

```sh
npm install
```

## Usando

Após instalar o pacote, realize a importação dele no arquivo em que desejar utilizar a validação do cpf. Veja formas de fazer isso:

```javascript
import cpf from 'cpf-authenticator';
const isValid = cpf.cpfAuthenticator('números_do_cpf_como_string');
```

Ou

```javascript
import { cpfAuthenticator } from 'cpf-authenticator';
const isValid = cpfAuthenticator('números_do_cpf_como_string');
```

O retorno da função será true (CPF válido) ou false (CPF inválido).

Deve ser passado uma string como parâmetro da função cpfAuthenticator. Essa string pode ser formada apenas pelos números do CPF ou pelos números na máscara (000.000.000-00);

## Configuração para Desenvolvimento

Para fazer a instalação das dependências, baixe os arquivos que compõe o projeto. Será necessário ter o NodeJS instalado na sua máquina. No terminal, acesse a pasta em que os arquivos estão e digite o seguinte código:

```sh
npm install
```

Será feito a instalação de todas as dependências do projeto

## Histórico de lançamentos

* 0.0.1
    * Versão da Next Level Week com adição de campos de seleção das UFs e cidades no aplicativo mobile.

## Meta

Rilton Moreira – rilton_moreira@hotmail.com


## Contribuindo

1. Faça o _fork_ do projeto (<https://github.com/RiltonSM/cpf-authenticator/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_
