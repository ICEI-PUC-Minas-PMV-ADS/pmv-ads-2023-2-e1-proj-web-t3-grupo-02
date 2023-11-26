# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-1: Avaliar o funcionamento dos links da página HOME.</td>
  <td>
   <ul>
    <li>RF-01 > A tela inicial do site deve apresentar as funções separadamente: fazer pedido, cardápio, as redes sociais e telefone para contato.</li>
   </ul>
  </td>
  <td>Confirmar a correta funcionalidade dos links na HOME, assegurando que redirecionem adequadamente para suas respectivas páginas.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Executar cliques nos links indicados na HOME para verificar a precisão e eficácia dos redireccionamentos.</li>
   </ol>
   </td>
  <td>Todos os links da página HOME deve encaminhar para as suas respectivas páginas.</td>
  <td>Luiz Hovadich e João Gabriel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-2: Verificar a seleção dos ingredientes na tela de montagem do Hambúrguer.</td>
  <td>
   <ul>
    <li>RF-02 > Em “fazer pedido” o sistema deve apresentar todos os ingredientes.

RF-03 > O site deve permitir que o cliente selecione os ingredientes para fazer a montagem de seu hambúrguer.

RF-04 > O sistema deve ter a opção de colocar acréscimos no hambúrguer.

RF-05 > O sistema deve ter um menu para pedidos de bebidas.
</li>
   </ul>
  </td>
  <td>Validar a seleção de ingredientes ao clicar nas caixas, garantindo que os itens sejam escolhidos de maneira precisa e correta.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Faça seu pedido”</li>
    <li>Selecionar os devidos ingredientes</li>
    <li>Finalizar pedido </li>
   </ol>
   </td>
  <td>Os dados inseridos no filtro de pesquisa devem mostrar o livro onde há o dado informado.</td>
  <td>Guilherme Patrick</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-3: Verificar o resumo do pedido</td>
  <td>
   <ul>
    <li>RF-07 > O sistema deve ter o link no qual irá enviar o pedido diretamente para o WhatsApp da loja.</li>
   </ul>
  </td>
  <td>Verificar se as informações descritas no resumo correspondem corretamente aos ingredientes selecionados.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Faça seu pedido”</li>
    <li>Preencher os campos</li>
    <li>Finalizar pedido </li>
    <li>Visualizar o resumo</li>
   </ol>
   </td>
  <td>O resumo deve corresponder com as informações selecionadas no pedido.</td>
  <td>Guilherme Patrick</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-4: Verificar o cadastro de usuários.</td>
  <td>
   <ul>
    <li>RF-06 > Ao finalizar o pedido, o sistema deve solicitar que o cliente coloque o nome de quem está fazendo o pedido e coloque o endereço de entrega.</li>
   </ul>
  </td>
  <td>Verificar se é possível preencher e cadastrar o usuário para efetivar o pedido.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em faça seu pedido</li>
    <li>Ir em Endereço para entrega</li>
    <li>Enviar pedido</li>
   </ol>
   </td>
  <td>Deve ser possível preencher todos os campos e finalizar pedido, caso não tenha preenchido retornar para preencher o campo.</td>
  <td>Caio Lelis e Douglas Rodrigues</td>
 </tr>
</table>
<tr>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-5: Verificar a tela de contato</td>
  <td>
   <ul>
    <li>RF-08 > Ao finalizar o pedido, o sistema deve solicitar que o cliente coloque o nome de quem está fazendo o pedido e coloque o endereço de entrega.</li>
   </ul>
  </td>
  <td>Verificar se constam as informações sobre a hamburgueria.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em contato.</li>
    <li>Visualizar as informações sobre a hamburgueria.</li>
   </ol>
   </td>
  <td>Ao acessar a tela de contato, é necessário que seja possível visualizar informações cruciais, como telefone, endereço, horário de funcionamento e demais detalhes relevantes sobre a hamburgueria.</td>
  <td>Guilherme Patrick</td>
 </tr>
</table>
<tr>

