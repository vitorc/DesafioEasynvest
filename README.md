# Desafio Easynvest

Repositório com testes automatizados realizados em CodeceptJS

---

## Índice

- [Pre Requisitos](#pre-requisitos)
- [Instalacao](#instalacao)
- [Como Testar](#como-testar)
- [Suporte](#suporte)

---

## Pre Requisitos

- [Instalar Node.js 14+](https://nodejs.org/)

>Instalar Allure:
* [MacOS](https://docs.qameta.io/allure/#_mac_os_x): `brew install allure`
* [Windows](https://docs.qameta.io/allure/#_windows): `scoop install allure`
* [Linux](https://docs.qameta.io/allure/#_linux):
    - `sudo apt-add-repository ppa:qameta/allure`
    - `sudo apt-get update`
    - `sudo apt-get install allure`

## Instalacao

> Clonar o projeto

`https://github.com/vitorc/DesafioEasynvest.git`

>Acessar o diretório DesafioEasynvest:

`cd ../DesafioEasynvest`

> Instalar dependências:

`npm ci`

---

## Como Testar:

> Executar os testes:

`npm run test`

> Executar os testes com geração de relatório automaticamente:

* `npm run test:report`

> Gerar Relatório Manualmente:
* Criação: `npm run allure:generate`
* Execução: `npm run allure:open`
* Obs: Caso precise limpar os relatórios já gerados execute o comando atés dos comandos acima: `npm run allure:clean`

---

## Suporte

- Linkedin: <a href="https://www.linkedin.com/in/vitor-cardoso-" target="_blank">`Vitor Cardoso`</a>

- E-mail: `scardosovitor@gmail.com`

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © <a href="https://www.linkedin.com/in/vitor-cardoso-" target="_blank">Vitor Cardoso</a>.
