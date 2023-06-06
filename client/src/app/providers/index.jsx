import React from "react";
import WithRouter from "./withRouter";
import WithLayout from "./withLayout";
import WithSession from "./withSession";

export function ConnectProwiders({ children }) {
  return (
    <WithSession>
      <WithRouter>
        <WithLayout children={children} />
      </WithRouter>
    </WithSession>
  );
}
