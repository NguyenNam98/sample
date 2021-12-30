import { regexEmail, regexNumber } from './regex';
function isValidEmail(value) {
    return regexEmail.test(String(value).toLowerCase());
}
function isValidUUID(value) {
    return regexNumber.test(value);
}
export default function HandleInputCreateAccount(text) {
    const date = new Date();
    const recomendNumber = 'Lỗi định dạng, ID tất cả đều phải là số.';
    const recomendEmail = 'Lỗi định dang email.';
    const contentImport = text.split('\n');
    const dataAccountsInput = contentImport.map(item => item.split('|'));
    let accounts = [];
    let data = {
        error: '',
        params: accounts,
    };
    for (let index = 0; index < dataAccountsInput.length; index++) {
        try {
            if (dataAccountsInput[index].length === 4) {
                let isEmailRecovery = isValidEmail(dataAccountsInput[index][2]);
                if (isEmailRecovery) {
                    let checkEmailStructure1 = isValidEmail(dataAccountsInput[index][0]);
                    if (checkEmailStructure1) {
                        //"EMAIL|PASSWORD|EMAIL_RECOVERY|PASSWORD_RECOVERY"
                        accounts.push({
                            uuid: '',
                            password: dataAccountsInput[index][1],
                            '2fa_key': '',
                            email: dataAccountsInput[index][0],
                            name: '',
                            birthday: '',
                            friends: [],
                            groups: [],
                            proxy_id: '',
                            cookies: '',
                            location: '',
                            gender: '',
                            status: 0,
                            user_id: '',
                            updated_at: '',
                            created_at: date,
                            email_recovery: dataAccountsInput[index][2],
                            password_recovery: dataAccountsInput[index][3],
                        });
                    } else {
                        //ID|PASSWORD|EMAIL_RECOVERY|PASSWORD_RECOVERY
                        let checkID = isValidUUID(dataAccountsInput[index][0]);
                        if (!checkID) throw `${dataAccountsInput[index][0]} ${recomendNumber}`;
                        accounts.push({
                            uuid: dataAccountsInput[index][0],
                            password: dataAccountsInput[index][1],
                            '2fa_key': '',
                            email: '',
                            name: '',
                            birthday: '',
                            friends: [],
                            groups: [],
                            proxy_id: '',
                            cookies: '',
                            location: '',
                            gender: '',
                            status: 0,
                            user_id: '',
                            updated_at: '',
                            created_at: date,
                            email_recovery: dataAccountsInput[index][2],
                            password_recovery: dataAccountsInput[index][3],
                        });
                    }
                } else {
                    let checkEmailStructure2 = isValidEmail(dataAccountsInput[index][3]);
                    if (!checkEmailStructure2) throw `${dataAccountsInput[index][3]} ${recomendEmail}`;
                    //"ID|PASSWORD|2FA|EMAIL
                    let checkID = isValidUUID(dataAccountsInput[index][0]);
                    if (!checkID) throw `${dataAccountsInput[index][0]}  ${recomendNumber}`;
                    accounts.push({
                        uuid: dataAccountsInput[index][0],
                        password: dataAccountsInput[index][1],
                        '2fa_key': dataAccountsInput[index][2],
                        email: dataAccountsInput[index][3],
                        name: '',
                        birthday: '',
                        friends: [],
                        groups: [],
                        proxy_id: '',
                        cookies: '',
                        location: '',
                        gender: '',
                        status: 0,
                        user_id: '',
                        updated_at: '',
                        created_at: date,
                        email_recovery: '',
                        password_recovery: '',
                    });
                }
            } else if (dataAccountsInput[index].length === 3) {
                //ID|PASSWORD|2FA
                let checkID = isValidUUID(dataAccountsInput[index][0]);
                if (!checkID) throw `${dataAccountsInput[index][0]} ${recomendNumber}`;
                accounts.push({
                    uuid: dataAccountsInput[index][0],
                    password: dataAccountsInput[index][1],
                    '2fa_key': dataAccountsInput[index][2],
                    email: '',
                    name: '',
                    birthday: '',
                    friends: [],
                    groups: [],
                    proxy_id: '',
                    cookies: '',
                    location: '',
                    gender: '',
                    status: 0,
                    user_id: '',
                    updated_at: '',
                    created_at: date,
                    email_recovery: '',
                    password_recovery: '',
                });
            } else if (dataAccountsInput[index].length === 2) {
                const isEmail = isValidEmail(dataAccountsInput[index][0]);
                if (!isEmail) {
                    //ID|PASSWORD
                    let checkID = isValidUUID(dataAccountsInput[index][0]);
                    if (!checkID) throw `${dataAccountsInput[index][0]}  ${recomendNumber}`;
                    accounts.push({
                        uuid: dataAccountsInput[index][0],
                        password: dataAccountsInput[index][1],
                        '2fa_key': '',
                        email: '',
                        name: '',
                        birthday: '',
                        friends: [],
                        groups: [],
                        proxy_id: '',
                        cookies: '',
                        location: '',
                        gender: '',
                        status: 0,
                        user_id: '',
                        updated_at: '',
                        created_at: date,
                        email_recovery: '',
                        password_recovery: '',
                    });
                } else {
                    //EMAIL|PASSWORD
                    accounts.push({
                        uuid: '',
                        password: dataAccountsInput[index][1],
                        '2fa_key': '',
                        email: dataAccountsInput[index][0],
                        name: '',
                        birthday: '',
                        friends: [],
                        groups: [],
                        proxy_id: '',
                        cookies: '',
                        location: '',
                        gender: '',
                        status: 0,
                        user_id: '',
                        updated_at: '',
                        created_at: date,
                        email_recovery: '',
                        password_recovery: '',
                    });
                }
            } else if (dataAccountsInput[index].length === 5) {
                // "ID|PASSWORD|2FA|EMAIL_RECOVERY|PASSWORD_RECOVERY"
                let checkID = isValidUUID(dataAccountsInput[index][0]);
                if (!checkID) throw `${dataAccountsInput[index][0]}  ${recomendNumber}`;
                let isEmail = isValidEmail(dataAccountsInput[index][3]);
                if (!isEmail) throw `${dataAccountsInput[index][3]}  ${recomendEmail}`;
                accounts.push({
                    uuid: dataAccountsInput[index][0],
                    password: dataAccountsInput[index][1],
                    '2fa_key': dataAccountsInput[index][2],
                    email: '',
                    name: '',
                    birthday: '',
                    friends: [],
                    groups: [],
                    proxy_id: '',
                    cookies: '',
                    location: '',
                    gender: '',
                    status: 0,
                    user_id: '',
                    updated_at: '',
                    created_at: date,
                    email_recovery: dataAccountsInput[index][3],
                    password_recovery: dataAccountsInput[index][4],
                });
            } else if (dataAccountsInput[index].length === 6) {
                // "ID|PASSWORD|2FA|EMAIL|EMAIL_RECOVERY|PASSWORD_RECOVERY"
                let checkID = isValidUUID(dataAccountsInput[index][0]);
                if (!checkID) throw `${dataAccountsInput[index][0]} ${recomendNumber}`;
                let isEmail = isValidEmail(dataAccountsInput[index][3]);
                let isEmailRecovery = isValidEmail(dataAccountsInput[index][4]);
                if (!isEmail) throw `${dataAccountsInput[index][3]} ${recomendEmail}`;
                if (!isEmailRecovery) throw `${dataAccountsInput[index][4]} ${recomendEmail}`;
                accounts.push({
                    uuid: dataAccountsInput[index][0],
                    password: dataAccountsInput[index][1],
                    '2fa_key': dataAccountsInput[index][2],
                    email: dataAccountsInput[index][3],
                    name: '',
                    birthday: '',
                    friends: [],
                    groups: [],
                    proxy_id: '',
                    cookies: '',
                    location: '',
                    gender: '',
                    status: 0,
                    user_id: '',
                    updated_at: '',
                    created_at: date,
                    email_recovery: dataAccountsInput[index][4],
                    password_recovery: dataAccountsInput[index][5],
                });
            }
        } catch (e) {
            data.error = e;
            break;
        }
    }
    data.params = accounts;
    return data;
}
