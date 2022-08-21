<h1 align="center">React-Electron-Template</h1>
<p align="center">
<image align="center" width="299px" height="290px" src="./public/LogoTemplate.png">
</p>
<p align="center"> Rafael Ochôa Mello - rafaelochoamello@gmail.com </p>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#objetivo">Objetivo</a> 
 <a href="#branch">Branchs</a> 
 <a href="#comandos">Comandos</a> 
</p>

<p id="sobre">
  <h2> :memo: Sobre </h2>
  <p>Este repositório nasce com o objetivo de realizar uma aglutinação entre <strong> React, Typescript</strong> e também o <strong>Electron</strong>, 
    de forma a simplificar a necessidade de configurar os respectivos ambientes para que funcionem em harmonia.
  </p>
  <p>
     Também se baseia no princípio de 'Atomic Design' naquilo que se refere a organização do projeto e seus componentes.
  </p>
   <p>
      Para evitar a estilização massiva dos componentes a partir de objetos estilizados no próprio, fora adaptado 
      aqui o conceito do css modularizado, digo adaptado, pois, mesmo que o React o aceite naturalmente, o Typescript 
      não o faz. Fora necessário um arquivo de configuração para que os arquivos css modularizados fossem aceitos. </br>      
  </p>
   <p>Caso exista curiosidade em realizar uma análise do arquivo em si: <em>src -> Globals.d.ts</em></p>
</p>

<p id="objetivo">
 <h2> :bow_and_arrow: Objetivo </h2>
  <p>
    Entre os objetivos deste repositório, há como principal o acesso rápido a um projeto em ambiente React + TS + Electron já
    configurado com o que considero o essencial. 
  </p>
  <p>
    Outras configurações ficam livres a serem ajustadas pelo desenvolvedor, toda e qualquer implementação adicional que 
    eu considere 'não essencial', estará localizada em sua respectiva branch.
  </p>
</p>


<p id="branch">
 <h2> :tent: Branchs </h2>
  <ul>
    <li><strong>main</strong> - Contém o essencial para utilização. Note que é necessário rodar o React e o Electron em terminais separados.</li>
    <li><strong>Foreman</strong> - Contém a implementação de um gerenciador de run utilizando o Foreman, de forma a ter apenas um comando para inicializar React e electron.</li>
    <li><strong>Forge</strong> - Contém a implementação de um forge do Electron, para buildar o mesmo em um simples programa executável.</li>
  </ul>
</p>

<p id="comandos">
 <h2> :computer: Comandos </h2>
  <!-- Aqui deve vir uma lista de comandos, tais como : Rodar o React, rodar o electron, rodar o Foreman (na sua branch) e rodar o Forge (na sua branch) -->
  <ul>
    <li><strong>main</strong> - Rodar o React :: npm start  | Rodar o electron :: npm run electron  .</li>
    <li><strong>Foreman</strong> - Ainda não há comandos definidos</li>
    <li><strong>Forge</strong> - Ainda não há comandos definidos.</li>
  </ul>
</p>