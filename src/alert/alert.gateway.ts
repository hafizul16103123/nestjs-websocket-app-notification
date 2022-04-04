import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server} from 'socket.io';

@WebSocketGateway({namespace: '/alert'})
export class AlertGateway {
  @WebSocketServer() wss:Server;
  sendAlertToAll(msg: string){
  this.wss.emit('alertToClient',{type:'alerts',message:msg})
 }
}
