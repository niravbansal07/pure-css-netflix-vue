import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const netflixButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-sm",
  {
    variants: {
      variant: {
        play: "bg-foreground text-background hover:bg-foreground/90 px-8 py-2 text-lg",
        info: "bg-muted/60 text-foreground backdrop-blur-sm hover:bg-muted/40 px-8 py-2 text-lg",
        nav: "text-muted-foreground hover:text-foreground transition-colors text-sm",
        profile: "rounded-sm overflow-hidden",
      },
      size: {
        default: "h-10",
        sm: "h-8 text-sm",
        lg: "h-12 text-lg",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "play",
      size: "default",
    },
  }
)

export interface NetflixButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof netflixButtonVariants> {}

const NetflixButton = React.forwardRef<HTMLButtonElement, NetflixButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(netflixButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
NetflixButton.displayName = "NetflixButton"

export { NetflixButton, netflixButtonVariants }