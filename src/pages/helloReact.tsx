import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

type Props = {
  parameter: string;
};

function ImportDocument(props: Props): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <p>{props.parameter}</p>
    </div>
  );
}

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <ImportDocument parameter="test111" />
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload.11
        </p>
      </div>
    </Layout>
  );
}
