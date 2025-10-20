import { cn } from "@/lib/utils";

interface AdSpaceProps {
  className?: string;
  size?: "banner" | "sidebar" | "square";
}

const AdSpace = ({ className, size = "banner" }: AdSpaceProps) => {
  const sizeClasses = {
    banner: "h-24 w-full",
    sidebar: "h-96 w-full",
    square: "h-64 w-64",
  };

  return (
    <div
      className={cn(
        "bg-muted border border-border rounded-lg flex items-center justify-center",
        sizeClasses[size],
        className
      )}
    >
      <p className="text-sm text-muted-foreground">Espace publicitaire</p>
    </div>
  );
};

export default AdSpace;
