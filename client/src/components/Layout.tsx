import React, { Fragment, ReactElement } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: Props): ReactElement {
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Helmet>
      <Fragment>{children}</Fragment>
    </Fragment>
  );
}
