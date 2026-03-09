export interface TranslationService {
    translate(text: string, targetLang: string): Promise<string>; 
}