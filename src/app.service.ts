import { HttpException, HttpStatus,Injectable } from '@nestjs/common';
import { HttpService } from 'nestjs-http-promise';
import { DataDTO } from './data.dto';

@Injectable()
export class AppService {
  
    constructor(
        private connect : HttpService
    ){}

    async sendMessageByClient(data:DataDTO):Promise<any>{

        const params:any={
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to":  `593${data.telephone_number}`,
        "type": "template",
        "template": {
            "name": process.env.TEMPLATE,
            "language": {
                "code": process.env.LANGUAGE_CODE
            },
            "components": [
                {
                    "type": "body",
                    "parameters": [
                        {
                            "type": "text",
                            "text": data.names
                        },
                        {
                            "type": "text",
                            "text": data.surnames
                        },
                        {
                            "type": "text",
                            "text": data.nui
                        },
                        {
                            "type": "text",
                            "text": data.plate
                        }
                    ]
                },
                {
                    "type": "button",
                    "sub_type": "url",
                    "index": "0",
                    "parameters": [
                        {
                            "type": "text",
                            "text": data.name_image
                        }
                    ]
                }
            ]
        }
        }

        const url = `${process.env.URL_META}/${process.env.VERSION}/${process.env.NUMBER_ID}/messages`
        const rsp = this.connect.post(url, params, { headers: { "Authorization": `Bearer ${process.env.TOKEN_META}` } })
        .then((res)=>{
            return res
        })
        .catch((err)=>{
                console.log(err)
                throw new HttpException(err.error_data.details,HttpStatus.BAD_REQUEST); 
            })
        
        return rsp;

    }
}
