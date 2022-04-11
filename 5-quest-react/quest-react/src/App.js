import UpperCaseColoredText from './components/upperCaseColoredText/upperCaseColoredText'
import Button from './components/button/button';

function App() {
  return (
    <>
    <UpperCaseColoredText text='texto maiúsculo e colorido' textColor={'#1ebca7'} />
    <Button label='Baixar CV' />
    </>
  );
}

export default App;
