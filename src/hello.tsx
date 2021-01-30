import React, {FC, ReactNode} from 'react';

type Props = {};

function getChildren(node: React.ReactNode): ReactNode[] {
  if (typeof node === 'object') {
    return React.Children.toArray((node as any)?.props?.children);
  }
  return [];
}

function findAllChildren(element: React.ReactNode): React.ReactNode[] {
  const allChildren: React.ReactNode[] = [...React.Children.toArray(element)]
  for (let i = 0; i < allChildren.length; i += 1) {
    const child = allChildren[i];
    allChildren.push(...getChildren(child))
  }
  return allChildren;
}

export const Hello: FC<Props> = ({}) => {
  const element = <div>
    <h1>Hello React</h1>
    <h2>
      <button>Click</button>
    </h2>
  </div>;
  return <>{findAllChildren(element).map(it => <div style={{border: '1px solid red', margin: 10}}>{it}</div>)}</>
}
