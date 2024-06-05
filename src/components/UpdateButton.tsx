"use client";

import Button from "@mui/material/Button";

export const UpdateButton = ({
  label,
  onClick,
  ...props
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick} {...props}>
      {label}
    </Button>
  );
};
