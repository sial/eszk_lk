import axios from 'axios'

export default class Privileges {
    public static getPrivileges(): Promise<Object> {
        return axios.post('', {})
    }
}