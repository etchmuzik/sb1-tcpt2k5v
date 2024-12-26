// Audio context singleton with lazy initialization
let audioContext: AudioContext | null = null;

// Initialize audio context
export function initAudioContext(): void {
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (error) {
      console.warn('Failed to initialize audio context:', error);
    }
  }
}

// Simple beep synthesis
function createBeep(frequency: number = 440, duration: number = 0.1): void {
  if (!audioContext) {
    initAudioContext();
  }

  try {
    if (audioContext?.state === 'suspended') {
      audioContext.resume();
    }

    const oscillator = audioContext!.createOscillator();
    const gainNode = audioContext!.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext!.destination);

    oscillator.frequency.value = frequency;
    gainNode.gain.value = 0.1;

    const currentTime = audioContext!.currentTime;
    gainNode.gain.setValueAtTime(0, currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, currentTime + 0.01);
    gainNode.gain.linearRampToValueAtTime(0, currentTime + duration);

    oscillator.start(currentTime);
    oscillator.stop(currentTime + duration);
  } catch (error) {
    console.warn('Audio playback failed:', error);
  }
}

export function playCallStart(): void {
  createBeep(880, 0.15); // Higher pitch for call start
}

export function playCallEnd(): void {
  createBeep(440, 0.15); // Lower pitch for call end
}

// Initialize sounds on user interaction
export function initSounds(): void {
  document.addEventListener('click', () => {
    initAudioContext();
  }, { once: true });
}