export interface UserProfile {
    id: string;
    primaryRole: string;
    educationLevel: EducationLevel;
    institutionContext: InstitutionContext;
    occupationTitle: string;
    englishReading: string;
    englishWriting: number;
    englishListening: number;
    englishSpeaking: number;
}
export enum EducationLevel {
    HIGH_SCHOOL = "HIGH_SCHOOL",
    UNDERGRAD = "UNDERGRAD",
    GRADUATE = "GRADUATE",
    OTHER = "OTHER",
}
export enum InstitutionContext {
    SCHOOL = "SCHOOL",
    COLLEGE = "COLLEGE",
    WORKPLACE = "WORKPLACE",
    SELF_STUDY = "SELF_STUDY",
}