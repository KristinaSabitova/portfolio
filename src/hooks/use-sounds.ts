import { useCallback, useEffect, useRef } from "react";
import { asset } from "@/lib/asset";

/** Sonidos de pulsación/liberación de las teclas del teclado 3D. */
export const useSounds = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const pressBufferRef = useRef<AudioBuffer | null>(null);
  const releaseBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    const loadSound = async () => {
      try {
        const AudioContextCtor =
          window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextCtor) return;

        const ctx = new AudioContextCtor();
        audioContextRef.current = ctx;

        const press = await fetch(asset("/assets/keycap-sounds/press.mp3"));
        pressBufferRef.current = await ctx.decodeAudioData(
          await press.arrayBuffer()
        );
        const release = await fetch(asset("/assets/keycap-sounds/release.mp3"));
        releaseBufferRef.current = await ctx.decodeAudioData(
          await release.arrayBuffer()
        );
      } catch {
        /* sin sonido: no es crítico */
      }
    };

    loadSound();
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  const playSoundBuffer = useCallback((buffer: AudioBuffer | null) => {
    try {
      const ctx = audioContextRef.current;
      if (!ctx || !buffer) return;
      if (ctx.state === "suspended") ctx.resume().catch(() => {});

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      // ligera variación para que no suene idéntico cada vez
      source.detune.value = Math.random() * 200 - 100;

      const gain = ctx.createGain();
      gain.gain.value = 0.4;

      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(0);
    } catch {
      /* ignorar */
    }
  }, []);

  const playPressSound = useCallback(
    () => playSoundBuffer(pressBufferRef.current),
    [playSoundBuffer]
  );
  const playReleaseSound = useCallback(
    () => playSoundBuffer(releaseBufferRef.current),
    [playSoundBuffer]
  );

  return { playPressSound, playReleaseSound };
};
