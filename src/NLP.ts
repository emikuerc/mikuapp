import { containerBootstrap } from '@nlpjs/core';
import { Nlp } from '@nlpjs/nlp';
import { LangEn } from '@nlpjs/lang-en';
import { LangId } from '@nlpjs/lang-id';
const container = await containerBootstrap();

container.use(Nlp);
container.use(LangEn);
container.use(LangId);

const NLP = container.get('nlp');

NLP.settings.autoSave = false;

export default NLP;
