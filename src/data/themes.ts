export interface Theme {
  id: string;
  name: string;
  background: string;
  gridBackground: string;
  nodeGlowOpacity: number;
  accentColor: string;
  textColor: string;
}

export const THEMES: Theme[] = [
  {
    id: 'zen',
    name: 'Zen Garden',
    background: '#FDFCF0',
    gridBackground: 'rgba(255, 255, 255, 0.4)',
    nodeGlowOpacity: 0.4,
    accentColor: '#1E293B',
    textColor: '#1E293B'
  },
  {
    id: 'midnight',
    name: 'Midnight',
    background: '#0F172A',
    gridBackground: 'rgba(30, 41, 59, 0.6)',
    nodeGlowOpacity: 0.6,
    accentColor: '#F8FAFC',
    textColor: '#F8FAFC'
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    background: '#020617',
    gridBackground: 'rgba(30, 41, 59, 0.8)',
    nodeGlowOpacity: 0.9,
    accentColor: '#F472B6',
    textColor: '#F472B6'
  },
  {
    id: 'neon',
    name: 'Neon City',
    background: '#000000',
    gridBackground: 'rgba(20, 20, 20, 0.8)',
    nodeGlowOpacity: 0.8,
    accentColor: '#00FF41',
    textColor: '#00FF41'
  },
  {
    id: 'pastel',
    name: 'Candy',
    background: '#FFF1F2',
    gridBackground: 'rgba(255, 255, 255, 0.5)',
    nodeGlowOpacity: 0.3,
    accentColor: '#BE123C',
    textColor: '#BE123C'
  }
];