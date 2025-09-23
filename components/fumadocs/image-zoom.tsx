'use client';

import { Image, type ImageProps } from 'fumadocs-core/framework';
import { type ImgHTMLAttributes } from 'react';
import './image-zoom.css';
import Zoom, { type UncontrolledProps } from 'react-medium-image-zoom';

export type ImageZoomProps = ImageProps & {
  /**
   * Image props when zoom in
   */
  zoomInProps?: ImgHTMLAttributes<HTMLImageElement>;

  /**
   * Props for `react-medium-image-zoom`
   */
  rmiz?: UncontrolledProps;
};

function getImageSrc(src: ImageProps['src']): string {
  if (typeof src === 'string') return src;

  if (typeof src === 'object') {
    // Next.js
    if ('default' in src)
      return (src as { default: { src: string } }).default.src;
    return src.src;
  }

  return '';
}

export function ImageZoom({
  zoomInProps,
  children,
  rmiz,
  ...props
}: ImageZoomProps) {
  return (
    <Zoom
      zoomMargin={20}
      wrapElement="span"
      {...rmiz}
      zoomImg={{
        src: getImageSrc(props.src),
        sizes: undefined,
        ...zoomInProps,
      }}
    >
      {children ?? (
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
          {...props}
          style={{
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(0, 0, 0, 0.02)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            transition: 'all 0.2s ease',
            cursor: 'zoom-in',
            ...props.style,
          }}
          className={`hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ${props.className || ''}`}
        />
      )}
    </Zoom>
  );
}
