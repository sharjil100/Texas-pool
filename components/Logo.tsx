import { cn } from "@/lib/utils";

export default function Logo({
  className,
  variant = "ink",
}: {
  className?: string;
  variant?: "ink" | "light";
}) {
  return (
    <div className={cn("flex items-center select-none", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Texus"
        className={cn(
          "h-12 md:h-14 w-auto",
          variant === "light" && "brightness-0 invert"
        )}
      />
    </div>
  );
}
