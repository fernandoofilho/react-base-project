import axios, { AxiosInstance, AxiosResponse } from "axios";

export abstract class BaseService<T> {
  protected api: AxiosInstance;
  protected resource: string;

  constructor(baseURL: string, resource: string) {
    this.api = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" },
    });
    this.resource = resource;
  }

  async getAll(): Promise<T[]> {
    const response: AxiosResponse<T[]> = await this.api.get(
      `/${this.resource}`
    );
    return response.data;
  }

  async getById(id: number | string): Promise<T> {
    const response: AxiosResponse<T> = await this.api.get(
      `/${this.resource}/${id}`
    );
    return response.data;
  }

  async create(data: Partial<T>): Promise<T> {
    const response: AxiosResponse<T> = await this.api.post(
      `/${this.resource}`,
      data
    );
    return response.data;
  }

  async update(id: number | string, data: Partial<T>): Promise<T> {
    const response: AxiosResponse<T> = await this.api.put(
      `/${this.resource}/${id}`,
      data
    );
    return response.data;
  }

  async remove(id: number | string): Promise<void> {
    await this.api.delete(`/${this.resource}/${id}`);
  }
}
