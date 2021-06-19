import styled from 'styled-components'

interface WealthViewerProps {
    symbols?: string[]
  }

/*hay que tener en cuenta que si se le pone numeros muy grandes
 tiene que tirar para abajo porque se rompe todo el main caso contrario*/ 
 const MainContainer = styled.div`
 
 text-align:center;
 width: 227px;
 display: flex;
 flex-direction: column;
 margin:20px 15px;
 `
 const MainTitle = styled.p `
 padding-bottom:5px;
 
 `
 const PesosContainer = styled.div `
 text-align: center;
 background-color: ${p => p.theme.divDarkerBackground};

 border-radius: 3%;
 
 `
 const MoneyTitle = styled.h3`
 background-image: linear-gradient(to right, #1269B4, #3BBC76);
 color: transparent;
 background-clip: text;
 -webkit-background-clip: text;
 padding: 0.5em 0em 0em;
;
 `
 const Budget = styled.p `
 padding: 0.5em 1em 1em;
 `
 const DollarBitCont = styled.div`
 display:flex;
 flex-direction: row;
 justify-content: center;
 margin:6px;
 
 `
const DollarBit = styled.div`
text-align: center;
width:100%;
margin:6px;
background-color: ${p => p.theme.divDarkerBackground};
border-radius: 5%;
`



  const WealthViewer: React.FC<WealthViewerProps> = ({symbols}) => {
    return (
      //tu codigo
      <>
      <MainContainer>
          <MainTitle>Tu saldo</MainTitle>
          <PesosContainer><MoneyTitle>
              Pesos*
              </MoneyTitle>
              <Budget>$000000</Budget>
              
              </PesosContainer>

          <DollarBitCont>
                    <DollarBit><MoneyTitle>Dolares</MoneyTitle>
                    <Budget>$000000</Budget>
                    </DollarBit>
                    <DollarBit>
                    <MoneyTitle>BTC</MoneyTitle>
                    <Budget>0.000000</Budget>
                    </DollarBit>
          </DollarBitCont>
     </MainContainer>
      
      
      </>
    )
  }
 



export default WealthViewer;
