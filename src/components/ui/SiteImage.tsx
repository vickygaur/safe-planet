import { cn } from '@/lib/utils'
import { resolveImage } from '@/data/images'

type Fit = 'banner' | 'square' | 'landscape'

type Props = {
  src: string
  alt: string
  /** banner = full-bleed hero | square = product/cards | landscape = wide photos */
  fit?: Fit
  className?: string
  imgClassName?: string
  loading?: 'eager' | 'lazy'
}

/**
 * Boxes match image shape so photos fill edge-to-edge.
 * Upload sizes (see src/data/images.ts comments):
 * - banner: 1920×1080
 * - square: 1200×1200
 * - landscape: 1600×1000
 */
export function SiteImage({
  src,
  alt,
  fit = 'landscape',
  className,
  imgClassName,
  loading = 'lazy',
}: Props) {
  return (
    <div className={cn('overflow-hidden bg-[#eef3f1]', className)}>
      <img
        src={resolveImage(src)}
        alt={alt}
        loading={loading}
        className={cn(
          'h-full w-full',
          fit === 'banner' && 'object-cover object-[center_30%]',
          fit === 'square' && 'object-cover object-center',
          fit === 'landscape' && 'object-cover object-[center_25%]',
          imgClassName,
        )}
      />
    </div>
  )
}
