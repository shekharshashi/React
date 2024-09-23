import React, { useState } from 'react';

interface SidebarData {
  label: string;
  children?: SidebarData[];
}

interface SidebarProps {
  node: SidebarData;
}

const Sidebar: React.FC<SidebarProps> = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const toggleNode = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className="tree-node" onClick={toggleNode}>
        {hasChildren && (
          <span className="caret">
            {isOpen ? 'v' : '>'} {/* Down caret if open, right caret if closed */}
          </span>
        )}
        <a href="#" className="node-label">{node.label}</a>
      </div>
      {hasChildren && isOpen && (
        <ul className="child-nodes">
          { /* @ts-ignore */ }
          {node.children.map((childNode, index) => (
            <Sidebar key={index} node={childNode} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
