import OpenAI from 'openai';
import { OpenAI_KEY } from './constants';
const openai = new OpenAI({
  apiKey: OpenAI_KEY,
   dangerouslyAllowBrowser: true
});


export default openai