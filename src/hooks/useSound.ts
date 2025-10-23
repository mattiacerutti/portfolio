"use client";
import {useRef, useCallback} from "react";

type State = {
  ctx: AudioContext | null;
  buffer: AudioBuffer | null;
  ready: boolean;
};

export function useSound(src: string, volume: number = 0.1) {
  const state = useRef<State>({ctx: null, buffer: null, ready: false});

  // Initialize AudioContext and decode buffer on first user gesture
  const init = useCallback(async () => {
    if (state.current.ready) return;
    const Ctor = (window.AudioContext || (window as unknown as Window & {webkitAudioContext: typeof AudioContext}).webkitAudioContext) as typeof AudioContext;
    const ctx = new Ctor();

    if (ctx.state !== "running") await ctx.resume();

    const res = await fetch(src, {cache: "force-cache"});
    const arr = await res.arrayBuffer();
    const buffer = await ctx.decodeAudioData(arr);
    state.current = {ctx, buffer, ready: true};
  }, [src]);

  // Low latency playback
  const play = useCallback(() => {
    const {ctx, buffer, ready} = state.current;
    if (!ready || !ctx || !buffer) return;
    const srcNode = ctx.createBufferSource();
    srcNode.buffer = buffer;
    const gain = ctx.createGain();
    gain.gain.value = volume;
    srcNode.connect(gain).connect(ctx.destination);
    srcNode.start();
  }, [volume]);

  return {init, play, ready: () => state.current.ready};
}
