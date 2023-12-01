export interface ContactInterface{
  name:string,
  emil:string,
  description:string
}

export interface ContactFeedbackInterface{
  status:boolean,
  message?:string,
  data?:any
}
