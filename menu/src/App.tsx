import React, { useEffect, useState } from 'react';
import TreeNode from './Sidebar';
import './App.css';
import Sidebar from './Sidebar';

interface TreeNodeData {
  label: string;
  children?: TreeNodeData[];
}

const App: React.FC = () => {
  const [treeData, setTreeData] = useState<TreeNodeData[]>([]);

  // Simulating an API call
  useEffect(() => {
    const fetchData = async () => {
      // Simulated API data
      const data: TreeNodeData[] = [
        {
          label: 'Parent 1',
          children: [
            { label: 'Child 1-1' },
            { label: 'Child 1-2', children: [{ label: 'Grandchild 1-2-1' }] },
          ],
        },
        {
          label: 'Parent 2',
          children: [
            { label: 'Child 2-1' },
            { label: 'Child 2-2' },
          ],
        },
      ];
      setTreeData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="menu-container">
      <h1>Collapsible Menu</h1>
      <ul className="tree-root">
        {treeData.map((node, index) => (
          <Sidebar key={index} node={node} />
        ))}
      </ul>
    </div>
  );
};

export default App;
