import { labelService } from "@/apis/Label/label.service";
import { HomeScreenSection } from "@/components/HomeScreenSection";
import { UpdateButton } from "@/components/UpdateButton";
import { Typography } from "@mui/material";
import Image from "next/image";

async function getLabel() {
  const label = await labelService.getLabel();

  return label;
}

export default async function Home() {
  const label = await getLabel();

  console.log(label, "label");

  return (
    <>
      <Typography variant="h1" className="text-center">
        {label}
      </Typography>
      <HomeScreenSection />;
    </>
  );
}
