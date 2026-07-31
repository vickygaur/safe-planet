import { cn } from '@/lib/utils'

const logoSrc = `${import.meta.env.BASE_URL}logo.png`

type Props = {
  className?: string
  /** Use screen blend so black logo background disappears on light/dark surfaces */
  blend?: boolean
}

export function Logo({ className, blend = true }: Props) {
  return (
    <img
      src={logoSrc}
      alt="Safe Planet"
      width={160}
      height={64}
      className={cn(
        'h-14 w-auto object-contain sm:h-16',
        blend && 'mix-blend-screen',
        className,
      )}
    />
  )
}
