import { cn, assetUrl } from '@/lib/utils'

type Props = {
  className?: string
}

/** Transparent-background logo — works on light and dark headers */
export function Logo({ className }: Props) {
  return (
    <img
      src={assetUrl('logo.png')}
      alt="Safe Planet"
      width={180}
      height={72}
      className={cn('h-12 w-auto object-contain sm:h-14 md:h-16', className)}
    />
  )
}
