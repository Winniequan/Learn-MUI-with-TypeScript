
import './App.css';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import MuiButton from './components/MuiButton';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiLayout } from './components/MuiLayout';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import { MuiSelect } from './components/MuiSelect';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiTextField } from './components/MuiTextField';
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <hr />
      <MuiButton />
      <hr />
      <MuiTextField />
      <hr />
      <MuiSelect />
      <hr />
      <MuiRadioButton />
      <hr />
      <MuiCheckbox/>
      <hr />
      <MuiSwitch/>
      <hr />
      <MuiRating/>
      <hr />
      <MuiAutocomplete/>
      <hr />
      <MuiLayout/>


      
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  );
}

export default App;
