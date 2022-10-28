import React, { useState } from "react";
import "./App.css";
import { FormGroup, TextField, FormControl, Button } from "@material-ui/core";

function App() {
  const [data, setData] = useState(null);
  const [valorA, setValorA] = useState();
  const [valorB, setValorB] = useState();

  function handleValorAChange(event) {
    setValorA(event.target.value);
  }

  function handleValorBChange(event) {
    setValorB(event.target.value);
  }

  function multiplier() {
    console.log(valorA);
    fetch(`/api?ValorA=${valorA}&ValorB=${valorB}`)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }

  function insertValores() {
    return (
      <FormControl margin="normal">
        <FormGroup className="formGroup">
          <TextField
            placeholder="Valor A"
            variant="outlined"
            multiline
            rows={1}
            value={valorA}
            inputProps={{ maxLength: 100 }}
            onChange={(e) => handleValorAChange(e)}
          />
        </FormGroup>

        <FormGroup className="formGroup">
          <TextField
            placeholder="Valor B"
            variant="outlined"
            multiline
            rows={1}
            value={valorB}
            inputProps={{ maxLength: 100 }}
            onChange={(e) => handleValorBChange(e)}
          />
        </FormGroup>
      </FormControl>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {insertValores()}
        <Button className="button" onClick={() => multiplier()}>
          Multiplicar
        </Button>
        <p>{!data ? "..." : data}</p>
      </header>
    </div>
  );
}

export default App;
