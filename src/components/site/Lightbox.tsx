import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export const Lightbox = ({ images, index, onClose, onPrev, onNext }: Props) => {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        aria-label="Закрыть"
        className="absolute top-6 right-6 h-12 w-12 rounded-full border border-border/40 bg-secondary/40 text-foreground hover:bg-secondary transition-smooth flex items-center justify-center z-10"
        onClick={onClose}
      >
        <X size={20} />
      </button>

      <button
        aria-label="Предыдущее фото"
        className="absolute left-4 md:left-8 h-12 w-12 rounded-full border border-border/40 bg-secondary/40 text-foreground hover:bg-secondary transition-smooth flex items-center justify-center z-10"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <ChevronLeft size={22} />
      </button>

      <button
        aria-label="Следующее фото"
        className="absolute right-4 md:right-8 h-12 w-12 rounded-full border border-border/40 bg-secondary/40 text-foreground hover:bg-secondary transition-smooth flex items-center justify-center z-10"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <ChevronRight size={22} />
      </button>

      <figure
        className="max-w-[92vw] max-h-[88vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`Фото ${index + 1} из ${images.length}`}
          className="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-elegant"
        />
        <figcaption className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </figcaption>
      </figure>
    </div>
  );
};
