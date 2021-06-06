import './App.css';
import CakeContainer from './CakeContainer';
import store from './redux/store';
import { Provider } from 'react-redux'
import HooksCakeContainer from './HooksCakeContainer';
import HooksIceCream from './HooksIceCream';
import HooksPurchaseDiamond from './HooksPurcaseDiamond';
import EaringContainer from './redux/buyEarings/EaringContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksIceCream />
        <HooksCakeContainer />
        <HooksPurchaseDiamond />
        <EaringContainer />
      </div>
    </Provider>
  );
}

export default App;
