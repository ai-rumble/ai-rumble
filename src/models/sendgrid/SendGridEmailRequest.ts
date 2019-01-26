export interface SendGridNewEmailRequest {
  personalizations?: (PersonalizationsEntity)[] | null;
  to: string;
  from: ToEntityOrFrom;
  template_id: string;
}
export interface PersonalizationsEntity {
  to?: (ToEntityOrFrom)[] | null;
  subject: string;
  dynamic_template_data: DynamicTemplateData;
}
export interface ToEntityOrFrom {
  email: string;
}
export interface DynamicTemplateData {
  userFullName: string;
  userEmail: string;
  userEmailBody: string;
}
