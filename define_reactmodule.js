import {NativeModules} from 'react-native';

export function NameReactModule() {
	if(NativeModules.hasOwnProperty('HRMobileMainModule')){
			return NativeModules.HRMobileMainModule;
	}else if(NativeModules.hasOwnProperty('MailReactModule')){
		return NativeModules.MailReactModule;
	}else if(NativeModules.hasOwnProperty('HanWorkReactModule')){
		return NativeModules.HanWorkReactModule;
	}

};