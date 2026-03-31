import { Level } from './levels';

type Point = { x: number; y: number };

const COLORS = [
  "#FF3B30", "#007AFF", "#34C759", "#FFCC00",
  "#AF52DE", "#FF9500", "#5AC8FA", "#FF2D55"
];

// ---------- DIFFERENT BASE PATTERNS ----------

// Snake
function snake(size: number): Point[] {
  const path: Point[] = [];
  for (let y = 0; y < size; y++) {
    if (y % 2 === 0) {
      for (let x = 0; x < size; x++) path.push({ x, y });
    } else {
      for (let x = size - 1; x >= 0; x--) path.push({ x, y });
    }
  }
  return path;
}

// Spiral (less repetitive 🔥)
function spiral(size: number): Point[] {
  const path: Point[] = [];
  let top = 0, bottom = size - 1, left = 0, right = size - 1;

  while (top <= bottom && left <= right) {
    // Top row
    for (let x = left; x <= right; x++) path.push({ x, y: top });
    top++;

    // Right column
    for (let y = top; y <= bottom; y++) path.push({ x: right, y });
    right--;

    // Bottom row
    for (let x = right; x >= left; x--) path.push({ x, y: bottom });
    bottom--;

    // Left column
    for (let y = bottom; y >= top; y--) path.push({ x: left, y });
    left++;
  }

  return path;
}

// Zigzag blocks (more tricky)
function zigzag(size: number): Point[] {
  const path: Point[] = [];

  for (let x = 0; x < size; x++) {
    if (x % 2 === 0) {
      for (let y = 0; y < size; y++) path.push({ x, y });
    } else {
      for (let y = size - 1; y >= 0; y--) path.push({ x, y });
    }
  }

  return path;
}

// ---------- SPLIT ----------

function splitPath(path: Point[], pairCount: number, level: number) {
  const pairs: any[] = [];
  const solutions: Record<string, Point[]> = {};

  const chunk = Math.floor(path.length / pairCount);

  for (let i = 0; i < pairCount; i++) {
    const start = i * chunk;
    const end = (i === pairCount - 1)
      ? path.length - 1
      : (i + 1) * chunk - 1;

    let segment = path.slice(start, end + 1);

    // safe variation
    if ((i + level) % 2 === 0) segment = segment.reverse();

    const color = COLORS[i];

    pairs.push({
      color,
      start: segment[0],
      end: segment[segment.length - 1],
    });

    solutions[color] = segment;
  }

  return { pairs, solutions };
}

// ---------- LEVEL BUILDER ----------

function buildLevel(id: number): Level {
  let size = 5;
  let pairCount = 4;

  // ✅ FIXED progression
  if (id <= 20) {
    size = 5;
    pairCount = 4;
  } else if (id <= 50) {
    size = 6;
    pairCount = 5;
  } else if (id <= 90) {
    size = 7;
    pairCount = 6;
  } else {
    size = 8;
    pairCount = 8;
  }

  // Slight difficulty scaling
  if (id % 10 === 0) pairCount++;

  // 🔥 Pattern variation (fix repetition)
  let path: Point[];

  if (id % 3 === 0) path = spiral(size);
  else if (id % 3 === 1) path = snake(size);
  else path = zigzag(size);

  // Safe transforms
  if (id % 2 === 0) path = [...path].reverse();

  // Rotate 90 deg
  if (id % 4 === 0) {
    path = path.map(p => ({ x: p.y, y: p.x }));
  }

  const { pairs, solutions } = splitPath(path, pairCount, id);

  return { id, size, pairs, solutions };
}

// ---------- EXPORT ----------

export const MANUAL_LEVELS: Level[] = [
  {
    "id": 1,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 2,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 3,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 4,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 5,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 4,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 4,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 4,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 6,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 7,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 8,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 9,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 10,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 4,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 4,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 4,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 4,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#34C759": [
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 11,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 12,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 13,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 14,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 15,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 16,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 17,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 18,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 19,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 20,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 4,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 4,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 4,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 4,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#34C759": [
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 21,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 22,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 23,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 24,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 25,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 4,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 4,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 4,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 26,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 27,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 28,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 29,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 4,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 4,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 4,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 4,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 30,
    "size": 5,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 4
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        }
      ]
    }
  },
  {
    "id": 31,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 5,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 5,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 5,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 5,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 32,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 5,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 5,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FFCC00": [
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#AF52DE": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 33,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 5
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 5
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 34,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 5,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 5,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FFCC00": [
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#AF52DE": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 35,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 5,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 5,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 36,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 4,
          "y": 5
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 3,
          "y": 5
        },
        "end": {
          "x": 3,
          "y": 0
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 2,
          "y": 5
        },
        "end": {
          "x": 2,
          "y": 0
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 1,
          "y": 5
        },
        "end": {
          "x": 1,
          "y": 0
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#34C759": [
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 0
        }
      ],
      "#FFCC00": [
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 0
        }
      ],
      "#AF52DE": [
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 0
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 37,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 5,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 5,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 5,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 5,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 38,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 5,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 5,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FFCC00": [
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#AF52DE": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 39,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 5
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 5
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 40,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 5,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 5,
          "y": 3
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 5,
          "y": 2
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 5,
          "y": 1
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 41,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 5,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 5,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 5,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 5,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 42,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 4,
          "y": 5
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 3,
          "y": 5
        },
        "end": {
          "x": 3,
          "y": 0
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 2,
          "y": 5
        },
        "end": {
          "x": 2,
          "y": 0
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 1,
          "y": 5
        },
        "end": {
          "x": 1,
          "y": 0
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#34C759": [
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 0
        }
      ],
      "#FFCC00": [
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 0
        }
      ],
      "#AF52DE": [
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 0
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 43,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 5,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 5,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 5,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 5,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 44,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 5,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 5,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FFCC00": [
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#AF52DE": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 45,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 5
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 5
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        }
      ],
      "#AF52DE": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 46,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 5,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 5,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FFCC00": [
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#AF52DE": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 47,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 5,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 5,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 5,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 5,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 48,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 4,
          "y": 5
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 3,
          "y": 5
        },
        "end": {
          "x": 3,
          "y": 0
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 2,
          "y": 5
        },
        "end": {
          "x": 2,
          "y": 0
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 1,
          "y": 5
        },
        "end": {
          "x": 1,
          "y": 0
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#34C759": [
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 0
        }
      ],
      "#FFCC00": [
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 0
        }
      ],
      "#AF52DE": [
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 0
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 49,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 5,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 5,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 5,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 5,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 50,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 5,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 5,
          "y": 3
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 5,
          "y": 2
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 5,
          "y": 1
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 51,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 5
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 5
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 52,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 5,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 5,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FFCC00": [
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#AF52DE": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 53,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 5,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 5,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 5,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 5,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 54,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 4,
          "y": 5
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 3,
          "y": 5
        },
        "end": {
          "x": 3,
          "y": 0
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 2,
          "y": 5
        },
        "end": {
          "x": 2,
          "y": 0
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 1,
          "y": 5
        },
        "end": {
          "x": 1,
          "y": 0
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#34C759": [
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 0
        }
      ],
      "#FFCC00": [
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 0
        }
      ],
      "#AF52DE": [
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 0
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 55,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 5,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 5,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 56,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 5,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 5,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FFCC00": [
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#AF52DE": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 57,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 5
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 5
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 58,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 5,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 5,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FFCC00": [
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#AF52DE": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 59,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 5,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 5,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 5,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 5,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 5
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        }
      ]
    }
  },
  {
    "id": 60,
    "size": 6,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 5
        },
        "end": {
          "x": 1,
          "y": 0
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 5
        },
        "end": {
          "x": 2,
          "y": 0
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 5
        },
        "end": {
          "x": 3,
          "y": 0
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 5
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 5
        },
        "end": {
          "x": 5,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 0
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 0
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 0
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 61,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 62,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 63,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 6
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 6
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 6
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 6
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 64,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 65,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 6,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 6,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 6,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 6,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 6,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 66,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 6
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 6
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 6
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 6
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        }
      ],
      "#AF52DE": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        }
      ],
      "#FF9500": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 67,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 68,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 69,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 6
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 6
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 6
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 6
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 70,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 6,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 6,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 6,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 6,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 6,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 6,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#FF9500": [
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 71,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 72,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 6
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 6
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 6
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 6
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        }
      ],
      "#AF52DE": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        }
      ],
      "#FF9500": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 73,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 74,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 75,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 6
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 6
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 6
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 6
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        }
      ],
      "#AF52DE": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        }
      ],
      "#FF9500": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 76,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 77,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 78,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 6
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 6
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 6
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 6
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        }
      ],
      "#AF52DE": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        }
      ],
      "#FF9500": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 79,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 80,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 6,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 6,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 6,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 6,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 6,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 6,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#FF9500": [
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 81,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 6
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 6
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 6
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 6
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 82,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 83,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 84,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 6
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 6
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 6
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 6
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        }
      ],
      "#AF52DE": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        }
      ],
      "#FF9500": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 85,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 6,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 6,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 6,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 6,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 6,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 86,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 87,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 6
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 6
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 6
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 6
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 88,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 89,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 6,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 6,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 6,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 6,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 6,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 6,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 90,
    "size": 7,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 6
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 6
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 6
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 6
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 6
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        }
      ]
    }
  },
  {
    "id": 91,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 7,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 7,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 7,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 7,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 7,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 7,
          "y": 6
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 7,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 7,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 7,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 7,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 7,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 7,
          "y": 6
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 7,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 92,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 7,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 7,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 7,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 7,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 7,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 7,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 0,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FF9500": [
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#5AC8FA": [
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 93,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 7
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 7
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 7
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 7
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 7
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 7
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 0,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 1,
          "y": 7
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 2,
          "y": 7
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 3,
          "y": 7
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 7
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 5,
          "y": 7
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 6,
          "y": 7
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 7,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 94,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 7,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 7,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 7,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 7,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 7,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 7,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 0,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FF9500": [
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#5AC8FA": [
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 95,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 7,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 7,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 7,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 7,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 7,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 7,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 0,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 96,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 6,
          "y": 7
        },
        "end": {
          "x": 6,
          "y": 0
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 7
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 4,
          "y": 7
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 3,
          "y": 7
        },
        "end": {
          "x": 3,
          "y": 0
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 2,
          "y": 7
        },
        "end": {
          "x": 2,
          "y": 0
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 1,
          "y": 7
        },
        "end": {
          "x": 1,
          "y": 0
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 7,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 0
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#FFCC00": [
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#AF52DE": [
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 0
        }
      ],
      "#FF9500": [
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 0
        }
      ],
      "#5AC8FA": [
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 0
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 97,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 7,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 7,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 7,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 7,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 7,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 7,
          "y": 6
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 7,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 7,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 7,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 7,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 7,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 7,
          "y": 6
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 7,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 98,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 7,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 7,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 7,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 7,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 7,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 7,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 0,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FF9500": [
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#5AC8FA": [
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 99,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 7
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 7
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 7
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 7
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 7
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 7
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 0,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 1,
          "y": 7
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 2,
          "y": 7
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 3,
          "y": 7
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 7
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 5,
          "y": 7
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 6,
          "y": 7
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 7,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 100,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 7,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 7,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 7,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 7,
          "y": 3
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 7,
          "y": 2
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 7,
          "y": 1
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 7,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 7,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 7,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 7,
          "y": 3
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 7,
          "y": 2
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 7,
          "y": 1
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 7,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 101,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 7,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 7,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 7,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 7,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 7,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 7,
          "y": 6
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 7,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 7,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 7,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 7,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 7,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 7,
          "y": 6
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 7,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 102,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 6,
          "y": 7
        },
        "end": {
          "x": 6,
          "y": 0
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 7
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 4,
          "y": 7
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 3,
          "y": 7
        },
        "end": {
          "x": 3,
          "y": 0
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 2,
          "y": 7
        },
        "end": {
          "x": 2,
          "y": 0
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 1,
          "y": 7
        },
        "end": {
          "x": 1,
          "y": 0
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 7,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 0
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#FFCC00": [
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#AF52DE": [
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 0
        }
      ],
      "#FF9500": [
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 0
        }
      ],
      "#5AC8FA": [
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 0
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 103,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 7,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 7,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 7,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 7,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 7,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 7,
          "y": 6
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 7,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 7,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 7,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 7,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 7,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 7,
          "y": 6
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 7,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 104,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 7,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 7,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 7,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 7,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 7,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 7,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 0,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FF9500": [
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#5AC8FA": [
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 105,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 7
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 7
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 7
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 7
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 7
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 7
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 7,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 6,
          "y": 7
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 5,
          "y": 7
        }
      ],
      "#FFCC00": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 7
        }
      ],
      "#AF52DE": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 3,
          "y": 7
        }
      ],
      "#FF9500": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 2,
          "y": 7
        }
      ],
      "#5AC8FA": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 1,
          "y": 7
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 0,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 106,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 7,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 7,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 7,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 7,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 7,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 7,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 0,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FF9500": [
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#5AC8FA": [
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 107,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 7,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 7,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 7,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 7,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 7,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 7,
          "y": 6
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 7,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 7,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 7,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 7,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 7,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 7,
          "y": 6
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 7,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 108,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 6,
          "y": 7
        },
        "end": {
          "x": 6,
          "y": 0
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 7
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 4,
          "y": 7
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 3,
          "y": 7
        },
        "end": {
          "x": 3,
          "y": 0
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 2,
          "y": 7
        },
        "end": {
          "x": 2,
          "y": 0
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 1,
          "y": 7
        },
        "end": {
          "x": 1,
          "y": 0
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 7,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 0
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#FFCC00": [
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#AF52DE": [
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 0
        }
      ],
      "#FF9500": [
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 0
        }
      ],
      "#5AC8FA": [
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 0
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 109,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 7,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 7,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 7,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 7,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 7,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 7,
          "y": 6
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 7,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 7,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 7,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 7,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 7,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 7,
          "y": 6
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 7,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 110,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 7,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 7,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 7,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 7,
          "y": 3
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 7,
          "y": 2
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 7,
          "y": 1
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 7,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 7,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 7,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 7,
          "y": 3
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 7,
          "y": 2
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 7,
          "y": 1
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 7,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 111,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 7
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 7
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 7
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 7
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 7
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 7
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 0,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 1,
          "y": 7
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 2,
          "y": 7
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 3,
          "y": 7
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 7
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 5,
          "y": 7
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 6,
          "y": 7
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 7,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 112,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 7,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 7,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 7,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 7,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 7,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 7,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 0,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FF9500": [
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#5AC8FA": [
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 113,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 7,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 7,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 7,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 7,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 7,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 7,
          "y": 6
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 7,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 7,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 7,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 7,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 7,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 7,
          "y": 6
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 7,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 114,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 6,
          "y": 7
        },
        "end": {
          "x": 6,
          "y": 0
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 5,
          "y": 7
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 4,
          "y": 7
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 3,
          "y": 7
        },
        "end": {
          "x": 3,
          "y": 0
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 2,
          "y": 7
        },
        "end": {
          "x": 2,
          "y": 0
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 1,
          "y": 7
        },
        "end": {
          "x": 1,
          "y": 0
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 7,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 0
        }
      ],
      "#34C759": [
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#FFCC00": [
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#AF52DE": [
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 0
        }
      ],
      "#FF9500": [
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 0
        }
      ],
      "#5AC8FA": [
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 0
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 115,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 7,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 7,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 7,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 7,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 7,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 7,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 0,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 116,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 7,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 7,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 7,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 7,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 7,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 7,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 0,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FF9500": [
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#5AC8FA": [
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 117,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 0
        },
        "end": {
          "x": 1,
          "y": 7
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 0
        },
        "end": {
          "x": 2,
          "y": 7
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 0
        },
        "end": {
          "x": 3,
          "y": 7
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 0
        },
        "end": {
          "x": 4,
          "y": 7
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 0
        },
        "end": {
          "x": 5,
          "y": 7
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 0
        },
        "end": {
          "x": 6,
          "y": 7
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 0,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 1,
          "y": 7
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 2,
          "y": 7
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 3,
          "y": 7
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 7
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 5,
          "y": 7
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 6,
          "y": 7
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 7,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 118,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 7
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 7,
          "y": 6
        },
        "end": {
          "x": 0,
          "y": 6
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 7,
          "y": 5
        },
        "end": {
          "x": 0,
          "y": 5
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 7,
          "y": 4
        },
        "end": {
          "x": 0,
          "y": 4
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 7,
          "y": 3
        },
        "end": {
          "x": 0,
          "y": 3
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 7,
          "y": 2
        },
        "end": {
          "x": 0,
          "y": 2
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 7,
          "y": 1
        },
        "end": {
          "x": 0,
          "y": 1
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 0
        },
        "end": {
          "x": 0,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 0,
          "y": 7
        }
      ],
      "#007AFF": [
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 0,
          "y": 6
        }
      ],
      "#34C759": [
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "#FFCC00": [
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "#AF52DE": [
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "#FF9500": [
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 0,
          "y": 2
        }
      ],
      "#5AC8FA": [
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 0,
          "y": 1
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "id": 119,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 0
        },
        "end": {
          "x": 7,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 0,
          "y": 1
        },
        "end": {
          "x": 7,
          "y": 1
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 0,
          "y": 2
        },
        "end": {
          "x": 7,
          "y": 2
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 0,
          "y": 3
        },
        "end": {
          "x": 7,
          "y": 3
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 0,
          "y": 4
        },
        "end": {
          "x": 7,
          "y": 4
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 0,
          "y": 5
        },
        "end": {
          "x": 7,
          "y": 5
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 0,
          "y": 6
        },
        "end": {
          "x": 7,
          "y": 6
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 7,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 7,
          "y": 1
        }
      ],
      "#34C759": [
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 7,
          "y": 2
        }
      ],
      "#FFCC00": [
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 7,
          "y": 3
        }
      ],
      "#AF52DE": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 7,
          "y": 4
        }
      ],
      "#FF9500": [
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 7,
          "y": 5
        }
      ],
      "#5AC8FA": [
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 7,
          "y": 6
        }
      ],
      "#FF2D55": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 7,
          "y": 7
        }
      ]
    }
  },
  {
    "id": 120,
    "size": 8,
    "pairs": [
      {
        "color": "#FF3B30",
        "start": {
          "x": 0,
          "y": 7
        },
        "end": {
          "x": 0,
          "y": 0
        }
      },
      {
        "color": "#007AFF",
        "start": {
          "x": 1,
          "y": 7
        },
        "end": {
          "x": 1,
          "y": 0
        }
      },
      {
        "color": "#34C759",
        "start": {
          "x": 2,
          "y": 7
        },
        "end": {
          "x": 2,
          "y": 0
        }
      },
      {
        "color": "#FFCC00",
        "start": {
          "x": 3,
          "y": 7
        },
        "end": {
          "x": 3,
          "y": 0
        }
      },
      {
        "color": "#AF52DE",
        "start": {
          "x": 4,
          "y": 7
        },
        "end": {
          "x": 4,
          "y": 0
        }
      },
      {
        "color": "#FF9500",
        "start": {
          "x": 5,
          "y": 7
        },
        "end": {
          "x": 5,
          "y": 0
        }
      },
      {
        "color": "#5AC8FA",
        "start": {
          "x": 6,
          "y": 7
        },
        "end": {
          "x": 6,
          "y": 0
        }
      },
      {
        "color": "#FF2D55",
        "start": {
          "x": 7,
          "y": 7
        },
        "end": {
          "x": 7,
          "y": 0
        }
      }
    ],
    "solutions": {
      "#FF3B30": [
        {
          "x": 0,
          "y": 7
        },
        {
          "x": 0,
          "y": 6
        },
        {
          "x": 0,
          "y": 5
        },
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": 3
        },
        {
          "x": 0,
          "y": 2
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 0
        }
      ],
      "#007AFF": [
        {
          "x": 1,
          "y": 7
        },
        {
          "x": 1,
          "y": 6
        },
        {
          "x": 1,
          "y": 5
        },
        {
          "x": 1,
          "y": 4
        },
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 1,
          "y": 2
        },
        {
          "x": 1,
          "y": 1
        },
        {
          "x": 1,
          "y": 0
        }
      ],
      "#34C759": [
        {
          "x": 2,
          "y": 7
        },
        {
          "x": 2,
          "y": 6
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": 2,
          "y": 4
        },
        {
          "x": 2,
          "y": 3
        },
        {
          "x": 2,
          "y": 2
        },
        {
          "x": 2,
          "y": 1
        },
        {
          "x": 2,
          "y": 0
        }
      ],
      "#FFCC00": [
        {
          "x": 3,
          "y": 7
        },
        {
          "x": 3,
          "y": 6
        },
        {
          "x": 3,
          "y": 5
        },
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 3,
          "y": 0
        }
      ],
      "#AF52DE": [
        {
          "x": 4,
          "y": 7
        },
        {
          "x": 4,
          "y": 6
        },
        {
          "x": 4,
          "y": 5
        },
        {
          "x": 4,
          "y": 4
        },
        {
          "x": 4,
          "y": 3
        },
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "#FF9500": [
        {
          "x": 5,
          "y": 7
        },
        {
          "x": 5,
          "y": 6
        },
        {
          "x": 5,
          "y": 5
        },
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 0
        }
      ],
      "#5AC8FA": [
        {
          "x": 6,
          "y": 7
        },
        {
          "x": 6,
          "y": 6
        },
        {
          "x": 6,
          "y": 5
        },
        {
          "x": 6,
          "y": 4
        },
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 0
        }
      ],
      "#FF2D55": [
        {
          "x": 7,
          "y": 7
        },
        {
          "x": 7,
          "y": 6
        },
        {
          "x": 7,
          "y": 5
        },
        {
          "x": 7,
          "y": 4
        },
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 7,
          "y": 1
        },
        {
          "x": 7,
          "y": 0
        }
      ]
    }
  }
]