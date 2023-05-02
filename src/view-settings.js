
const views = {
    init: {ct: 45, cr: 2.8, cy: 2, tx: -1, ty: 0.4, tz: -1, z: 450, sx: 0, sy: 0, sz: 0, d: 2},
    load: {ct: 45, cr: 2.8, cy: 2, tx: -1, ty: 0.4, tz: -1, z: 450, sx: -0.35, sy: 0, sz: 0.35, d: 2},
    core: {ct: 45, cr: 2.8, cy: 2, tx: -1, ty: 0, tz: -1, z: 353.55, sx: 0, sy: 0, sz: 0, d: 2},
    right: {ct: 45, cr: 2.8, cy: 2, tx: -1, ty: 0, tz: -1, z: 250, sx: -1.2869, sy: 0, sz: 1.2869, d: 2},
    yard: {ct: 180, cr: 2.8, cy: 2, tx: -1, ty: 1, tz: -1, z: 350, sx: 0.5, sy: 1, sz: -0.5, d: 2},
    back: {ct: -135, cr: 2.8, cy: 2, tx: 1, ty: 0, tz: 1, z: 250, sx: 0, sy: 0.3, sz: 0, d: 3},
}

const scrolls = [
    {li: 1, ls: 0, to: 'right', from: 'core', dir: 1},
    {li: 2, ls: 1, to: 'right', from: 'right', dir: 1},
    {li: 3, ls: 2, to: 'yard', from: 'right', dir: 1},
    // {li: 3, ls: 2, target: {x: 'tx', y: 'ty', z: 'tz'}, to: 'zoomA', from: 'right', dir: 1}
]

const initCursorSettings = {
    isOn: true,
    delta: 0.3,
    damping: 0.01
}

export { views, scrolls, initCursorSettings }