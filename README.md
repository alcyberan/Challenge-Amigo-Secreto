# **Amigo Secreto**
Essa aplicação permite aos usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".

## **Funcionalidades**

- **Adicionar amigo**: Permite adicionar um nome de um amigo a uma lista visivel abaixo do campo de entrada.

- **Validação de entrada**: Se o campo de texto estiver vazio ou o nome já existir na lista, o programa exibirá um alerta solicitando um nome válido ou avisando que o nome já existe.

- **Sorteio**: Ao clicar no botão "Sortear Amigo", um nome da lista é selecionado aleatoriamente e uma mensagem com o vencedor é exibida na página.

- **Limpar lista**: Ao clicar no botão "Limpar" a lista de amigos e a área de exibição do resultado do sorteio são limpos.

## **Dependências**
Essa projeto não possui dependências externas, portanto não há necessidade de instalar pacotes adicionais. Para rodar o projeto, siga o passo a passo:

## **Instalação local**
- **Clonar ou baixar o repositório**: Caso tenha o Git instalado, pode cloncar o repositório com o comando: `git clone <URL do repositório>`

- **Executar localmente**: Navegue ao diretório onde o projeto foi baixado e abra o arquivo `index.html` em um navegador.

## **Acesso ao projeto pelo GitHub Pages**
A aplicação também pode ser acessada diretamente pelo GitHub Pages. O projeto está hospedado e funcionando em: [Projeto Amigo Secreto]()

## **Como usar**

- ### **Adicione um amigo**:
    - Digite o nome de um amigo na caixa de entrada.
    - Clique no botão para adicionar o nome à lista.
    - Os nomes serão exibidos em uma lista abaixo da caixa de entrada.

- ### **Sortear um amigo**:
    - Após adicionar pelo menos um amigo, clique no botão para realizar o sorteiro.
    - Uma mensagem com o amigo sorteado será exibido abaixado da lista de nomes.

- ### **Limpar a lista**:
    - Clique no botão para limpar a lista de amigos e o resultado do sorteio.

## **Observações**
- O nome inserido é convertido para maiúsculo e espaços extras são removidos antes de ser adicionado à lista.
- Caso o nome já esteja presente na lista, o sistema alertará que o nome é duplicado.
- Se o campo de entrada estiver vazio, um alerta será exibido solicitando um nome válido.