// Audio context for generating dial tones
const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

const frequencies: Record<string, [number, number]> = {
  '1': [697, 1209],
  '2': [697, 1336],
  '3': [697, 1477],
  '4': [770, 1209],
  '5': [770, 1336],
  '6': [770, 1477],
  '7': [852, 1209],
  '8': [852, 1336],
  '9': [852, 1477],
  '*': [941, 1209],
  '0': [941, 1336],
  '#': [941, 1477],
};

export function playDialTone(digit: string) {
  if (!frequencies[digit]) return;

  const [freq1, freq2] = frequencies[digit];
  const duration = 0.1;

  const osc1 = audioContext.createOscillator();
  const osc2 = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  osc1.frequency.value = freq1;
  osc2.frequency.value = freq2;
  gainNode.gain.value = 0.1;

  osc1.connect(gainNode);
  osc2.connect(gainNode);
  gainNode.connect(audioContext.destination);

  osc1.start();
  osc2.start();

  setTimeout(() => {
    osc1.stop();
    osc2.stop();
  }, duration * 1000);
}