import React, { ReactNode } from "react";
import "./assets/css/grid.css";

const Grid = (props: {children: ReactNode | ReactNode[] }) => {
    const { children } = props;
    return <div className="grid-container">
        {children}
    </div>
}

export const GridCol = (props: {children: ReactNode}) => {
    const {children} = props;
    return <div className="grid-col">{children}</div>
}

export const GridRow = (props: { children: ReactNode }) => {
    const { children } = props;

    return <div className="grid-row">{children}</div>
}



export default Grid;