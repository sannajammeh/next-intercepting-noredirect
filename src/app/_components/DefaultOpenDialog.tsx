import React from "react";

interface Props {
  children: React.ReactNode;
}

const DefaultOpenDialog = ({ children }: Props) => {
  return (
    <dialog open>
      {children}

      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default DefaultOpenDialog;
