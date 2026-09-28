import Image from "next/image";
import { withBase } from "@/lib/base-path";

const ASSET = "/assets/fall-fest-2026";

export function DecorImage({
  file,
  width,
  height,
  className,
}: {
  file: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      className={className}
      src={withBase(`${ASSET}/${file}`)}
      width={width}
      height={height}
      alt=""
      aria-hidden
      unoptimized
      loading="lazy"
    />
  );
}
