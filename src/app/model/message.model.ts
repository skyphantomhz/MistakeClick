export class Message{
    constructor(
        public id : string,
        public userName: string,
        public email: string,
        public linkAva: string,
        public content: string,
        public color: string,
        public dateCreate: string
    ){}
}