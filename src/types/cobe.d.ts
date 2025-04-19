
declare module 'cobe' {
  export interface GlobeOptions {
    devicePixelRatio?: number;
    width: number;
    height: number;
    phi?: number;
    theta?: number;
    dark?: number;
    diffuse?: number;
    mapSamples?: number;
    mapBrightness?: number;
    baseColor?: number[];
    markerColor?: number[];
    glowColor?: number[];
    markers?: Array<{ location: number[], size: number }>;
    onRender?: (state: any) => void;
  }

  export default function createGlobe(
    canvas: HTMLCanvasElement, 
    options: GlobeOptions
  ): {
    destroy: () => void;
  };
}
