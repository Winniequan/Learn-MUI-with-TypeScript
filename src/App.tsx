
import './App.css';
import AccordionGroup from './components/AccordionGroup';
import { MuiAccordion } from './components/MuiAccordion';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import MuiButton from './components/MuiButton';
import { MuiCard } from './components/MuiCard';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiImageList } from './components/MuiImageList';
import { MuiLayout } from './components/MuiLayout';
import { MuiNavbar } from './components/MuiNavbar';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import { MuiSelect } from './components/MuiSelect';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiTextField } from './components/MuiTextField';
import { MuiTypography } from './components/MuiTypography';
import {MuiLink} from "./components/MuiLink"

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
     <MuiCard/>
      <hr />
      <MuiAccordion/>
      <hr />
      <AccordionGroup/>
      <hr />
      <MuiImageList/>
      <hr />
      <MuiNavbar />
      <hr />
      <MuiLink/>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  );
}

export default App;
