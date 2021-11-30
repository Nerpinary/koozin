import { Route, Switch } from 'react-router';
import '../App.css';
import Header from './Header';
import Start from './Start';
import { Step1 } from './Step1';
import BottomPanel from './BottomPanel';
import Step2 from './Step2';
import Step3 from './Step3';
import Color from "./Color";
// import Basket from './Basket';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Start />
        </Route>
        <Route path='/step1'>
          <Step1 />
          <BottomPanel 
          back='/'
          next='/step2'
          colors={['']}
          />
        </Route>
        <Route path='/step2'>
          <Step2 />
        </Route>
        <Route path='/step3'>
          <Step3 />
          <BottomPanel 
          back='/step2'
          next='/basket'
          />
        </Route>
        {/*<Route path='/basket'>*/}
        {/*  <Basket />*/}
        {/*  <BottomPanel */}
        {/*  back='/step3'*/}
        {/*  next='/'*/}
        {/*  />*/}
        {/*</Route>*/}
      </Switch>
    </div>
  );
}

export default App;
