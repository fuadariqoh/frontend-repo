"use client";

import { UpdateButton } from "./UpdateButton";
import { BaseTextField } from "./Input";
import { labelService } from "@/apis/Label/label.service";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { useRef } from "react";
import {
  initialize,
  setLabelValue,
  setLoading,
} from "@/stores/features/label/labelSlice";

export const HomeScreenSection = () => {
  const store = useAppStore();

  const initialized = useRef(false);

  if (!initialized.current) {
    store.dispatch(initialize());
    initialized.current = true;
  }

  const labelValue = useAppSelector((state) => state.value);
  const loadingValue = useAppSelector((state) => state.loading);

  const dispatch = useAppDispatch();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        dispatch(setLoading(true));

        let label = document.getElementById(
          "label-textfield"
        ) as HTMLInputElement;

        await labelService.updateLabel(label.value);

        dispatch(setLabelValue(label.value));

        dispatch(setLoading(false));

        // refresh the page
        window.location.reload();
      }}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <BaseTextField id="label-textfield" label="Label" />
      <UpdateButton
        disabled={loadingValue}
        type="submit"
        key={"asd"}
        label="Update"
      />
    </form>
  );
};
