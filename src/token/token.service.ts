import { Injectable, Post } from '@nestjs/common';
import { students } from  '../db'
import { v4 as uuid } from 'uuid'
import { HttpModule, HttpService } from '@nestjs/axios'
import { pluck } from 'rxjs';

@Injectable()
export class TokenService {
    constructor(private readonly httpService: HttpService) {}

    async getToken() {
        // const form = new FormData()
        // form.append('clientId', "12345");
        // form.append('clientSecret', "blahblah")

        // console.log(form)

        // this.httpService.post
        // Normal get request doesnt seem to work.
        // Nest will return as JSON, but the response object is not JSON
        // It is a complex and large object
        // We need to get the data property instead (response.data essentially)
        return await this.httpService.get("https://randomuser.me/api").pipe(pluck('data'))
    }

}
