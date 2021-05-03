import Input from "./component/Input";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Input />
      <Input error />
      <Input disabled />
      <Input helperText="Some interesting text" />
      <Input helperText="Some interesting text" error />
      <Input startIcon />
      <Input endIcon />
      <Input value="text" />
      <Input size="sm" />
      <Input size="md" />
      <Input fullWidth />
      <Input multiline row="4" />
    </div>
  );
}
