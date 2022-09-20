import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Stack } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Feed from "./GeneralCompoments/Feed/Feed";
import Sidebar from "./GeneralCompoments/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Feed />
      </Stack>
    </div>
  );
}

export default App;
