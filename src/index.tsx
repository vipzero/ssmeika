import * as React from "react";
import { render } from "react-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import useLocalStorage from "react-use/lib/useLocalStorage";

import "./styles.css";

const initFaces = ["(´・ω・｀)", "(^o^)", "(・∀・)", "まどか", "ほむら"];

function App() {
  const [text, setText] = useLocalStorage("text", "テキストをここに");
  const [faces, setFaces] = useLocalStorage("faces", initFaces);
  return (
    <div>
      <Typography variant="h4" component="h1">
        ssメイカだお
      </Typography>
      <Typography>名前リスト</Typography>
      <TextField
        variant="standard"
        value={faces.join(",")}
        helperText="カンマ区切り"
        onChange={e => {
          setFaces(e.target.value.split(","));
        }}
      />
      <br />
      {faces.map(face => (
        <Button
          variant="outlined"
          onClick={() => setText(text + `\n\n${face}「」`)}
        >
          {face}
        </Button>
      ))}
      <br />
      <Typography>テキスト</Typography>
      <textarea
        onChange={e => {
          setText(e.target.value);
        }}
        style={{ width: "100%", height: "90vh" }}
        value={text}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
