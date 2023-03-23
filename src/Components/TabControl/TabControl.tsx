import React, { ReactNode, useState } from "react";
import './assets/css/tabControl.css';

const TabControl = (props: { tabs: {text: string, content: ReactNode}[] }) => {
    const [selectedTabIdxState, setSelectedTab] = useState(0);
    const { tabs } = props;
    return <div className="tab-control">
        <ul>
            {tabs.map((t, idx) => <li><a 
            className={idx === selectedTabIdxState ? "active" : ""}
            onClick={() => setSelectedTab(idx)}>{t.text}</a></li>)}
        </ul>
        <TabContent>{tabs[selectedTabIdxState].content}</TabContent>
    </div>

}

export const TabContent = (props: {children: ReactNode}) => {
    const {children} = props;
    return <div className="tab-content">{children}</div>
}

export default TabControl;