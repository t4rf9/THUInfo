import {HomeFunction} from "src/ui/home/home";
import {ValidReceiptTypes} from "thu-info-lib/dist/lib/sports";

export interface Config {
	doNotRemindSemver: string;
	lastSelfVersion: number;
	firstDay: string;
	weekCount: number;
	semesterId: string;
	language: string;
	darkMode: boolean;
	newGPA: boolean;
	bx: boolean;
	reportHidden: string[];
	scheduleHeight: number;
	lastBroadcast: number;
	emailName: string;
	emailUnseen: number;
	receiptTitle: ValidReceiptTypes | undefined;
	waterId: string;
	waterBrand: string;
	appSecretLockMinutes: number | undefined;
	verifyPasswordBeforeEnterApp: boolean | undefined;
	verifyPasswordBeforeEnterReport: boolean | undefined;
	verifyPasswordBeforeEnterFinance: boolean | undefined;
	verifyPasswordBeforeEnterPhysicalExam: boolean | undefined;
	useBiometrics: boolean | undefined;
	appLocked: boolean | undefined;
	exitTimestamp: number | undefined;
	subFunctionUnlocked: boolean | undefined;
	homeFunctionDisabled: HomeFunction[];
	beta3Notified: boolean | undefined;
}

export const defaultConfigState: Config = {
	doNotRemindSemver: "0.0.0",
	lastSelfVersion: 0,
	firstDay: "2022-09-12",
	weekCount: 18,
	semesterId: "2021-2022-1",
	language: "auto",
	darkMode: false,
	newGPA: true,
	bx: false,
	reportHidden: [],
	scheduleHeight: 65,
	lastBroadcast: 0,
	emailName: "",
	emailUnseen: 0,
	receiptTitle: undefined,
	waterId: "",
	waterBrand: "6",
	appSecretLockMinutes: 0,
	verifyPasswordBeforeEnterApp: false,
	verifyPasswordBeforeEnterReport: false,
	verifyPasswordBeforeEnterFinance: false,
	verifyPasswordBeforeEnterPhysicalExam: false,
	useBiometrics: false,
	appLocked: false,
	exitTimestamp: 0,
	subFunctionUnlocked: false,
	homeFunctionDisabled: [],
	beta3Notified: false,
};
