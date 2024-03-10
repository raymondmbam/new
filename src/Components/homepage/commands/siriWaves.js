import React, { useEffect, useRef } from "react";

const SpeechWave = () => {
  const canvasRef = useRef(null);
  const WIDTH = 400;
  const HEIGHT = 40;

  useEffect(() => {
    let context;
    let analyser;
    let freqs;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const opts = {
      smoothing: 0.6,
      fft: 8,
      minDecibels: -70,
      scale: 0.2,
      glow: 10,
      color1: [203, 36, 128],
      color2: [41, 200, 192],
      color3: [24, 137, 218],
      fillOpacity: 0.6,
      lineWidth: 1,
      blend: "screen",
      shift: 50,
      width: 60,
      amp: 0.1,
    };

    function range(i) {
      return Array.from(Array(i).keys());
    }

    const shuffle = [1, 3, 0, 4, 2];

    function freq(channel, i) {
      const band = 2 * channel + shuffle[i] * 6;
      return freqs[band];
    }

    function scale(i) {
      const x = Math.abs(2 - i);
      const s = 3 - x;
      return (s / 3) * opts.amp;
    }

    function path(channel) {
      const color = opts[`color${channel + 1}`].map(Math.floor);

      ctx.fillStyle = `rgba(${color}, ${opts.fillOpacity})`;
      ctx.strokeStyle = ctx.shadowColor = `rgb(${color})`;
      ctx.lineWidth = opts.lineWidth;
      ctx.shadowBlur = opts.glow;
      ctx.globalCompositeOperation = opts.blend;
      const m = HEIGHT / 2;

      const offset = (WIDTH - 15 * opts.width) / 2;
      const x = range(15).map(
        (i) => offset + channel * opts.shift + i * opts.width,
      );

      const y = range(5).map((i) =>
        Math.max(0, m - scale(i) * freq(channel, i)),
      );
      const h = 2 * m;

      ctx.beginPath();
      ctx.moveTo(0, m);

      ctx.lineTo(x[0], m + 1);

      ctx.bezierCurveTo(x[1], m + 1, x[2], y[0], x[3], y[0]);
      ctx.bezierCurveTo(x[4], y[0], x[4], y[1], x[5], y[1]);
      ctx.bezierCurveTo(x[6], y[1], x[6], y[2], x[7], y[2]);
      ctx.bezierCurveTo(x[8], y[2], x[8], y[3], x[9], y[3]);
      ctx.bezierCurveTo(x[10], y[3], x[10], y[4], x[11], y[4]);

      ctx.bezierCurveTo(x[12], y[4], x[12], m, x[13], m);

      ctx.lineTo(1000, m + 1);
      ctx.lineTo(x[13], m - 1);

      ctx.bezierCurveTo(x[12], m, x[12], h - y[4], x[11], h - y[4]);
      ctx.bezierCurveTo(x[10], h - y[4], x[10], h - y[3], x[9], h - y[3]);
      ctx.bezierCurveTo(x[8], h - y[3], x[8], h - y[2], x[7], h - y[2]);
      ctx.bezierCurveTo(x[6], h - y[2], x[6], h - y[1], x[5], h - y[1]);
      ctx.bezierCurveTo(x[4], h - y[1], x[4], h - y[0], x[3], h - y[0]);
      ctx.bezierCurveTo(x[2], h - y[0], x[1], m, x[0], m);

      ctx.lineTo(0, m);
      ctx.fill();
      ctx.stroke();
    }

    function visualize() {
      analyser.smoothingTimeConstant = opts.smoothing;
      analyser.fftSize = Math.pow(2, opts.fft);
      analyser.minDecibels = opts.minDecibels;
      analyser.maxDecibels = 0;
      analyser.getByteFrequencyData(freqs);

      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      path(0);
      path(1);
      path(2);

      requestAnimationFrame(visualize);
    }

    function onStream(stream) {
      context = new (window.AudioContext || window.webkitAudioContext)();
      analyser = context.createAnalyser();
      freqs = new Uint8Array(analyser.frequencyBinCount);
      const input = context.createMediaStreamSource(stream);
      input.connect(analyser);
      requestAnimationFrame(visualize);
    }

    function onStreamError(e) {
      console.error("Error accessing microphone:", e);
    }

    // Start microphone audio stream
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(onStream)
      .catch(onStreamError);

    return () => {
      // Cleanup: stop the audio stream and close the context
      context && context.close().catch(console.error);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        style={{ width: "100%" }}
      ></canvas>
    </div>
  );
};

export default SpeechWave;
