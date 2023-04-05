import { Form, Col, Label, Input, FormGroup, Button, Row, InputGroup, ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Form>
        
        <MyForm />
      </Form>
    </div >
  );
}

export default App;
