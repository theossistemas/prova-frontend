export class LocalStorageUtils {

    public getUser() {
        return JSON.parse(localStorage.getItem('Theos.user'));
    }

    public saveLocalUserData(response: any) {
        this.saveUserToken(response.accessToken);
        this.saveUser(response.userToken);
    }

    public clearLocalUserData() {
        localStorage.removeItem('Theos.token');
        localStorage.removeItem('Theos.user');
    }

    public getUserToken(): string {
        return localStorage.getItem('Theos.token');
    }

    public saveUserToken(token: string) {
        localStorage.setItem('Theos.token', token);
    }

    public saveUser(user: string) {
        localStorage.setItem('Theos.user', JSON.stringify(user));
    }

}
