import { injectable } from "inversify";
import { TranslationService } from "../application/ports/translationService";
import { translate } from 'google-translate-api-x';

@injectable()
export class GoogleTranslationService implements TranslationService {
    async translate(text: string, targetLang: string): Promise<string> {
        try {
            const translation = await translate(text, { to: targetLang });
            console.log(`Translated '${text}' to '${translation.text}' in language '${targetLang}'`);

            return translation.text;
        } catch (error) {
            console.error('Error translating text:', error);
            throw new Error('Translation failed');
        }
    }
}