import React from "react";
import Menu from "./Menu";
import styled from "styled-components";
import { spacingMap } from "./spacingMap";

const justifyAlignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center"
};

const InlineCluster = styled.div`
  --gutter: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${(props) =>
    justifyAlignMap[props.justify] ?? justifyAlignMap.start};

  align-items: ${(props) =>
    justifyAlignMap[props.align] ?? justifyAlignMap.start};
`;

export default function MenuBar() {
  return (
    <Menu>
      <InlineCluster gutter="lg" justify="end" align="center">
        <span>Product</span>
        <span>Features</span>
        <span>Marketplace</span>
        <span>Company</span>
        <span>Log in</span>
      </InlineCluster>
    </Menu>
  );
}
