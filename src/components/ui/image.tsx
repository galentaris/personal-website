import type { CSSProperties, ImgHTMLAttributes } from 'react'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  width?: number
  height?: number
  alt: string
  className?: string
  style?: CSSProperties
}

const Image = ({ src, width, height, alt, className, style, ...props }: ImageProps) => {
  return (
    <img 
      src={src} 
      width={width} 
      height={height} 
      alt={alt}
      className={className}
      style={{ 
        objectFit: 'cover',
        ...style
      }}
      loading="lazy"
      {...props}
    />
  )
}

export default Image
