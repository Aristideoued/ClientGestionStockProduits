import { SAVE_PRINCIPAL } from "./save.principal.action";
import { Principal } from "./model/principal.model";
import { SavePrincipalAction } from "./save.principal.action";
export function principalReducer(state:Principal,action:SavePrincipalAction) {

  switch(action.type){
     case SAVE_PRINCIPAL:
     return Object.assign({},state,action.payload);
     default:
     return state;


  }

}
