"use client";

import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { projects } from "@/lib/resume";

export default function ProjectsGallery() {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeImages, setActiveImages] = useState([]);

  const openModal = (images) => {
    setActiveImages(images);
    setCurrentImage(0);
    setOpen(true);
  };

  const navigateImage = (direction) => {
    setCurrentImage((prev) =>
      direction === "prev"
        ? prev === 0
          ? activeImages.length - 1
          : prev - 1
        : prev === activeImages.length - 1
          ? 0
          : prev + 1
    );
  };

  return (
    <>
      <div className="space-y-0 divide-y divide-line animate-rise-delay">
        {projects.map((project) => (
          <article key={project.title} className="py-8 md:py-10 first:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark mb-2">
              {project.tag}
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-3">
              {project.title}
            </h2>
            <p className="max-w-3xl text-muted leading-relaxed mb-4">
              {project.summary}
            </p>
            {project.images.length > 0 ? (
              <button
                type="button"
                onClick={() => openModal(project.images)}
                className="text-sm font-semibold text-brand-deep underline underline-offset-4 hover:text-brand transition-colors"
              >
                View screenshots
              </button>
            ) : null}
          </article>
        ))}
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        styles={{
          modal: {
            width: "min(80vw, 960px)",
            height: "75vh",
            maxHeight: "75vh",
            overflow: "hidden",
            borderRadius: "4px",
            padding: "1.25rem",
          },
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeImages[currentImage]}
            alt="Project screenshot"
            className="max-w-full max-h-full object-contain"
          />
          <button
            type="button"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-brand text-white p-3"
            onClick={() => navigateImage("prev")}
            aria-label="Previous screenshot"
          >
            <FaArrowLeft />
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand text-white p-3"
            onClick={() => navigateImage("next")}
            aria-label="Next screenshot"
          >
            <FaArrowRight />
          </button>
        </div>
      </Modal>
    </>
  );
}
