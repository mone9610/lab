import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(4),
      },
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">サインイン</Button>
      <Button variant="contained">サインアップ</Button>
    </div>
  );
}

export default App;
