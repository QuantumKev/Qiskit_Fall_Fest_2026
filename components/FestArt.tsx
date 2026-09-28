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

export function FestBanner({
  file,
  width,
  height,
  pill,
}: {
  file: string;
  width: number;
  height: number;
  pill?: { file: string; width: number; height: number };
}) {
  return (
    <figure className="fest-banner-frame" aria-hidden="true">
      <DecorImage file={file} width={width} height={height} className="fest-banner" />
      {pill ? <DecorImage file={pill.file} width={pill.width} height={pill.height} className="fest-pill" /> : null}
    </figure>
  );
}
