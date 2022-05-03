import { FormEvent, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { encode, decode } from "coded-message-system-message-processor";
import {
  BiSpreadsheet,
  BiChip,
  BiCheckbox,
  BiCheckboxChecked,
} from "react-icons/bi";
import {
  BsExclamationOctagonFill,
  BsCheckCircleFill,
  BsXCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";
import {
  SegmentedControl,
  Button,
  TextInput,
  Grid,
  Alert,
  List,
} from "@mantine/core";

function App() {
  const [state, setState] = useState({
    output: "",
    mode: "encode",
    input: "",
    loading: false,
    error: false,
  });

  return (
    <div className="App">
      <Grid
        align="center"
        style={{
          height: "100vh",
        }}
      >
        <Grid.Col sm={12} md={4}>
          <h2>About</h2>
          <Button
            leftIcon={<BiSpreadsheet size={20} />}
            component="a"
            href="https://docs.google.com/spreadsheets/d/1nESnH_LELv8ldGTS59UCsPg1s0VzizhS1zXDNyxUddc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
          >
            Codon Chart
          </Button>
          <br />
          <h3>Versions</h3>
          RNA Engine: v2.1
          <br />
          Interface: v2
          <br />
          <h3>To-Do List:</h3>
          {/* icon={<BiCheckboxChecked size={24} />} */}
          <List spacing="xs" size="sm" center icon={<BiCheckbox size={24} />}>
            <List.Item icon={<BiCheckboxChecked size={24} />}>
              Integrate Octagon Function
            </List.Item>
            <List.Item icon={<BiCheckboxChecked size={24} />}>
              Integrate RNA Engine
            </List.Item>
            <List.Item icon={<BiCheckboxChecked size={24} />}>
              Responsive Error Messages
            </List.Item>
          </List>
          <hr
            style={{
              marginTop: "25px",
            }}
          />
        </Grid.Col>
        <Grid.Col sm={12} md={4}>
          <form
            onSubmit={async (event: FormEvent<HTMLFormElement>) => {
              event.preventDefault();

              setState((previous) => ({
                ...previous,
                loading: true,
              }));

              if (state.mode === "encode") {
                encode(state.input)
                  .then((encoded) => {
                    setState((previous) => ({
                      ...previous,
                      output: encoded,
                      loading: false,
                      error: false,
                    }));
                  })
                  .catch((err) => {
                    setState((previous) => ({
                      ...previous,
                      output: err,
                      error: true,
                      loading: false,
                    }));
                  });
              } else if (state.mode === "decode") {
                decode(state.input)
                  .then((decoded) => {
                    setState((previous) => ({
                      ...previous,
                      output: decoded,
                      loading: false,
                      error: false,
                    }));
                  })
                  .catch((err) => {
                    setState((previous) => ({
                      ...previous,
                      output: err,
                      error: true,
                      loading: false,
                    }));
                  });
              }
            }}
          >
            <Grid align="center" columns={2} gutter="xl">
              <Grid.Col span={2}>
                <SegmentedControl
                  data={[
                    { label: "Encode", value: "encode" },
                    { label: "Decode", value: "decode" },
                  ]}
                  onChange={(value) => {
                    setState((previous) => ({
                      ...previous,
                      mode: value,
                    }));
                  }}
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <TextInput
                  required
                  placeholder={
                    state.mode === "encode" ? "Text" : "RNA Sequence"
                  }
                  onChange={(event) => {
                    setState((previous) => ({
                      ...previous,
                      input: event.target.value,
                    }));
                  }}
                  value={state.input}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <Button
                  variant="gradient"
                  gradient={{ from: "orange", to: "red" }}
                  leftIcon={<BsExclamationOctagonFill size={15} />}
                  onClick={() => {
                    setState((previous) => ({
                      ...previous,
                      input: previous.input.concat("🛑"),
                    }));
                  }}
                >
                  Octagon
                </Button>
              </Grid.Col>
              <Grid.Col span={1}>
                <Button
                  variant="gradient"
                  gradient={{ from: "grape", to: "pink", deg: 35 }}
                  leftIcon={<BsFillTrashFill size={15} />}
                  onClick={() => {
                    setState((previous) => ({
                      ...previous,
                      input: "",
                      output: "",
                    }));
                  }}
                >
                  Clear
                </Button>
              </Grid.Col>
              <Grid.Col span={2}>
                <Button
                  variant="gradient"
                  gradient={{ from: "teal", to: "blue", deg: 60 }}
                  type="submit"
                  leftIcon={<BiChip size={20} />}
                >
                  Submit
                </Button>
                {state.output && (
                  <Alert
                    icon={
                      state.error ? (
                        <BsXCircleFill size={20} />
                      ) : (
                        <BsCheckCircleFill size={20} />
                      )
                    }
                    title={state.error ? "Oops!" : "Complete!"}
                    variant="filled"
                    style={{
                      textAlign: "left",
                      margin: "5ch",
                    }}
                    color={state.error ? "red" : "blue"}
                    children={state.output}
                  />
                )}
              </Grid.Col>
            </Grid>
          </form>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default App;
