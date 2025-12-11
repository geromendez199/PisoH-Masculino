export interface HttpClientOptions {
  baseUrl?: string;
  headers?: Record<string, string>;
}

export class HttpClient {
  private readonly baseUrl: string;
  private readonly headers: Record<string, string>;

  constructor(options: HttpClientOptions = {}) {
    this.baseUrl = options.baseUrl ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api';
    this.headers = options.headers ?? { 'Content-Type': 'application/json' };
  }

  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'GET',
      headers: this.headers,
      cache: 'no-cache'
    });
    return this.handleResponse<T>(response);
  }

  async post<T, U>(path: string, body: U): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    });
    return this.handleResponse<T>(response);
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || 'Error en la solicitud');
    }
    return response.json() as Promise<T>;
  }
}

export const httpClient = new HttpClient();
