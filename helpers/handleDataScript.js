import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';

export default function handleDataScript({ action, ...data }, { selectedPosts }) {
    if (action === TypeActionAccount.CHANGE_PASSWORD) {
        return {
            password: data.password.split('\n'),
            action,
        };
    }
    if (action === TypeActionAccount.POSTING) {
        return {
            arrPost: selectedPosts,
        };
    }
    console.log({ action, ...data });
    return { action, ...data };
}
