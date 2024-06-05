import TextField from "@mui/material/TextField";

export const BaseTextField = ({
  label,
  value,
  onChange,
  type,
  ...props
}: {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
}) => {
  return (
    <TextField
      {...props}
      label={label}
      variant="outlined"
      value={value}
      type={type}
      onChange={onChange ? (event) => onChange(event.target.value) : undefined}
    />
  );
};
