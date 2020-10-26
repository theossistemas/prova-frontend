export class GithubInfo {
    private _name: string;
    private _email: string;
    private _location: string;
    private _avatarURL: string;

    public static of(value: any): GithubInfo {
        const info = new GithubInfo();
        info._name = value.name;
        info._email = value.email;
        info._location = value.location;
        info._avatarURL = value.avatar_url;
        return info;
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get location(): string {
        return this._location;
    }

    get avatarURL(): string {
        return this._avatarURL;
    }
}
