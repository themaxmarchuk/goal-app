import React from 'react';
import {Tooltip, Typography, Card} from '@mui/material';

// function HistoryNode ({ value }) {
//   return <div className='history__node' />
// }
//

const nodes = nodeCount => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let nodesArr = [];

  for (let i = 0; i < nodeCount; i++) {
    const level = getRandomInt(1, 4);
    nodesArr[i] = {
      id: i,
      level,
      stepsTaken: getRandomInt(1, 8) * (level - 1),
    };
  }

  return nodesArr;
};

function NodesDisplay({nodes}) {
  const spacing = 5;
  const size = 18;

  const NodeRects = nodes.map((node, i) => {
    const nodeY = (i % 7) * size + (i % 7) * spacing;
    const nodeX = Math.floor(i / 7) * size + Math.floor(i / 7) * spacing;

    const tooltipText =
      node.stepsTaken === 0 ? 'No tasks completed.' : `${node.stepsTaken} tasks completed.`;

    return (
      <Tooltip arrow={true} title={tooltipText}>
        <rect
          data-node-level={node.level}
          className="history__node"
          x={nodeX}
          y={nodeY}
          rx={2}
          height={size}
          width={size}
        />
      </Tooltip>
    );
  });
  return <svg style={{width: '100%', overflow: 'visible'}}>{NodeRects}</svg>;
}

export default function History() {
  //   const nodesArr = []
  //
  //   for (let i = 0; i < 171; i++) {
  //     nodesArr[i] = i
  //   }
  //
  //   const nodes = nodesArr.map((v, i) => {
  //     return (
  //       <HistoryNode key={i} />
  //     )
  //   })
  return (
    <Card className="history">
      <div className="history__days">
        <Typography sx={{top: '1.5rem'}} data-tag="active" className="history__heading">
          Mon
        </Typography>
        <Typography sx={{top: '2.95rem'}} className="history__heading">
          Wed
        </Typography>
        <Typography sx={{top: '4.35rem'}} className="history__heading">
          Fri
        </Typography>
      </div>
      <div className="history__node-group">
        <NodesDisplay nodes={nodes(123)} />
      </div>
    </Card>
  );
}
