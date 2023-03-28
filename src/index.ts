import { CustomWindow } from './types';
import Live2D from './Live2D';
import './Message.ts';
import NLP from './NLP';
import SpeechRecognition from './SpeechRecognition';

declare const window: CustomWindow;

window.Modules = {
  live2d: Live2D,
  nlp: NLP,
  recognition: SpeechRecognition,
};

document.getElementById('loader')!.style.display = 'none';

// TODO: better help pleasze
document.getElementById('help')!.onclick = () => alert(
'help pls.\n' +
'\n' +
'> its been 3 days <\n' +
'Imprisoned by sora\'s calls\n' +
'\n'
);
