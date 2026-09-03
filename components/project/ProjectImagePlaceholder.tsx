import Image from "next/image";
import type { ProjectImageRecord } from "@/data/projects/almaty-museum-images";

type ProjectImagePlaceholderProps = ProjectImageRecord & {
  className?: string;
  aspectClassName?: string;
  imageFit?: "cover" | "contain";
  priority?: boolean;
  onClick?: () => void;
  showCaption?: boolean;
};

const ratioClass = (ratio?: string) => {
  if (ratio === "16:10") return "aspect-[16/10]";
  if (ratio === "16:9") return "aspect-video";
  if (ratio === "4:3") return "aspect-[4/3]";
  if (ratio === "7:5") return "aspect-[7/5]";
  return "aspect-[4/3]";
};

export function ProjectImagePlaceholder({
  code,
  src,
  alt,
  title,
  caption,
  description,
  recommendedSize,
  ratio,
  category,
  className = "",
  aspectClassName,
  imageFit = "cover",
  priority = false,
  onClick,
  showCaption = true,
}: ProjectImagePlaceholderProps) {
  const content = (
    <>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
          className={`${imageFit === "contain" ? "object-contain" : "object-cover"} transition duration-500 group-hover:scale-[1.02]`}
        />
      ) : (
        <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(135deg,#f7f9fc_0%,#eaf3ff_100%)]">
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(#cbd8ea_1px,transparent_1px),linear-gradient(90deg,#cbd8ea_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="absolute left-[12%] top-[18%] h-[54%] w-[68%] rounded-[18px] border border-dashed border-[#9db5d6]" />
          <div className="absolute bottom-[18%] left-[18%] h-px w-[62%] rotate-[-8deg] bg-[#9db5d6]" />
          <div className="absolute left-[26%] top-[25%] h-[40%] w-px rotate-[13deg] bg-[#9db5d6]" />
          <div className="absolute inset-x-5 bottom-5 rounded-[16px] border border-white/70 bg-white/78 p-4 backdrop-blur">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex rounded-full bg-[#071b33] px-3 py-1 text-[12px] font-extrabold uppercase tracking-[0.16em] text-white">
                {code}
              </span>
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-brand-blue">{category}</span>
            </div>
            <h3 className="mt-3 text-[18px] font-semibold leading-tight text-brand-text">{title}</h3>
            {description ? <p className="mt-2 text-sm leading-6 text-brand-muted">{description}</p> : null}
            <p className="mt-2 text-[12px] text-brand-muted">建议尺寸：{recommendedSize}</p>
            <p className="mt-1 text-[12px] font-semibold text-brand-blue">等待替换真实项目图片</p>
          </div>
        </div>
      )}
      {showCaption && caption ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-sm font-semibold text-white">
          {caption}
        </div>
      ) : null}
    </>
  );

  const baseClassName = `group relative block w-full overflow-hidden rounded-[20px] border border-white/10 bg-[#eef3f8] text-left shadow-soft ${aspectClassName || ratioClass(ratio)} ${className}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={baseClassName} aria-label={`查看${title}`}>
        {content}
      </button>
    );
  }

  return <div className={baseClassName}>{content}</div>;
}
