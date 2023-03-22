import './App.css'

import { AiFillHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { AiOutlineTable } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { AiOutlineDollar } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMoon } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

import Frame from "./img/Frame.png";
import user from "./img/user.png";


function App() {
  return (

<main>

{/* Código do menu lateral (logo, separador e menu). */}

  <div className = 'mainSidebar'>
     <img className='logo' src={Frame} alt={'logo'} />
     <div className='separador'> </div>
          <div className='pages'> 
          <div className='menu'> <AiFillHome/> <p>Dashboard</p> </div>
          <div className='menu'> <AiOutlineShoppingCart/> <p>Vendas</p> </div>
          <div className='menu'> <AiFillSignal/> <p>Relatórios</p> </div>          
          <div className='menu'> <AiOutlineTable/> <p>Lojas Parceiras</p> </div>
          <div className='menu'> <HiUser/> <p>Clientes</p> </div>
          </div>      
  </div>

{/* Código para descrever a página principal (Dashboar).
A classe mainDashboard é a que leva o overflow para o scroll da página */}

  <div className='mainDashboard'>
     
     <div className='topo'>
     <div>
     <h2>Principal/Dashboard</h2>
     <h1>Velty Dashboard</h1>  
     </div>

    <div className='search'>
    <form>
        <label> <BiSearchAlt size={20}/>
        <input type="text" name="search" placeholder='   Busca' />
        </label>
    </form>
    <IoMdNotificationsOutline size={20} />
    <BiMoon size={20}/>
    <AiOutlineInfoCircle size={20}/>
    <img src={user} alt={'logo'} />
    </div>
     </div>

  {/* O nome da classe 'frame19' foi escolhida de acordo com a nomenclatura
  na plataforma figma. 
  O frame19 corresponde ao campo de bussca por datas. */}

    <div className='frame f19'>
      <div className='data'>
    <form>
        <label> Filtrar por data:
        <input type="data" name="search" placeholder='   Data inicial' />
        <input type="data" name="search" placeholder='   Data final' />
        </label>
    </form>
      </div>
    </div>

{/* O frame18 corresponde ao conjunto de board colorido com os 
valores de lucro da empresa */}

     <div className='frame f18'>
       <div className='card18 card18-1'>
       
       < AiOutlineDollar className='icone' color='white' size={56}/>
       <p className='txt18-1'>R$ 312.321,00</p>
       <p className='txt18-2'>Receita total</p>
       <div className='separador18'></div>
       <p className='txt18-3'>R$ 67,20</p>
       <p className='txt18-4'>Média por cliente</p>
       </div>

       <div className='card18 card18-2'>
       < AiOutlineDollar className='icone' color='white' size={56}/>
       <p className='txt18-1'>R$ 74.421,00</p>
       <p className='txt18-2'>Lucro total</p>
       <div className='separador18'></div>
       <p className='txt18-3'>R$ 42,30</p>
       <p className='txt18-4'>Média por cliente</p>
       </div>

       <div className='card18 card18-3'>
       < AiOutlineDollar className='icone' color='white' size={56}/>
       <p className='txt18-1'>R$ 3,12</p>
       <p className='txt18-2'>Lucro por venda</p>
       <div className='separador18'></div>
       <p className='txt18-3'>R$ 12,40</p>
       <p className='txt18-4'>Média por cliente</p>
       </div>
     </div>

{/* O frame17 corresponde ao conjunto de 6 cards com informação de clientes */}

     <div className='frame f17'>
       <div className='card17'>
         <p className='txt17-1'>Clientes ativos</p>
         <p className='txt17-2'>3.312</p>
         <p className='txt17-3'>+2,6% (+12)</p>
       </div>

       <div className='card17'>
         <p className='txt17-1'>Novos clientes</p>
         <p className='txt17-2'>12</p>
         <p className='txt17-3'>+15,3% (+2)</p>
       </div>

       <div className='card17'>
         <p className='txt17-1'>Clientes adicionados</p>
         <p className='txt17-2'>42</p>
         <p className='txt17-3'>+42,6% (+8)</p>
       </div>

       <div className='card17'>
         <p className='txt17-1'>LTV</p>
         <p className='txt17-2'>R$ 142,32</p>
         <p className='txt17-3'>-22,6% (+R$ 12,20)</p>
       </div>

       <div className='card17'>
         <p className='txt17-1'>Turnover</p>
         <p className='txt17-2'>24%</p>
         <p className='txt17-3'>+42,6% (+3)</p>
       </div>

       <div className='card17'>
         <p className='txt17-1'>Turnover recuperado</p>
         <p className='txt17-2'>54,42%</p>
         <p className='txt17-3'>+32,6% (+6)</p>
       </div>
     </div>

{/* O frame11 corresponde ao conjunto de 4 cards com informação de cotação */}

     <div className='frame f11'>
       <div className='card11'>

       < AiOutlineDollar className='icone' color='#4318FF' size={56}/>
        <p className='txt11-1'>312.321</p>
        <p className='txt17-1'>Cotações realizadas</p>
        <p className='txt17-3'>+15,3% (+223)</p>
       </div>

       <div className='card11'>
        < AiOutlineDollar className='icone' color='#4318FF' size={56}/>
        <p className='txt11-1'>212.012</p>
        <p className='txt17-1'>Vendas finalizadas</p>
        <p className='txt17-3'>+15,3% (+223)</p>
       </div>

       <div className='card11'>
        < AiOutlineDollar className='icone' color='#4318FF' size={56}/>
        <p className='txt11-1'>42.021</p>
        <p className='txt17-1'>Cotações não concluídas</p>
        <p className='txt17-3'>+15,3% (+223)</p>
       </div>

       <div className='card11'>
        < AiOutlineDollar className='icone' color='#4318FF' size={56}/>
        <p className='txt11-1'>3.122</p>
        <p className='txt17-1'>Cotações não respondidas</p>
        <p className='txt17-3'>+15,3% (+223)</p>
       </div>
     </div>

{/* O frame15 corresponde ao conjunto de 3 cards com tabelas de informes de planos */}

     <div className='frame f15'>

       <div className='card15'>
         <p className='txt17-2'>Planos</p>
         <p className='txt17-1'>123 planos ativos</p>
       <div className="table">
      <table>
        <tr>
          <th>CLUBE</th>
          <th>CLIENTES</th>
          <th>PREÇO</th>
        </tr>
        <tr>
          <td>Estagiários</td>
          <td>312 clientes</td>
          <td>R$ 123,90</td>
        </tr>
        <tr>
          <td>Diretoria</td>
          <td>312 clientes</td>
          <td>R$ 123,90</td>
        </tr>
        <tr>
          <td>Geral</td>
          <td>312 clientes</td>
          <td>R$ 123,90</td>
        </tr>
        <tr>
          <td>Almoxarifado</td>
          <td>312 clientes</td>
          <td>R$ 123,90</td>
        </tr>
      </table>
    </div>
       </div>


       <div className='card15'>
       <p className='txt17-2'>Categorias</p>
         <p className='txt17-1'>4 categorias em uso</p>
       <div className="table">
      <table>
        <tr>
          <th>CLUBE</th>
          <th>CLIENTES</th>
          <th>PREÇO MÉDIO</th>
        </tr>
        <tr>
          <td>6 vendas</td>
          <td>312 clientes</td>
          <td>R$ 123,90</td>
        </tr>
        <tr>
          <td>12 vendas</td>
          <td>312 clientes</td>
          <td>R$ 123,90</td>
        </tr>
        <tr>
          <td>24 vendas</td>
          <td>312 clientes</td>
          <td>R$ 123,90</td>
        </tr>
        <tr>
          <td>Personalizado</td>
          <td>312 clientes</td>
          <td>R$ 123,90</td>
        </tr>
      </table>
    </div>
       </div>


       <div className='card15'>
       <p className='txt17-2'>Tipos de planos</p>
         <p className='txt17-1'>2 tipos em uso</p>
       <div className="table">
      <table>
        <tr>
          <th>CLUBE</th>
          <th>CLIENTES</th>
          <th>PREÇO MÉDIO</th>
        </tr>
        <tr>
          <td>Construtoras</td>
          <td>312 clientes</td>
          <td>R$ 123,90</td>
        </tr>
        <tr>
          <td>Clientes finais</td>
          <td>312 clientes</td>
          <td>R$ 123,90</td>
        </tr>
      </table>
    </div>
       </div>
     </div>

  </div>

</main>

  );
 }
 
 export default App;