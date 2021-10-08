import { environment } from '../environments/environment';

export class API {
    // BASE
    static readonly FAKE_BACKEND_URL = environment.jsonServerUrl;

    // SERVIÇOS
    static readonly FAKE_SERVICE_THEO = `${API.FAKE_BACKEND_URL}`;

    // ENDPOINTS
    static readonly ENDPOINT_DESENVOLVEDOR = `${API.FAKE_SERVICE_THEO}/desenvolvedores`;
}
