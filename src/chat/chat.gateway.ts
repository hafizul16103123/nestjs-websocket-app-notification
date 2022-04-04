import { Logger } from '@nestjs/common';
import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import {Socket,Server} from 'socket.io';

@WebSocketGateway({namespace:'/chat'})
export class ChatGateway implements OnGatewayInit{
  
  private logger:Logger = new Logger("ChatGateway")
  @WebSocketServer() wss:Server

  afterInit(server: Server) {
    this.logger.log("Initialize")
  }

  @SubscribeMessage('chatToServer')
  handleMessage(client: Socket, payload: {sender:string,message:string}): void {
    this.wss.emit('chatToClient',payload)   //send response to every client
    
  }

}
